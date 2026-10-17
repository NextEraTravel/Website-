# Next Era Travel Website

Website for Next Era Travel, a luxury travel advisory specializing in destination weddings, honeymoons, and couples travel, with wellness and group travel as growing areas.

## Brand direction

Soft luxury, emotionally intelligent, calm and direct. The site should make a visitor feel understood before it asks for anything. Travel is not just about where you go, it is about how you feel while you are there.

- Lead with feeling and perspective, not deals or "book now" language
- Short paragraphs, minimal emojis, no em dashes
- Palette: sage, cream, beige, soft mauve, terracotta accent
- Fonts: Montserrat (headings), Lato (body), Pinyon Script (small accents)

## Layout

The home page follows an editorial, photo-led structure: hero with a row of four photos, a pattern-backed intro with paired buttons, a services carousel, three alternating image-and-text blocks, a numbered 01 to 05 process, a closing call-to-action band, a free guide signup, and a multi-column footer. Inner pages use a hero with a photo banner, followed by content and a closing band.

## Pages and files

| File | Purpose |
| --- | --- |
| `index.html` | Home |
| `weddings-honeymoons.html` | Destination Weddings & Honeymoons |
| `couples-travel.html` | Couples Travel |
| `wellness-travel.html` | Wellness & Soft Luxury Travel |
| `group-travel.html` | Group Travel & Retreats |
| `about.html` | About Christine |
| `process.html` | How It Works & Planning Fees |
| `contact.html` | Book a Consultation |
| `styles.css` | Shared styles |
| `site.js` | Mobile menu and services carousel |

This is a plain static site with no build step. Open `index.html` in a browser to preview it.

## Adding photos

Every photo spot is currently a soft color block. To use a real photo, put the image in an `images/` folder and add a background to the block:

```html
<div class="ph arch" style="background-image:url(images/your-photo.jpg)" role="img" aria-label="Describe the photo"></div>
```

Keep the existing `ph-` color class as a fallback while the image loads.

## Before launch

- Replace `hello@example.com` in `contact.html` with the real email, or swap the button for a booking link
- Point the "Get the snapshot" button on the home page to the Close the Tabs lead magnet
- Confirm the Instagram link in the footer (`instagram.com/nexteratravel`) and add other social links
- Add real client testimonials to the commented section on the home page
- Confirm the planning fees shown on `process.html`, `weddings-honeymoons.html`, and `group-travel.html`
- Review the About page story and credentials, and add a portrait

## Deploying

Works as-is on GitHub Pages, Netlify, or Vercel. Point the host at the repository root.
