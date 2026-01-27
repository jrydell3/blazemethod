# BLAZE Project Context for Claude Code

> Use this document to understand the full context of The Blaze Method project. Your job is to help John deploy this to the web.

---

## What Is The Blaze Method?

The Blaze Method is a **free, open-source methodology** for safely shipping AI-generated code. It was created by **John Rydell** and his son **Otto Rydell** on **January 25, 2026**.

### The Three Pillars

1. **GUIDE** 🧭 — Helps while you build. An AI assistant that knows your patterns.
2. **GATE** 🚪 — Checks before you ship. Automated security, tests, standards.
3. **GUARD** 👁️ — Watches production. Monitoring, alerts, incident response.

### The Taglines (Use These Exactly)

- **Primary:** "Build fast. Ship safe. Sleep well."
- **The Soul:** "For humans who want to thrive alongside AI, not be replaced by it."
- **Manifesto:** "We don't vibe code. We BLAZE."
- **Sign-off:** "With love and fire. 🔥♥"

### The Philosophy

BLAZE addresses real developer anxiety (71% fear AI job displacement). The core message:

> "BLAZE doesn't replace people. It frees them."

AI handles the boring parts (security scans, compliance, monitoring) so humans can focus on creativity, judgment, and solving problems that matter.

---

## What's Been Created

John has a ZIP file called `BLAZE_Complete_Package.zip` containing:

| File | Description |
|------|-------------|
| `BLAZE_Complete_Guidebook.md` | 49KB comprehensive methodology guide |
| `BLAZE_ONE_PAGER.md` | Quick reference document |
| `BLAZE_Website_Final.html` | Complete single-page website (BUT see below for updated version) |
| `BLAZE_Website_Updated.html` | **USE THIS ONE** — Has the new tagline structure |
| `BLAZE_Slide.pptx` | Presentation slide |
| `BLAZE_SONG_LYRICS.md` | Fun song lyrics for the brand |
| `llms.txt` | AI/LLM optimization file (for theblazemethod.dev/llms.txt) |

### Important: Use the Updated Website

The file `BLAZE_Website_Updated.html` has the correct tagline structure with:
- "For humans who want to thrive alongside AI, not be replaced by it." in the hero
- "With love and fire. 🔥♥" in the footer

---

## Domain Status

John already owns a domain for BLAZE (likely `theblazemethod.dev` or `theblazemethod.com` — confirm with him).

---

## What Needs To Be Done

### 1. Create GitHub Repository

- Organization or personal repo: `theblazemethod` or similar
- Should contain:
  - The website files
  - The guidebook
  - `llms.txt` for AI discoverability
  - README explaining the project
  - LICENSE file (CC BY 4.0)

### 2. Deploy to Vercel (or similar)

- Connect GitHub repo to Vercel
- Point John's domain to Vercel
- Ensure `llms.txt` is accessible at root (e.g., `theblazemethod.dev/llms.txt`)

### 3. File Structure Suggestion

```
theblazemethod/
├── public/
│   ├── index.html          # The main website (from BLAZE_Website_Updated.html)
│   ├── llms.txt            # AI reference document
│   ├── og-image.png        # Social sharing image (needs creation)
│   └── favicon.ico         # Favicon (needs creation)
├── docs/
│   ├── guidebook.md        # Full methodology guide
│   ├── one-pager.md        # Quick reference
│   └── song.md             # Fun extras
├── README.md               # Project overview
├── LICENSE                 # CC BY 4.0
└── package.json            # If using any build tools (optional for static site)
```

For a simple static site, you might just need:
```
theblazemethod/
├── index.html
├── llms.txt
├── guidebook.md
├── README.md
└── LICENSE
```

### 4. Things to Create

- **og-image.png** — Social sharing image (1200x630px) with BLAZE branding
- **favicon.ico** — Fire emoji or custom icon
- **README.md** — GitHub-facing description of the project

---

## Brand Guidelines

### Colors (from the website CSS)
- Background: `#0a0a0a` (near black)
- Fire Orange: `#ff6b35`
- Fire Yellow: `#ffd700`
- Warm White: `#f5f0e8`
- Muted: `#888888`

### Fonts
- Headings: Inter (bold)
- Body: Inter
- Code: JetBrains Mono
- Accent: Playfair Display (for lyrics/quotes)

### Logo Treatment
- Text: "THE BLAZE METHOD" or "BLAZE"
- Can include: 🔥 emoji and ♥ heart
- Example: `🔥 BLAZE ♥`

---

## About John Rydell (For README/About sections)

- **Location:** College Grove, Tennessee
- **Background:** Serial entrepreneur
- **Companies Founded:**
  - PhoneBurner (2008) — Sales dialer platform, still running
  - MeetingBurner (2011) — Video meetings (shut down when Zoom dominated, now reviving)
  - FaxBurner (2012) — Fax app
- **Book:** "Little Gems for Business and Life"
- **Co-creator:** Otto Rydell (son, Kettering, Ohio)

---

## License

**Creative Commons Attribution 4.0 (CC BY 4.0)**

Anyone can use, share, adapt — just credit John and Otto Rydell.

License text to include:
```
The Blaze Method © 2026 by John Rydell and Otto Rydell is licensed under CC BY 4.0.
To view a copy of this license, visit https://creativecommons.org/licenses/by/4.0/
```

---

## Key URLs to Set Up

| URL | Content |
|-----|---------|
| `theblazemethod.dev` | Main website (index.html) |
| `theblazemethod.dev/llms.txt` | AI reference document |
| `theblazemethod.dev/guidebook` | Full methodology (optional) |

---

## First Step for Users

The website prominently features this as the first action:

```bash
npx @blazemethod/guide init
```

**Note:** This package doesn't exist yet. For now, the website can show this as "coming soon" or John can decide to build it. The current call-to-action could be:
- Download the guidebook
- Star the GitHub repo
- Join an email list

---

## Related Project: MeetingBurner 2.0

John is also reviving MeetingBurner as the **first company built with The Blaze Method**. This is a separate project but they're connected:

- MeetingBurner tagline: "Meetings for humans. And their agents."
- It's a video meeting platform designed for AI agent integration
- The entire build process will be blogged as proof BLAZE works

You don't need to work on MeetingBurner — just know it exists as context.

---

## Summary: Your Mission

Help John:

1. **Set up a GitHub repo** for The Blaze Method
2. **Deploy to Vercel** (or similar) connected to his domain
3. **Ensure the site works** with proper meta tags, social sharing, and `llms.txt` accessible
4. **Create any missing assets** (og-image, favicon, README)

The content is done. Now it needs to be live on the web.

---

## Questions to Ask John

1. What's the exact domain? (`theblazemethod.dev` or `.com`?)
2. Do you have a GitHub account already? Organization or personal?
3. Do you have a Vercel account, or prefer another host?
4. Want the `npx @blazemethod/guide init` to be real, or placeholder for now?
5. Want an email signup form on the site?

---

With love and fire. 🔥♥
