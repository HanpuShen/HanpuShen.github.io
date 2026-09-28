# Notes for Claude

## Communication
- Always talk to the site owner (Hanpu) in **Chinese (简体中文)**. Site content itself stays in English unless asked.

## What this repo is
Hanpu Shen's personal academic website (Jekyll, academicpages theme), served by GitHub Pages from `master`.
See README.md for the file map (bio, news, research interests, navigation, styles).

## Workflow
- Content is data-driven: bio in `_pages/about.md`, news in `_data/news.yml`, interests in `_data/research.yml`,
  blog categories in `_data/blog.yml`, custom CSS only in `_sass/_custom.scss` (leave theme files stock).
- New blog post: copy `_drafts/TEMPLATE-post.md`; every post needs `category:` (a key from `_data/blog.yml`),
  `excerpt:` and `{% include toc %}`. Post images go in `images/posts/<post-file-name>/`.
- Before pushing, build and check both desktop and phone views:
  `npm run preview` (needs `bundle install` into vendor/bundle and `npm install` first), then look at `preview/*.png`.
- Commit in small, descriptive commits.
- Never publish phone numbers or other private contact details on the site.

## Current state
- Blog is hidden (posts `published: false` via _config.yml defaults, blog/archive pages `published: false`,
  nav link commented out) until Hanpu decides what to include and the notes are cleaned up.
- Research interests section is hidden until Hanpu provides the text (`_data/research.yml` is empty).
- Hanpu prefers a short, plain bio — don't write long or elaborate About text.
- Only published papers go on the site; do not list under-review / in-submission papers.
- CV is a PDF at `files/Hanpu_Shen_CV.pdf` (nav links to it; /cv/ redirects there). It is a website version of
  Hanpu's Drive CV with the phone number and under-review papers removed — keep it that way when updating.
