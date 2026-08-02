# Final Mile Providers LLC — Website

Static marketing site built with **Astro**. You own 100% of this code. No Wix, no lock-in.
Hosting target: **Netlify (free tier)**. Form handling: **Web3Forms (free)**.

---

## 1. What's here

```
src/
  data/site.js        <- EDIT THIS: phone, email, address, nav, client brands, Web3Forms key
  layouts/Base.astro  <- page shell (head, header, footer)
  components/         <- Header, Footer, LogoMarquee (rotating grayscale logos)
  pages/             <- index, who-we-are, why-fmp, clients, contact, privacy
  styles/global.css   <- all styling + brand colors
public/img/          <- logos + photos (swap these to change images)
dist/                <- the BUILT site (this is what gets deployed)
```

## 2. Edit content (no coding needed for most changes)
- **Phone / email / address / social links:** `src/data/site.js`
- **Client brands in the rotating banner:** the `brands` array in `src/data/site.js`
- **Photos:** drop a new file into `public/img/` with the same name (e.g. `hero-truck.jpg`)
- **Page text:** open the matching file in `src/pages/` and edit the words between the tags

## 3. Run locally (optional)
Requires Node 18+.
```
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # outputs the site to dist/
```

## 4. Web3Forms (contact form) — 2 minutes
1. Go to https://web3forms.com, enter `sales@finalmileproviders.com`, get a free **Access Key**.
2. Paste it into `WEB3FORMS_KEY` in `src/data/site.js`.
3. Rebuild (`npm run build`) or let Netlify rebuild on push. Submissions arrive at that email. No server needed.

## 5. Deploy to Netlify (free)
**Option A — drag & drop (fastest):** at https://app.netlify.com, drag the `dist/` folder onto the dashboard. Done.
**Option B — Git (auto-deploys on every change):** push this repo to GitHub, then in Netlify "Add new site → Import from Git." Build settings are already in `netlify.toml` (build `npm run build`, publish `dist`).

## 6. Point the domain WITHOUT breaking email  ⚠️ READ CAREFULLY
Your DNS is hosted at Wix and your **email/Teams run on Microsoft 365**. Change ONLY the two website records. Everything else stays untouched or email breaks.

In Wix → Domains → Manage DNS Records:

| Change ONLY these 2 | From (Wix) | To (Netlify) |
|---|---|---|
| A `@` (finalmileproviders.com) | 185.230.63.107 / .186 / .171 | the A record Netlify shows you (e.g. `75.2.60.5`) |
| CNAME `www` | cdn1.wixdns.net | `your-site.netlify.app` |

**NEVER touch these (Microsoft 365 email + Teams):**
MX → outlook • TXT (SPF `v=spf1...outlook`, `MS=ms84508980`, google-site-verification, DKIM `google._domainkey`) • CNAME (`autodiscover`, `enterpriseenrollment`, `enterpriseregistration`, `lyncdiscover`, `sip`) • SRV (`sipfederationtls`, `sip`).

In Netlify: Site → Domain management → Add custom domain → `finalmileproviders.com`. Netlify shows the exact A/CNAME values to use — trust those over the example above.

## 7. After the new site is verified live
- Send AND receive a test email to confirm Microsoft 365 still works.
- Then cancel the Wix **Premium website plan** (keep the domain registered at Wix, ~$15–20/yr, or transfer to Cloudflare Registrar later).

## 8. Swap the client logos for your own art
The banner currently shows brand names as styled text (grayscale, colorize on hover).
To use your own designed logo images: put PNGs in `public/img/` and edit `src/components/LogoMarquee.astro` to render `<img src="/img/yourlogo.png" class="chip-img" />` instead of the text chip. Keep them grayscale via CSS `filter:grayscale(1)`.
