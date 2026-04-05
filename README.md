# PhosphorUI

**Explore the retro futurism**

A lightweight, pragmatic CSS/JS framework with a retro-futuristic aesthetic. PhosphorUI brings the nostalgic charm of CRT monitors, terminal interfaces, and 80s sci-fi design to modern web development.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Version](https://img.shields.io/badge/version-1.1.0-blue.svg)](https://github.com/RYSF13/phosphor-ui)

## ✨ Features

- 🎨 **Retro-Futuristic Design** - CRT scanlines, terminal aesthetics, neon accents
- 🪶 **Lightweight** - Pure CSS + Vanilla JavaScript, no dependencies
- 📱 **Responsive** - Mobile-first approach with adaptive layouts
- 🎭 **Rich Components** - Buttons, cards, modals, timelines, tables, forms and more
- ⚡ **Performance** - Optimized animations with Intersection Observer API
- 🎯 **Easy to Use** - Simple class-based system, minimal JavaScript required

## 🚀 Quick Start

### CDN (Recommended)

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/RYSF13/phosphor-ui@latest/phosphor-ui.min.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/RYSF13/phosphor-ui@latest/phosphor-ui.min.js"></script>
```

### Download

Download `phosphor-ui.min.css` and `phosphor-ui.min.js` from the [GitHub repository](https://github.com/RYSF13/phosphor-ui) and include them in your project:

```html
<link rel="stylesheet" href="path/to/phosphor-ui.min.css">
<script src="path/to/phosphor-ui.min.js"></script>
```

### Basic Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PhosphorUI App</title>
    <link rel="stylesheet" href="phosphor-ui.min.css">
</head>
<body>
    <header class="ph-pageheader">
        <div class="ph-logo">PHOSPHOR/UI</div>
        <div class="ph-mobile-toggle">
            <i class="ri-menu-line"></i>
        </div>
    </header>

    <div class="ph-block">
        <h1 class="ph-heading">Welcome to PhosphorUI</h1>
        <p>Start building retro-futuristic interfaces.</p>
        <button class="ph-button ph-btn-cut">Get Started</button>
    </div>

    <script src="phosphor-ui.min.js"></script>
</body>
</html>
```

## 📦 Components

### Buttons

```html
<!-- Standard Button -->
<button class="ph-button">Default</button>

<!-- Colored Variants -->
<button class="ph-button ph-button-amber">Amber</button>
<button class="ph-button ph-button-cyan">Cyan</button>
<button class="ph-button ph-button-red">Alert</button>

<!-- Shape Variations -->
<button class="ph-button ph-btn-cut">Cut Corner</button>
<button class="ph-button ph-btn-bi-cut">Bi-Cut</button>

<!-- Reversed Style -->
<button class="ph-button ph-button-reversed-amber">Reversed</button>
```

### Cards

```html
<div class="ph-card">
    <div class="ph-card-img-area">
        <img src="image.jpg" alt="Card image">
        <span class="ph-card-img-tag ph-label-amber">NEW</span>
    </div>
    <div class="ph-card-body">
        <div class="ph-sector-tag">Project Alpha</div>
        <h3 class="ph-card-title">Card Title</h3>
        <p class="ph-card-desc">Description of the card content goes here.</p>
        <button class="ph-button ph-btn-cut">Learn More</button>
    </div>
</div>
```

### Blocks

```html
<div class="ph-block bg-amber">
    <h2 class="ph-heading">Section Heading</h2>
    <p>Content with retro corner decorations.</p>
</div>
```

### Forms

```html
<input type="text" class="ph-textinput" placeholder="Enter text">
<textarea class="ph-textarea" placeholder="Your message"></textarea>
<select class="ph-select">
    <option>Option 1</option>
    <option>Option 2</option>
</select>

<!-- Toggle Switch -->
<label class="ph-toggleswitch">
    <input type="checkbox">
    <span class="ph-slider"></span>
</label>
```

### Modal

```html
<!-- Trigger -->
<button class="ph-button" data-ph-toggle="modal" data-ph-target="modal1">
    Open Modal
</button>

<!-- Modal Structure -->
<div class="ph-overlay" id="modal1">
    <div class="ph-modal-content">
        <h2 class="ph-heading">Modal Title</h2>
        <p>Modal content here.</p>
        <button class="ph-button" data-ph-dismiss="modal">Close</button>
    </div>
</div>
```

### Timeline

```html
<div class="ph-timeline">
    <div class="ph-timeline-item">
        <h3 class="text-amber">2024.01</h3>
        <p>Project initiated</p>
    </div>
    <div class="ph-timeline-item">
        <h3 class="text-amber">2024.06</h3>
        <p>Version 1.0 released</p>
    </div>
</div>
```

### Data Table

```html
<table class="ph-datatable">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>Project Alpha</td>
            <td><span class="ph-label-green">Active</span></td>
        </tr>
    </tbody>
</table>
```

## 🎨 Color System

PhosphorUI uses a carefully curated retro-futuristic color palette:

```css
--ph-amber: #ffb000     /* Primary accent */
--ph-cyan: #00f3f3      /* Secondary accent */
--ph-orange: #ff5f1f    /* Warning */
--ph-red: #ff0055       /* Error/Alert */
--ph-green: #00ff41     /* Success */
--ph-white: #cec5b5     /* Text */
--ph-bg: #141210        /* Background */
```

### Utility Classes

```html
<!-- Text Colors -->
<p class="text-amber">Amber text</p>
<p class="text-cyan">Cyan text</p>
<p class="text-green">Green text</p>

<!-- Backgrounds -->
<div class="bg-default">Default background</div>
<div class="bg-amber">Amber background</div>
<div class="bg-grid">Grid pattern</div>
<div class="bg-hatch">Hatch pattern</div>
```

## 📐 Layout System

### Split Page Layout

```html
<div class="ph-splitpagelayout">
    <aside class="ph-sidebar">
        <!-- Sidebar content -->
    </aside>
    <main class="ph-main">
        <!-- Main content -->
    </main>
</div>
```

### Grid Columns

```html
<div class="ph-columns ph-col-2">
    <div>Column 1</div>
    <div>Column 2</div>
</div>

<div class="ph-columns ph-col-3">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
</div>
```

## 🎬 Animations

PhosphorUI includes built-in scroll animations powered by Intersection Observer:

- Automatic fade-in on scroll for `.ph-block`, `.ph-columns`, lists
- CRT scanline effect overlay
- Subtle screen flicker animation
- No configuration needed - works out of the box

## 🔧 JavaScript API

```javascript
// Open modal programmatically
PhosphorUI.openModal(document.getElementById('modal1'));

// Close modal
PhosphorUI.closeModal(document.getElementById('modal1'));

// Toggle switch
PhosphorUI.toggleSwitch('mySwitch');

// Manual re-initialization (if needed)
PhosphorUI.init();
```

## 📱 Responsive Design

PhosphorUI is mobile-first with a breakpoint at `768px`:

- Automatic sidebar collapse on mobile
- Stack columns to single column
- Optimized touch targets
- Responsive tables with horizontal scroll

## 🌟 Typography

Two primary typefaces create the retro-futuristic aesthetic:

- **Space Mono** - Monospace font for body text
- **Orbitron** - Display font for headings and UI elements

## 📄 License

MIT License - feel free to use in personal and commercial projects.

## 👤 Author

**Robert Y. Stanford**  
GitHub: [@RYSF13](https://github.com/RYSF13)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/RYSF13/phosphor-ui/issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

**Built with nostalgia for the future** 🚀✨