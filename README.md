# hanpushen.github.io

Hanpu Shen's personal website, live at <https://hanpushen.github.io>.
It is a Jekyll site based on [academicpages](https://github.com/academicpages/academicpages.github.io).
GitHub Pages rebuilds it automatically on every push to `master`.

## Where things live

| To change…                  | Edit                                                        |
|-----------------------------|-------------------------------------------------------------|
| Bio text on the home page   | `_pages/about.md`                                           |
| Research interests (chips)  | `_data/research.yml`                                        |
| News items                  | `_data/news.yml` (newest first, one entry per item)         |
| Name, photo, sidebar links  | `author:` block in `_config.yml`; photo in `images/`        |
| Top navigation bar          | `_data/navigation.yml`                                      |
| CV                          | `_pages/cv.md`                                              |
| Styles                      | `_sass/_custom.scss` (theme files are left untouched)       |

## Adding content

**Blog post.** Copy `_drafts/TEMPLATE-post.md` to `_posts/YYYY-MM-DD-short-name.md` and fill it in.
Images go in `images/posts/YYYY-MM-DD-short-name/`.
To embed slides from Google Drive, share the file as "Anyone with the link can view",
then add `{% include slides.html id="FILE_ID" %}` (Google Slides) or
`{% include slides.html id="FILE_ID" type="drive" %}` (PDF/PPTX in Drive).
The post appears on the home page and in the blog automatically.

**Publication.** Add a file to `_publications/` (copy the existing one). Put the PDF in `files/`.
It appears on the home page and on `/publications/` automatically.

## Visitor map

Static sites cannot log visitors by themselves, so the map uses a free counter service.

1. Register the site at <https://clustrmaps.com> (or <https://mapmyvisitors.com>).
2. From the embed code they give you, copy the long value after `d=`.
3. In `_config.yml`, set `visitor_map.provider` to `"clustrmaps"` (or `"mapmyvisitors"`) and `visitor_map.id` to that value.

A small widget then loads in the footer of every page (that is what records visits), the full map
appears at `/visitors/`, and a "Visitors" link shows up in the navigation bar.
For detailed analytics you can also add a Google Analytics 4 ID under `analytics.google.tracking_id`.

## Previewing locally

Requires Ruby, Bundler and Node.

```bash
bundle config set --local path vendor/bundle && bundle install   # once
npm install                                                       # once (Playwright)

npm run serve                                   # live site at http://localhost:4000
npm run preview                                 # build + desktop/phone screenshots
```

`tools/preview.mjs` screenshots the main pages at desktop (1440px) and phone (390px) width side by side,
and flags broken pages or horizontal scrolling. Open `preview/index.html` to review them before pushing.
Use `--pages "/,/some/page/"` to choose which pages to capture.
