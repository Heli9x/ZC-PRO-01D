# Z Comics UI - CSS Documentation

Complete style guide and reference for the Z Comics user interface stylesheet.

## Table of Contents
- [CSS Variables (Theming)](#css-variables-theming)
- [Global Styles](#global-styles)
- [Component Styles](#component-styles)
  - [Hero Header](#hero-header)
  - [Feature Banner](#feature-banner)
  - [Character Grid](#character-grid)
  - [Announcement Section](#announcement-section)
  - [Image Modal](#image-modal)
  - [Feature Modal](#feature-modal)
  - [Copyright Box](#copyright-box)
- [Responsive Design](#responsive-design)
- [Animations](#animations)
- [Color Palette](#color-palette)

---

## CSS Variables (Theming)

CSS custom properties defined in `:root` for easy theme customization.

```css
:root {
    --primary-yellow: #eccb0f;      /* Mustard yellow accent color */
    --bg-dark: #121418;             /* Main dark background */
    --card-bg: #1e2229;             /* Card/container background */
    --text-white: #ffffff;          /* Primary text color */
    --text-gray: #a0a0a0;           /* Secondary text color */
    --accent-blue: #56ccf2;         /* Blue accent (Transformer) */
    --accent-pink: #d856f2;         /* Pink accent (Cosmecox) */
    --font-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### Variable Usage
- **`--primary-yellow`** - Used for hero section background, highlights, borders, and hover effects
- **`--bg-dark`** - Applied to body, app container, and modal overlays
- **`--card-bg`** - Used for cards, banners, and modal content
- **`--text-white`** - Primary heading and body text
- **`--text-gray`** - Secondary text, subtitles, metadata
- **`--accent-blue`** - Optional accent color for blue-themed elements
- **`--accent-pink`** - Optional accent color for pink-themed elements
- **`--font-main`** - Fallback font family for body text

### Customization
To change the theme, modify the `:root` variables. All components will automatically update.

---

## Global Styles

### Universal Selector (`*`)
```css
* {
    box-sizing: border-box;   /* Include padding/border in size calculations */
    margin: 0;                /* Remove default margins */
    padding: 0;               /* Remove default padding */
    font-family: 'Quicksand'; /* Primary font family */
}
```

### Body
```css
body {
    background-color: #000;           /* Black background */
    font-family: var(--font-main);    /* Uses CSS variable for font */
    display: flex;                    /* Flex layout */
    justify-content: center;          /* Center content horizontally */
    padding: 10px 10px;               /* Add padding around content */
    color: var(--text-white);         /* White text */
}
```

### App Container
```css
.mobile-container, .app {
    width: 100%;                      /* Full width */
    background-color: var(--bg-dark); /* Dark background */
    min-height: 100vh;                /* At least full viewport height */
    overflow: hidden;                 /* Hide overflow */
    position: relative;               /* Positioning context for children */
}
```

---

## Component Styles

### Hero Header

#### `.hero-section`
Main hero header container with yellow background and optional background image.

```css
.hero-section {
    background-color: var(--primary-yellow); /* Yellow background */
    padding: 15px;                           /* Inner spacing */
    color: #000;                             /* Black text */
    position: relative;                      /* Positioning context */
    padding-bottom: 40px;                    /* Extra bottom padding */
    background-size: cover;                  /* Cover container */
    background-blend-mode: multiply;         /* Blend mode for background images */
}
```

#### `.top-nav`
Navigation bar containing brand and icons.

```css
.top-nav {
    display: flex;              /* Flex layout */
    justify-content: space-between;  /* Space items apart */
    align-items: center;        /* Center vertically */
    font-weight: bold;          /* Bold text */
    font-size: 1.25rem;         /* Larger text */
    margin-bottom: 20px;        /* Bottom margin */
}
```

**Child Elements:**
- `.brand` - Brand name/logo text, color: `#864708` (brown)
- `.nav-icons` - Container for navigation links
- `.icon` - Individual icon item, margin-left: `10px`
- `.icon a` - Links styled with `var(--card-bg)` color

#### `.hero-content`
Wrapper for hero heading and collage section.

```css
.hero-content {
    display: flex;                /* Flex layout */
    align-items: center;          /* Center items */
    justify-content: center;      /* Center horizontally */
    flex-direction: column;       /* Stack vertically */
}
```

#### `.hero-content h1`
Main hero heading with yellow background and cyan color.

```css
.hero-content h1 {
    font-size: 2.5rem;                                    /* Large size */
    font-family: "Rubik Wet Paint", sans-serif;          /* Decorative font */
    line-height: 2;                                       /* Double line height */
    text-transform: uppercase;                            /* Uppercase text */
    margin-bottom: 20px;                                  /* Bottom margin */
    position: relative;                                   /* Positioning context */
    text-align: center;                                   /* Center align */
    z-index: 2;                                           /* Above decorative Z */
    width: 100%;                                          /* Full width */
    color: #00aeff;                                       /* Cyan color */
    font-weight: 700;                                     /* Bold weight */
}
```

#### `.big-z-graphic`
Decorative large "Z" letter behind heading.

```css
.big-z-graphic {
    position: absolute;     /* Positioned absolutely */
    top: 40px;             /* Top offset */
    left: -10px;           /* Left offset (partially off-screen) */
    font-size: 12rem;      /* Huge size */
    opacity: 0.1;          /* Very transparent */
    font-weight: 900;      /* Very bold */
    line-height: 0;        /* No line height */
    pointer-events: none;  /* Can't interact with it */
}
```

#### `.hero-collage`
Grid container for featured content cards.

```css
.hero-collage {
    display: grid;                    /* CSS Grid layout */
    grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
    justify-content: space-evenly;    /* Space columns evenly */
    overflow: hidden;                 /* Hide overflow */
    gap: 12px;                        /* Space between items */
    margin-top: 15px;                 /* Top margin */
    padding: 5px;                     /* Inner padding */
    scroll-behavior: smooth;          /* Smooth scrolling */
}
```

#### `.collage-item`
Individual featured content card with hover effects.

```css
.collage-item {
    background: #333;                                           /* Dark background */
    border-radius: 10px;                                        /* Rounded corners */
    min-height: 150px;                                          /* Minimum height */
    width: 100px;                                               /* Fixed width */
    contain: content;                                           /* CSS containment */
    background-size: cover;                                     /* Cover container */
    background-repeat: no-repeat;                               /* No repeat */
    background-position: center;                                /* Center background */
    z-index: 10;                                                /* Default z-index */
    opacity: 0.7;                                               /* Slightly transparent */
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smooth transitions */
    cursor: pointer;                                            /* Pointer cursor */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);                 /* Shadow */
    border: 1px solid rgba(236, 203, 15, 0.15);                /* Subtle yellow border */
    position: relative;                                         /* Positioning context */
    overflow: hidden;                                           /* Hide overflow */
}
```

#### `.collage-item .hide`
Overlay text that appears on hover.

```css
.collage-item .hide {
    visibility: hidden;     /* Initially hidden */
    display: flex;          /* Flex layout */
    align-items: center;    /* Center vertically */
    justify-content: center;/* Center horizontally */
    height: 0%;             /* No height initially */
    width: 100%;            /* Full width */
    background: linear-gradient(135deg, rgba(236, 203, 15, 0.15) 0%, rgba(0, 0, 0, 0.9) 100%);
    color: var(--text-white);
    font-weight: 600;       /* Semi-bold */
    font-size: 0.85rem;     /* Small text */
    opacity: 0;             /* Transparent */
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

#### `.collage-item:hover`
Hover state for collage items.

```css
.collage-item:hover {
    width: 200px;           /* Expand width on hover */
    z-index: 11;            /* Increase z-index */
    opacity: 1;             /* Fully opaque */
    transform: scale(1.15) translateY(-3px);  /* Scale and lift */
    box-shadow: 0 12px 25px rgba(236, 203, 15, 0.25), 0 0 20px rgba(0, 0, 0, 0.6);
    border-color: rgba(236, 203, 15, 0.5);    /* Brighter yellow border */
}

.collage-item:hover .showonhover {
    visibility: visible;    /* Show text */
    padding: 5px;
    height: 100%;           /* Full height */
    opacity: 1;             /* Fully visible */
}

.collage-item:hover img {
    filter: brightness(0.7) saturate(0.8);    /* Dim and desaturate */
}
```

#### Color Variants
```css
.item-1 { background: linear-gradient(135deg, #a43a3a 0%, #7a2a2a 100%); } /* Red */
.item-2 { background: linear-gradient(135deg, #3a8ca4 0%, #2a5a75 100%); } /* Blue */
.item-3 { background: linear-gradient(135deg, #3aa455 0%, #2a7a35 100%); } /* Green */
```

---

### Feature Banner

#### `.feature-banner`
Container for feature content with image and text side-by-side.

```css
.feature-banner {
    background-color: var(--card-bg);         /* Card background */
    margin: 15px;                             /* Outer margin */
    border-radius: 12px;                      /* Rounded corners */
    padding: 20px;                            /* Inner padding */
    display: flex;                            /* Flex layout */
    justify-content: space-between;           /* Space items apart */
    align-items: center;                      /* Center vertically */
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);  /* Shadow */
    cursor: pointer;                          /* Pointer cursor */
}
```

#### `.feature-text`
Text content section of feature banner.

```css
.feature-text h2 {
    font-size: 1.5rem;      /* Large heading */
    line-height: 1.1;       /* Tight line height */
    margin-top: 5px;        /* Top margin */
}
```

#### `.subtitle`
Secondary text above feature heading.

```css
.subtitle {
    font-size: 0.75rem;          /* Small text */
    color: var(--text-gray);     /* Gray color */
    text-transform: uppercase;   /* Uppercase */
    letter-spacing: 1px;         /* Letter spacing */
}
```

#### `.feature-image-wrapper`
Right-aligned image section.

```css
.feature-image-wrapper {
    text-align: right;    /* Right align content */
    width: 45%;           /* 45% of container width */
}
```

#### `.img-placeholder`
Image container with optional background gradient.

```css
.img-placeholder {
    max-height: 200px;                    /* Maximum height */
    min-width: 100px;                     /* Minimum width */
    width: auto;                          /* Auto width */
    background: linear-gradient(to top, #56ccf2, #ffffff); /* Gradient fallback */
    border-radius: 8px;                   /* Rounded corners */
    margin-bottom: 5px;                   /* Bottom margin */
    position: relative;                   /* Positioning context */
    contain: content;                     /* CSS containment */
    background-size: cover;               /* Cover container */
    background-repeat: no-repeat;         /* No repeat */
}

.img-placeholder img {
    height: inherit;    /* Match container height */
    width: 100%;        /* Full width */
}
```

#### `.feature-meta`
Metadata section (title and description) below image.

```css
.feature-meta {
    display: flex;                /* Flex layout */
    flex-direction: column;       /* Stack vertically */
}

.feature-meta .title {
    font-weight: bold;    /* Bold */
    font-size: 0.8rem;    /* Small */
}

.feature-meta .desc {
    font-size: 0.6rem;         /* Extra small */
    color: var(--text-gray);   /* Gray */
}
```

---

### Character Grid

#### `.heroes-section`
Character gallery section container.

```css
.heroes-section {
    padding: 10px 15px;     /* Inner padding */
    margin-bottom: 20px;    /* Bottom margin */
}
```

#### `.section-header`
Section title area with optional "View All" button.

```css
.section-header {
    display: flex;                    /* Flex layout */
    justify-content: space-between;   /* Space items apart */
    align-items: center;              /* Center vertically */
    margin-bottom: 15px;              /* Bottom margin */
}
```

#### `.btn-small`
Small outline button style.

```css
.btn-small {
    background: transparent;           /* Transparent background */
    border: 1px solid var(--text-gray); /* Gray border */
    color: var(--text-white);          /* White text */
    padding: 4px 10px;                 /* Small padding */
    border-radius: 15px;               /* Rounded */
    font-size: 0.7rem;                 /* Small text */
    cursor: pointer;                   /* Pointer cursor */
}
```

#### `.section-grid` / `.character-grid`
Grid container for character cards.

```css
.character-grid, .section-grid {
    display: grid;                    /* CSS Grid */
    grid-template-columns: repeat(4, 1fr);  /* 4 equal columns */
    gap: 8px;                         /* Space between items */
}
```

#### `.char-card`
Individual character card.

```css
.char-card {
    background-color: #333;           /* Dark background */
    border-radius: 6px;               /* Rounded corners */
    padding: 5px;                     /* Inner padding */
    text-align: center;               /* Center text */
    display: flex;                    /* Flex layout */
    flex-direction: column;           /* Stack vertically */
    align-items: center;              /* Center items */
    min-height: 100px;                /* Minimum height */
    contain: content;                 /* CSS containment */
}
```

#### `.char-img`
Character image container with aspect ratio.

```css
.char-img {
    width: inherit;              /* Match parent width */
    aspect-ratio: 1 / 1.5;      /* Portrait ratio (1:1.5) */
    background-color: #000;      /* Black background */
    border-radius: 4px;          /* Slight rounding */
    margin-bottom: 5px;          /* Bottom margin */
    overflow: hidden;            /* Hide overflow */
}

.char-img img {
    height: 100%;     /* Full height */
    width: 100%;      /* Full width */
}
```

#### Color Theme Variants
```css
.card-blue .char-img {
    background: linear-gradient(to bottom, #a1c4fd, #c2e9fb);  /* Light blue */
}

.card-pink .char-img {
    background: linear-gradient(to bottom, #ff9a9e, #fecfef);  /* Light pink */
}

.card-dark .char-img {
    background: linear-gradient(to bottom, #434343, #000000);  /* Dark gray */
}

.card-navy .char-img {
    background: linear-gradient(to bottom, #1e3c72, #2a5298);  /* Navy blue */
}
```

#### `.char-name`
Character name text with ellipsis overflow.

```css
.char-name {
    font-size: 0.55rem;       /* Very small */
    font-weight: bold;        /* Bold */
    white-space: nowrap;      /* No wrapping */
    overflow: hidden;         /* Hide overflow */
    text-overflow: ellipsis;  /* Ellipsis for overflow */
    max-width: 100%;          /* Full width */
}
```

#### `.char-id`
Character year/ID text.

```css
.char-id {
    font-size: 0.5rem;             /* Tiny text */
    color: var(--text-gray);       /* Gray color */
}
```

---

### Announcement Section

#### `.announcement-section`
Call-to-action announcement container.

```css
.announcement-section {
    padding: 20px;              /* Inner padding */
    text-align: left;           /* Left align */
    border-top: 1px solid #333; /* Top border */
    margin-top: 10px;           /* Top margin */
}

.announcement-section h3 {
    font-size: 0.9rem;           /* Medium text */
    margin-bottom: 5px;          /* Bottom margin */
    text-transform: uppercase;   /* Uppercase */
}

.announcement-section p {
    font-size: 0.7rem;              /* Small text */
    color: var(--text-gray);        /* Gray text */
    margin-bottom: 15px;            /* Bottom margin */
}
```

#### `.btn-outline`
Large outline button style.

```css
.btn-outline {
    background: transparent;           /* Transparent */
    border: 1px solid var(--text-gray); /* Gray border */
    color: var(--text-white);          /* White text */
    padding: 8px 20px;                 /* Padding */
    width: 100%;                       /* Full width */
    border-radius: 4px;                /* Slight rounding */
    cursor: pointer;                   /* Pointer cursor */
    text-transform: uppercase;         /* Uppercase */
    font-size: 0.8rem;                 /* Small text */
}
```

---

### Image Modal

#### `.image-modal`
Full-screen modal container for image viewing.

```css
.image-modal {
    position: fixed;              /* Fixed positioning */
    top: 0; left: 0;              /* Stretch to corners */
    width: 100%;                  /* Full width */
    height: 100%;                 /* Full height */
    z-index: 1000;                /* High z-index */
    display: flex;                /* Flex layout */
    align-items: center;          /* Center vertically */
    justify-content: center;      /* Center horizontally */
}
```

#### `.modal-overlay`
Clickable dark overlay behind modal.

```css
.modal-overlay {
    position: absolute;               /* Absolute positioning */
    top: 0; left: 0;                  /* Stretch to corners */
    width: 100%;                      /* Full width */
    height: 100%;                     /* Full height */
    background-color: rgba(0, 0, 0, 0.85);  /* Dark semi-transparent */
    cursor: pointer;                  /* Pointer cursor */
}
```

#### `.modal-content`
Modal content wrapper with rounded corners and shadow.

```css
.modal-content {
    position: relative;              /* Relative positioning */
    z-index: 1001;                   /* Above overlay */
    background-color: var(--card-bg);/* Card background */
    border-radius: 12px;             /* Rounded corners */
    padding: 20px;                   /* Inner padding */
    max-width: 90%;                  /* Max 90% width */
    max-height: 90vh;                /* Max 90% viewport height */
    display: flex;                   /* Flex layout */
    flex-direction: column;          /* Stack vertically */
    align-items: center;             /* Center items */
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);  /* Large shadow */
    animation: modalSlideIn 0.3s ease-out;  /* Entrance animation */
}
```

#### `.modal-close`
Close button (X) positioned at top-right.

```css
.modal-close {
    position: absolute;           /* Absolute positioning */
    top: 10px; right: 15px;       /* Top-right corner */
    background: none;             /* No background */
    border: none;                 /* No border */
    color: var(--text-white);     /* White color */
    font-size: 2rem;              /* Large size */
    cursor: pointer;              /* Pointer cursor */
    padding: 0;                   /* No padding */
    width: 40px; height: 40px;    /* Fixed size */
    display: flex;                /* Flex layout */
    align-items: center;          /* Center */
    justify-content: center;      /* Center */
    transition: all 0.2s;         /* Smooth transition */
    z-index: 1002;                /* Above modal content */
}

.modal-close:hover {
    color: var(--primary-yellow); /* Yellow on hover */
    transform: scale(1.2);        /* Enlarge on hover */
}
```

#### `.modal-body`
Modal content wrapper with scrollable text.

```css
.modal-body {
    width: 100%;                  /* Full width */
    display: flex;                /* Flex layout */
    flex-direction: column;       /* Stack vertically */
    align-items: center;          /* Center items */
    gap: 15px;                    /* Space between items */
    overflow-y: auto;             /* Vertical scroll */
    max-height: 80vh;             /* Max 80% viewport height */
}
```

#### `.modal-image`
Image element inside modal.

```css
.modal-image {
    max-width: 100%;              /* Max full width */
    max-height: 70vh;             /* Max 70% viewport height */
    border-radius: 8px;           /* Rounded corners */
    object-fit: contain;          /* Contain image */
}
```

#### `.modal-title`
Title text below image.

```css
.modal-title {
    font-size: 1.2rem;            /* Large text */
    font-weight: bold;            /* Bold */
    color: var(--text-white);     /* White */
    text-align: center;           /* Center align */
}
```

---

### Feature Modal

#### `.feature-modal`
Full-screen modal for featured content with background image.

```css
.feature-modal {
    position: fixed;              /* Fixed positioning */
    top: 0; left: 0;              /* Stretch to corners */
    width: 100%;                  /* Full width */
    height: 100%;                 /* Full height */
    z-index: 1000;                /* High z-index */
    display: flex;                /* Flex layout */
    align-items: center;          /* Center vertically */
    justify-content: center;      /* Center horizontally */
}
```

#### `.feature-modal-overlay`
Clickable dark overlay.

```css
.feature-modal-overlay {
    position: absolute;               /* Absolute positioning */
    top: 0; left: 0;                  /* Stretch to corners */
    width: 100%;                      /* Full width */
    height: 100%;                     /* Full height */
    background-color: rgba(0, 0, 0, 0.85);  /* Dark semi-transparent */
    cursor: pointer;                  /* Pointer cursor */
}
```

#### `.feature-modal-content`
Modal content with background image and dark overlay.

```css
.feature-modal-content {
    position: relative;              /* Relative positioning */
    z-index: 1001;                   /* Above overlay */
    width: 90%;                      /* 90% width */
    max-width: 500px;                /* Max 500px width */
    min-height: 400px;               /* Minimum 400px height */
    border-radius: 12px;             /* Rounded corners */
    padding: 30px 25px;              /* Padding */
    display: flex;                   /* Flex layout */
    flex-direction: column;          /* Stack vertically */
    justify-content: flex-end;       /* Align to bottom */
    align-items: flex-start;         /* Align to left */
    background-size: cover;          /* Cover container */
    background-position: center;     /* Center background */
    background-repeat: no-repeat;    /* No repeat */
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);  /* Shadow */
    animation: featureModalSlideIn 0.3s ease-out; /* Animation */
    overflow: hidden;                /* Hide overflow */
}
```

#### `.feature-modal-backdrop`
Dark gradient overlay for text readability.

```css
.feature-modal-backdrop {
    position: absolute;             /* Absolute positioning */
    top: 0; left: 0;                /* Stretch to corners */
    width: 100%;                    /* Full width */
    height: 100%;                   /* Full height */
    background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 40%, transparent 100%);
    z-index: 0;                     /* Behind content */
}
```

#### `.feature-modal-close`
Close button for feature modal.

```css
.feature-modal-close {
    position: absolute;           /* Absolute positioning */
    top: 15px; right: 20px;       /* Top-right corner */
    background: none;             /* No background */
    border: none;                 /* No border */
    color: var(--text-white);     /* White color */
    font-size: 2.5rem;            /* Large size */
    cursor: pointer;              /* Pointer cursor */
    padding: 0;                   /* No padding */
    width: 45px; height: 45px;    /* Fixed size */
    display: flex;                /* Flex layout */
    align-items: center;          /* Center */
    justify-content: center;      /* Center */
    transition: all 0.2s;         /* Smooth transition */
    z-index: 1002;                /* Above modal content */
}

.feature-modal-close:hover {
    color: var(--primary-yellow); /* Yellow on hover */
    transform: scale(1.2);        /* Enlarge on hover */
}
```

#### `.feature-modal-body`
Content wrapper positioned above backdrop.

```css
.feature-modal-body {
    position: relative;       /* Relative positioning */
    z-index: 1;               /* Above backdrop */
    width: 100%;              /* Full width */
    display: flex;            /* Flex layout */
    flex-direction: column;   /* Stack vertically */
    gap: 15px;                /* Space between items */
}
```

#### `.feature-modal-title`
Feature modal heading.

```css
.feature-modal-title {
    font-size: 1.8rem;        /* Large text */
    font-weight: 700;         /* Very bold */
    color: var(--text-white); /* White */
    line-height: 1.2;         /* Tight line height */
    text-transform: uppercase;/* Uppercase */
}
```

#### `.feature-modal-description`
Feature modal description text.

```css
.feature-modal-description {
    font-size: 0.95rem;            /* Medium text */
    color: var(--text-white);      /* White */
    line-height: 1.6;              /* Loose line height */
    max-height: 150px;             /* Max height */
    overflow-y: auto;              /* Vertical scroll if needed */
}
```

---

### Copyright Box

#### `.copyright-box`
Floating fixed-position box in bottom-left corner.

```css
.copyright-box {
    position: fixed;                                        /* Fixed positioning */
    bottom: 20px; left: 20px;                              /* Bottom-left corner */
    z-index: 500;                                          /* High z-index */
    background-color: var(--card-bg);                      /* Card background */
    border-radius: 12px;                                   /* Rounded corners */
    padding: 12px 15px;                                    /* Padding */
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);            /* Shadow */
    border: 1px solid rgba(255, 255, 255, 0.1);          /* Subtle border */
    backdrop-filter: blur(10px);                           /* Blur backdrop */
    animation: copyrightSlideIn 0.4s ease-out;            /* Entrance animation */
}
```

#### `.copyright-content`
Flex container for logo and text.

```css
.copyright-content {
    display: flex;       /* Flex layout */
    align-items: center; /* Center items vertically */
    gap: 10px;           /* Space between logo and text */
}
```

#### `.copyright-logo`
Company logo image.

```css
.copyright-logo {
    width: 45px;                /* Fixed width */
    height: 45px;               /* Fixed height */
    border-radius: 6px;         /* Rounded corners */
    object-fit: cover;          /* Cover container */
    background-color: #000;     /* Black background fallback */
    padding: 2px;               /* Inner padding */
}
```

#### `.copyright-text`
Text section (company name and year).

```css
.copyright-text {
    display: flex;          /* Flex layout */
    flex-direction: column; /* Stack vertically */
    gap: 2px;               /* Minimal space */
}

.copyright-company {
    font-size: 0.75rem;        /* Small text */
    font-weight: 600;          /* Semi-bold */
    color: var(--text-white);  /* White */
    margin: 0;                 /* No margin */
    line-height: 1;            /* Tight line height */
}

.copyright-year {
    font-size: 0.65rem;       /* Extra small text */
    color: var(--text-gray);  /* Gray */
    margin: 0;                /* No margin */
    line-height: 1;           /* Tight line height */
}
```

---

## Responsive Design

### Mobile-Only Display
Hides content on screens 600px or larger.

```css
@media (min-width: 600px) {
    .mobile-only {
        display: none !important;
    }
}
```

**Usage:** Add `class="mobile-only"` to elements that should only appear on mobile devices.

### Desktop Warning Message
Displays incompatibility message on screens larger than 600px.

```css
@media (max-width: 599px) {
    .desktop-warning {
        display: none !important;
    }
}

.desktop-warning {
    width: 100%;                      /* Full width */
    height: 100vh;                    /* Full viewport height */
    display: flex;                    /* Flex layout */
    align-items: center;              /* Center vertically */
    justify-content: center;          /* Center horizontally */
    background-color: var(--bg-dark); /* Dark background */
    padding: 20px;                    /* Padding */
}

.desktop-warning p {
    font-size: 1.3rem;               /* Large text */
    color: var(--text-white);        /* White */
    text-align: center;              /* Center align */
    max-width: 600px;                /* Max width */
    line-height: 1.6;                /* Loose line height */
    font-weight: 500;                /* Medium weight */
}
```

**Purpose:** Shows a message on larger screens indicating the design is optimized for mobile.

---

## Animations

### Modal Slide-In
Entrance animation for image modal.

```css
@keyframes modalSlideIn {
    from {
        opacity: 0;           /* Start transparent */
        transform: scale(0.9); /* Start at 90% scale */
    }
    to {
        opacity: 1;           /* End opaque */
        transform: scale(1);  /* End at normal scale */
    }
}
```

**Duration:** 0.3s
**Easing:** ease-out
**Applied to:** `.modal-content`

### Feature Modal Slide-In
Entrance animation for feature modal.

```css
@keyframes featureModalSlideIn {
    from {
        opacity: 0;                          /* Start transparent */
        transform: scale(0.95) translateY(20px); /* Start at 95% scale, 20px down */
    }
    to {
        opacity: 1;                          /* End opaque */
        transform: scale(1) translateY(0);   /* End at normal scale */
    }
}
```

**Duration:** 0.3s
**Easing:** ease-out
**Applied to:** `.feature-modal-content`

### Copyright Slide-In
Entrance animation for copyright box.

```css
@keyframes copyrightSlideIn {
    from {
        opacity: 0;                              /* Start transparent */
        transform: translateX(-30px) translateY(30px); /* Start off-screen */
    }
    to {
        opacity: 1;                 /* End opaque */
        transform: translateX(0) translateY(0); /* End in position */
    }
}
```

**Duration:** 0.4s
**Easing:** ease-out
**Applied to:** `.copyright-box`

---

## Color Palette

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Mustard Yellow | `#eccb0f` | Hero section, highlights, accents |
| Dark Background | `#121418` | Main container background |
| Card Background | `#1e2229` | Card and modal backgrounds |
| White | `#ffffff` | Primary text |
| Gray | `#a0a0a0` | Secondary text |

### Accent Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Cyan | `#00aeff` | Hero heading |
| Accent Blue | `#56ccf2` | Optional accent |
| Accent Pink | `#d856f2` | Optional accent |
| Brand Brown | `#864708` | Brand text |

### Gradient Colors
| Gradient | Purpose |
|----------|---------|
| Red `#a43a3a` → `#7a2a2a` | Collage item variant |
| Blue `#3a8ca4` → `#2a5a75` | Collage item variant |
| Green `#3aa455` → `#2a7a35` | Collage item variant |
| Light Blue `#a1c4fd` → `#c2e9fb` | Card theme |
| Light Pink `#ff9a9e` → `#fecfef` | Card theme |
| Dark `#434343` → `#000000` | Card theme |
| Navy `#1e3c72` → `#2a5298` | Card theme |

### Shadow Colors
- **Light Shadow:** `rgba(0, 0, 0, 0.3)` - Subtle shadows
- **Medium Shadow:** `rgba(0, 0, 0, 0.4-0.6)` - Modal shadows
- **Dark Shadow:** `rgba(0, 0, 0, 0.8)` - Deep shadows
- **Accent Shadow:** `rgba(236, 203, 15, 0.25)` - Yellow glow

---

## Typography

### Font Stack
```
Primary: 'Quicksand'
Decorative: 'Rubik Wet Paint', 'Rubik Glitch'
Fallback: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
```

### Font Sizes (Relative Scale)
| Size | Use |
|------|-----|
| 2.5rem | Hero heading (h1) |
| 1.8rem | Feature modal title |
| 1.5rem | Feature banner heading (h2) |
| 1.3rem | Desktop warning message |
| 1.2rem | Modal title |
| 0.95rem | Feature modal description |
| 0.9rem | Announcement heading |
| 0.85rem | Collage item label |
| 0.8rem | Feature meta title |
| 0.75rem | Subtitle |
| 0.7rem | Announcement text |
| 0.65rem | Copyright year |
| 0.6rem | Feature meta description |
| 0.55rem | Character name |
| 0.5rem | Character ID |

### Font Weights
| Weight | Value | Use |
|--------|-------|-----|
| Regular | 400 | Body text |
| Semi-bold | 600 | Metadata, subtitles |
| Bold | 700 | Headings, titles |
| Very Bold | 900 | Decorative Z graphic |

---

## Spacing Scale

### Padding
| Size | Value | Use |
|------|-------|-----|
| Extra Small | 2px | Logo padding |
| Small | 5px | Card padding, text padding |
| Medium | 12px-15px | Container padding |
| Large | 20px | Modal padding, section padding |
| Extra Large | 30px | Feature modal padding |

### Margins
| Size | Value | Use |
|------|-------|-----|
| Small | 5px | Internal margins |
| Medium | 10px-15px | Section margins |
| Large | 20px | Bottom margins |

### Gap (Spacing Between Items)
| Size | Value | Use |
|------|-------|-----|
| Extra Small | 2px | Text line gap |
| Small | 8px | Character grid gap |
| Medium | 10px | Copyright box gap |
| Large | 12px-15px | Collage gap |
| Extra Large | 15px | Modal body gap |

---

## Best Practices

### Adding New Styles
1. **Use CSS Variables** - Reference existing colors and sizes from `:root`
2. **Follow Naming Convention** - Use descriptive class names with hyphens
3. **Maintain Z-Index Scale** - Keep layering consistent (500, 1000, 1001, 1002)
4. **Use Flexbox/Grid** - For layouts instead of floats
5. **Add Transitions** - For smooth interactions (use `cubic-bezier(0.25, 0.46, 0.45, 0.94)`)

### Performance Considerations
- Use `contain: content` for performance on large grids
- Use `backdrop-filter` sparingly (can impact performance)
- Keep animation durations short (300-400ms is ideal)
- Use CSS transforms and opacity for animations (GPU-accelerated)

### Accessibility
- Maintain sufficient color contrast (text on background)
- Provide focus states for interactive elements (not currently in stylesheet)
- Ensure buttons and clickable areas are at least 44px × 44px
- Use semantic HTML structure (managed by constructor.js)

---

## Customization Guide

### Changing Theme Colors
Edit the `:root` variables to change the entire theme:

```css
:root {
    --primary-yellow: #your-color;  /* Change primary accent */
    --bg-dark: #your-color;         /* Change dark background */
    --card-bg: #your-color;         /* Change card background */
    /* ... etc */
}
```

### Adjusting Component Sizes
Common size adjustments:

```css
/* Larger hero heading */
.hero-content h1 {
    font-size: 3rem;  /* Increase from 2.5rem */
}

/* Wider feature banner image */
.feature-image-wrapper {
    width: 55%;  /* Increase from 45% */
}

/* Bigger character cards */
.char-card {
    min-height: 130px;  /* Increase from 100px */
}
```

### Adding Hover Effects
Pattern for interactive elements:

```css
.your-element {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.your-element:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
```

---

## Browser Support
- Modern browsers with CSS Grid support (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- CSS Variables support required
- CSS Containment not critical (progressive enhancement)
- Backdrop-filter supported in modern browsers

