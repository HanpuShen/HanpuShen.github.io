// "Binocular" preview: renders every key page of the built site at desktop
// and phone widths, side by side, so layout problems on either are obvious.
//
//   bundle exec jekyll build        # produces _site/
//   node tools/preview.mjs          # writes preview/index.html + PNGs
//
// Options: --site <dir> (default _site), --out <dir> (default preview),
//          --pages "/,/publications/" (default: the list below)
import { createServer } from 'node:http';
import { readFile, mkdir, writeFile, stat } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';
import { chromium } from 'playwright';

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, all) =>
    a.startsWith('--') ? [...acc, [a.slice(2), all[i + 1]]] : acc, []));
const siteDir = resolve(args.site ?? '_site');
const outDir = resolve(args.out ?? 'preview');
const pages = (args.pages ?? '/,/publications/,/year-archive/,/posts/2023/06/Reinforcement-learning/,/visitors/')
  .split(',').map(s => s.trim()).filter(Boolean);

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'phone', width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 },
];

const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.json': 'application/json',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.pdf': 'application/pdf' };

const server = createServer(async (req, res) => {
  let p = join(siteDir, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  try {
    if ((await stat(p)).isDirectory()) p = join(p, 'index.html');
  } catch { if (!extname(p)) p += '.html'; }
  let body;
  try { body = await readFile(p); } catch { res.writeHead(404); return res.end('not found'); }
  res.writeHead(200, { 'content-type': types[extname(p)] ?? 'application/octet-stream' });
  res.end(body);
}).listen(0);
const base = `http://localhost:${server.address().port}`;

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch();
const rows = [];
for (const page of pages) {
  const slug = page.replace(/\W+/g, '_').replace(/^_|_$/g, '') || 'home';
  const shots = [];
  for (const vp of viewports) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height },
      isMobile: vp.isMobile, deviceScaleFactor: vp.deviceScaleFactor ?? 1 });
    const tab = await ctx.newPage();
    const errors = [];
    tab.on('pageerror', e => errors.push(e.message));
    const resp = await tab.goto(base + page, { waitUntil: 'networkidle', timeout: 30000 }).catch(e => (errors.push(e.message), null));
    await tab.waitForTimeout(1000); // let the theme's fade-in animation finish
    const overflow = await tab.evaluate(() => document.documentElement.scrollWidth - window.innerWidth).catch(() => 0);
    const file = `${slug}-${vp.name}.png`;
    await tab.screenshot({ path: join(outDir, file), fullPage: true });
    shots.push({ vp, file, status: resp?.status() ?? 'ERR', overflow, errors });
    await ctx.close();
  }
  rows.push({ page, shots });
  console.log(page, shots.map(s => `${s.vp.name}:${s.status}${s.overflow > 0 ? ` overflow+${s.overflow}px` : ''}`).join(' '));
}
await browser.close();
server.close();

const esc = s => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]);
await writeFile(join(outDir, 'index.html'), `<!doctype html><meta charset="utf-8">
<title>Site preview</title>
<style>body{font:14px system-ui;margin:24px;background:#f4f4f4}section{margin-bottom:48px}
.pair{display:flex;gap:24px;align-items:flex-start}figure{margin:0;background:#fff;padding:8px;box-shadow:0 1px 4px #0002}
figure.desktop img{width:720px}figure.phone img{width:195px}figcaption{color:#555;margin-bottom:6px}.warn{color:#b00}</style>
<h1>Site preview — desktop vs phone</h1>
${rows.map(r => `<section><h2>${esc(r.page)}</h2><div class="pair">${r.shots.map(s => `
<figure class="${s.vp.name}"><figcaption>${s.vp.name} ${s.vp.width}px · HTTP ${s.status}
${s.overflow > 0 ? `<span class="warn">· horizontal overflow ${s.overflow}px</span>` : ''}
${s.errors.map(e => `<div class="warn">${esc(e)}</div>`).join('')}</figcaption>
<a href="${s.file}"><img src="${s.file}"></a></figure>`).join('')}</div></section>`).join('')}`);
console.log(`\nOpen ${join(outDir, 'index.html')}`);
