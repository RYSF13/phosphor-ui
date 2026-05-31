# 📟 PhosphorUI
**Explore the Retro Futurism. System Online.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
[![Version](https://img.shields.io/badge/version-1.2.0–MAJOR-red.svg)](#) 
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](#)
[![Vanilla JS](https://img.shields.io/badge/framework-Vanilla_JS-f7df1e.svg)](#)

A lightweight, pragmatic CSS/JS framework forged in the aesthetic of the 1980s cyberpunk matrix, CRT monitors, and monolithic terminal interfaces. 

PhosphorUI completely rejects modern build-tool bloat. No Node.js. No Webpack. No Virtual DOM. Just pure, brutalist HTML5, CSS3, and Vanilla JavaScript adhering strictly to the **Unix Philosophy**: *Do one thing, and do it well.*

---

## ✨ System Features (v1.2.0 Overhaul)

- 🎨 **The CRT Aesthetic** - Built-in, non-blocking scanlines, RGB sub-pixel banding, and phosphor flicker.
- 🪶 **Absolute Lightweight** - Drop in the CSS and JS, and you are live. Zero compile time.
- 📐 **Smart Grid Architecture** - Utilizing CSS Grid `minmax()` and Flexbox for mathematically perfect, media-query-free responsive degradation.
- 🛡️ **A11y & Focus Traps** - Geek-friendly keyboard navigation. Modals lock focus securely so your `Tab` key never escapes the terminal.
- 🔌 **Native Form Hacking** - Dropdown, Date, Color, and File pickers are purely styled native HTML5 tags. No bloated 500-line JS calendar plugins.

## 🚀 Initialization (Quick Start)

### CDN Payload (Recommended)

```html
<!-- Inject the Core Stylesheet -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/RYSF13/phosphor-ui@1.2.0/phosphor-ui.css">

<!-- Inject the Core Logic -->
<script src="https://cdn.jsdelivr.net/gh/RYSF13/phosphor-ui@1.2.0/phosphor-ui.js"></script>
```

### Basic Terminal Blueprint

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PhosphorUI Terminal</title>
    <link rel="stylesheet" href="phosphor-ui.css">
</head>
<body>
    <!-- Top Nav -->
    <header class="ph-pageheader">
        <div class="ph-logo">PHOSPHOR_UI <span class="ph-text-amber">v1.2.0</span></div>
        <button class="ph-mobile-toggle"><i class="ri-menu-line"></i></button>
    </header>

    <!-- Main Content -->
    <div class="ph-splitpagelayout">
        <main class="ph-main">
            <div class="ph-block">
                <h1 class="ph-text-cyan">Welcome to the Matrix</h1>
                <p>Start building retro-futuristic interfaces.</p>
                <button class="ph-button">Initialize Protocol</button>
            </div>
        </main>
    </div>

    <script src="phosphor-ui.js"></script>
</body>
</html>
```

## 📦 Component Syntax

### 1. Data Grids & Layouts
The v1.2.0 grid engine is entirely auto-fitting.

```html
<!-- 2-Column Grid (Stacks on mobile automatically) -->
<div class="ph-grid ph-grid-cols-2">
    <div class="ph-card">Sector 1</div>
    <div class="ph-card">Sector 2</div>
</div>

<!-- Flex Stacks -->
<div class="ph-stack-v">Vertical Stack</div>
<div class="ph-stack-h">Horizontal Stack</div>
```

### 2. Native Hardware Forms
We styled the raw HTML tags to look like a hacking console. 

```html
<label class="ph-form-label">System Override Code</label>
<input type="text" class="ph-input is-error" placeholder="Enter bypass...">

<!-- Native Date & Color Pickers, styled perfectly -->
<input type="date" class="ph-input">
<input type="color" class="ph-input" value="#ffb000">

<!-- Toggle Switch -->
<label class="ph-switch">
    <input type="checkbox" checked>
    <span class="ph-slider"></span>
</label>
```

### 3. Action Buttons & Dropdowns

```html
<button class="ph-button">Execute (Default)</button>
<button class="ph-button ph-btn-cyan">Scan (Cyan)</button>
<button class="ph-button ph-btn-red">Destroy (Danger)</button>
<button class="ph-button ph-btn-ghost">Abort (Ghost)</button>

<!-- Action Menu Dropdown -->
<div class="ph-dropdown-wrapper">
    <button class="ph-button">More Actions</button>
    <div class="ph-dropdown-menu">
        <a class="ph-dropdown-item">Reboot Module</a>
        <a class="ph-dropdown-item ph-text-red">Self-Destruct</a>
    </div>
</div>
```

### 4. Overlays & Feedback (Toasts/Modals)

```html
<!-- Modal Trigger -->
<button class="ph-button" data-ph-toggle="modal" data-ph-target="mainframe-modal">
    Access Mainframe
</button>

<!-- Trigger Toast via JS -->
<button class="ph-button" onclick="phui.toast('Access Granted.', 'success')">
    Ping Server
</button>
```

## 📝 A Note on Code Highlighting
PhosphorUI provides a beautiful structural container for code via the `.ph-code-block` class. However, **it does not include a built-in syntax highlighter** (to keep the library lightweight). 

If you are building a dev-blog or documentation site and need syntax highlighting, we highly recommend pairing PhosphorUI with **[highlight.js](https://highlightjs.org/)** or **Prism.js**. Their dark themes (like `monokai` or `a11y-dark`) blend flawlessly with our CRT aesthetic.

## 🎨 Token Variables (Color System)
Redefine the DNA of the UI by tweaking the CSS variables in `:root`.

```css
:root {
    --ph-amber: #ffb000;    /* Warning / Primary Focus */
    --ph-cyan: #00f3f3;     /* Info / Secondary Focus */
    --ph-red: #ff0055;      /* Danger / Error */
    --ph-green: #00ff41;    /* Success / Terminal Green */
    --ph-bg: #141210;       /* Deep Void Background */
}
```

## 📄 License
MIT License. Free to use, modify, and distribute. 

## 👤 Author
**Robert Y. Stanford**  
GitHub: [@RYSF13](https://github.com/RYSF13)

> *"We build our computers the way we build our cities—over time, without a plan, on top of ruins."* 

---
**PhosphorUI // Explore the retro futurism** 🚀
```