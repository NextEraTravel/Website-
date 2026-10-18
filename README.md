# Next Era Travel Website

Website for Next Era Travel, a luxury travel advisory specializing in destination weddings, honeymoons, and couples travel, with river cruises, wellness escapes, and group travel.

## Brand direction

Soft luxury, emotionally intelligent, calm and direct. The site should make a visitor feel understood before it asks for anything. Travel is not just about where you go, it is about how you feel while you are there.

- Lead with feeling and perspective, not deals or "book now" language
- Short paragraphs, minimal emojis, no em dashes
- Palette: sage, cream, beige, soft mauve, terracotta accent
- Fonts: Montserrat (headings), Lato (body), Pinyon Script (small accents)

## Layout

An editorial, photo-led structure: a scrolling free-guide banner above the header, a header with a Menu panel, a hero with a row of photos, a second scrolling banner of services, a pattern-backed intro, a services carousel, a highlighted free guides section, alternating image-and-text blocks, a numbered 01 to 05 process, a closing call-to-action band, and a multi-column footer. Inner pages use a hero with a photo banner and a closing band.

## Pages and files

| File | Purpose |
| --- | --- |
| `index.html` | Home, including the free guides section (`#guides`) |
| `weddings-honeymoons.html` | Weddings and honeymoons, with Sandals (`#sandals`) and Beaches (`#beaches`) sections |
| `custom-travel.html` | Custom travel (couples, families, multigenerational) |
| `river-cruises.html` | River cruises |
| `wellness-travel.html` | Wellness escapes for everyone |
| `group-travel.html` | Corporate retreats and events, youth sports, golf and tennis, family and women's trips, escorted and independent |
| `podcast.html` | Podcast |
| `order.html` | Guides to order |
| `about.html` | About Christine |
| `process.html` | How it works and the planning investment |
| `blog.html` | Blog index (add each post as its own page) |
| `privacy.html` | Privacy Policy |
| `terms.html` | Terms & Conditions |
| `contact.html` | Book a consultation |
| `styles.css` | Shared styles |
| `site.js` | Menu panel and services carousel |

This is a plain static site with no build step. Open `index.html` in a browser to preview it.

The header (with the top banner) and the footer are repeated in every page between `SHARED-TOP` and `SHARED-FOOTER` comments. If you change the menu or footer links, update them in each file.

## Adding photos

Every photo spot is currently a soft color block. To use a real photo, put the image in an `images/` folder and add a background to the block:

```html
<div class="ph arch" style="background-image:url(images/your-photo.jpg)" role="img" aria-label="Describe the photo"></div>
```

Keep the existing `ph-` color class as a fallback while the image loads.

## Links to add

Search for `href="#"` to find these. Each has a comment above it.

- `weddings-honeymoons.html`: Sandals co-branded link, Beaches Resorts link
- `index.html`: Close the Tabs, Ocean or River guide, Honeymoon Vibe quiz, Destination Wedding quiz
- `podcast.html`: Apple Podcasts, Spotify, cover art, episode list
- `order.html`: checkout link for the Destination Wedding Planning Dashboard

## Before launch

- Replace `hello@example.com` in `contact.html` with the real email, or swap the button for a booking link
- Confirm the Instagram link in the footer (`instagram.com/nexteratravel`) and add other social links
- Add real client testimonials to the commented section on the home page
- No prices are shown on the site. Planning investment details are shared on the free discovery call
- Replace the text credential badges with your official logo files (see the comment above the `badges` list; keep only logos you are licensed to display)
- Have an attorney review `privacy.html` and `terms.html`, and add your Florida Seller of Travel registration number in `terms.html`
- Replace the "Coming soon" blog cards on `index.html` with real posts as you publish them
- Review the Sandals and Beaches copy so the reasons match your own experience
- Review the About page story and credentials, and add a portrait

## Deploying

Works as-is on GitHub Pages, Netlify, or Vercel. Point the host at the repository root.
