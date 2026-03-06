# Images & media

Add your photos and logo here. The site uses these paths:

## Logo

- **`/images/logo.png`** or **`/images/logo.svg`** — Used in the navbar and footer.
  - To change the logo: replace the file (keep the name `logo.png` or `logo.svg`) or update `LOGO_PATH` in `lib/site.ts`.

## Gallery

- **`/images/gallery/`** — Project photos shown on the Gallery page.
  - Add files (e.g. `project1.jpg`, `my-install.jpg`).
  - Then add or edit entries in **`lib/gallery.ts`** so each image has a `src` (path) and `alt` (description). Example:
    ```ts
    { src: '/images/gallery/my-install.jpg', alt: 'Commercial rooftop unit install' },
    ```

## Optional (for future use)

- **`images/panels/`** — Panel comparison: `old.jpg`, `new.jpg`
- **`images/installation/`** — Videos: `install.mp4`, `final.mp4`
- **`images/testimonials/`** — Customer videos: `customer1.mp4`, etc.

Use JPG or PNG for photos; use MP4 for videos.
