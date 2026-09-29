# Notes for Claude

## Communication
- Always talk to the site owner (Hanpu) in **Chinese (简体中文)**. Site content itself stays in English unless asked.

## What this repo is
Hanpu Shen's personal academic website (Jekyll, academicpages theme), served by GitHub Pages from `master`.
See README.md for the file map (bio, news, research interests, navigation, styles).

## Workflow
- Content is data-driven: bio in `_pages/about.md`, news in `_data/news.yml`, interests in `_data/research.yml`,
  blog categories in `_data/blog.yml`, custom CSS only in `_sass/_custom.scss` (leave theme files stock).
- New blog post: copy `_drafts/TEMPLATE-post.md`; every post needs `published: true`, `category:` (a key from `_data/blog.yml`)
  and `excerpt:`; text-heavy posts also get `{% include toc %}`. Post images go in `images/posts/<post-file-name>/`.
- Before pushing, build and check both desktop and phone views:
  `npm run preview` (needs `bundle install` into vendor/bundle and `npm install` first), then look at `preview/*.png`.
- Commit in small, descriptive commits.
- Never publish phone numbers or other private contact details on the site.

## Current state
- Blog is open with a "Tutorials" category: posts embedding Hanpu's Google Slides tutorials
  (`{% include slides.html id="..." %}`). Posts are unpublished by default (_config.yml); a post shows only with
  `published: true`. The old 2023 notes stay unpublished until cleaned up. Year/category archives stay hidden.
- Only put Drive material on the site that Hanpu picked; skip anything tied to unpublished research.
- Research interests section is hidden until Hanpu provides the text (`_data/research.yml` is empty).
- Hanpu prefers a short, plain bio — don't write long or elaborate About text.
- Only published papers go on the site; do not list under-review / in-submission papers.
- CV is a PDF at `files/Hanpu_Shen_CV.pdf` (nav links to it; /cv/ redirects there). It is a website version of
  Hanpu's Drive CV with the phone number and under-review papers removed — keep it that way when updating.
- Publications link straight to the real paper (`paperurl` in `_publications/*.md`: OpenReview/arXiv);
  the old /publication/... pages just redirect there. Never invent paper links — ask Hanpu.
