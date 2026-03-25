# Skin of the Earth

Exhibition website for *Skin of the Earth*, a group show curated by Tim Green at Three Rooms, 74 Beulah Rd E17 9LE — part of the Walthamstow Art Trail, June 2–8 2026.

## Local development

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deployment

The site is a single static HTML page — it deploys automatically to [Vercel](https://vercel.com) or [GitHub Pages](https://pages.github.com) with no build step required.

## Before publishing

Update the Instagram `href` links for each artist in `index.html` (currently set to `https://www.instagram.com/` as placeholders).
