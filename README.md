# VAST BOM Calculator (A-VAR Edition)

A single-file, client-side Bill of Materials (BOM) calculator for VAST deployments. Modern UI, no backend, ready for static hosting (DigitalOcean, Netlify, GitHub Pages, etc).

## 🚀 Usage
- Open `index.html` in your browser.
- All calculations run locally, nothing is sent to a server.
- Uses `d-capacities.json` for D-Box lookup data.

## 📁 Repo Structure
```
index.html           # Main app (all UI, logic, and styling)
d-capacities.json    # D-Box capacity lookup data
README.md            # This file
.gitignore           # (Optional) Ignore OS/editor cruft
```

## 🌐 Deploying (DigitalOcean, Netlify, etc)
- **Publish directory:** `/` (repo root)
- **No build command needed**
- Make sure `index.html` is at the root

## 🧹 Cleaned up
All backend/server code, Node.js dependencies, and legacy folders have been removed. This repo is now ultra-minimal and static-only.

## 📝 Comments
- See code comments in `index.html` for logic and UI explanations.
- `d-capacities.json` can be edited for new hardware SKUs.

---
Maintained by fgshepherd & Cascade AI. For questions or improvements, open an issue or PR!
