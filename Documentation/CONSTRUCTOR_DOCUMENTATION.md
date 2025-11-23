# Z Comics UI - Constructor Classes Documentation

Complete API reference for component classes used in the Z Comics user interface.

## Quick Navigation
- [Header](#header) - Hero section with navigation and featured content
- [FeatureBanner](#featurebanner) - Content showcase section
- [HeroSection](#herosection) - Character gallery grid
- [AnnouncementSection](#announcementsection) - Call-to-action banner
- [ImageModal](#imagemodal) - Full-screen image viewer modal
- [FeatureModal](#featuremodal) - Feature content modal with background image
- [CopyrightBox](#copyrightbox) - Floating copyright and company info box

---

## Header

**Purpose:** Creates the main hero header with brand logo, navigation, and featured content cards.

### Constructor
```javascript
new Header(brand, heading, links, fcc, data={})
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `brand` | String | Brand name (e.g., "Z COMICS") |
| `heading` | String | Main headline text |
| `links` | Array<Array> | Navigation links: `[["icon-name", "url"], ...]` |
| `fcc` | Array<Array> | Featured cards: `[["name", "imageURL"], ...]` |
| `data` | Object | Optional background image: `{image: "url"}` |

### Properties
| Property | Type | Description |
|----------|------|-------------|
| `main` | HTMLElement | The header element |
| `brand` | String | Brand name |
| `heading` | String | Heading text |
| `links` | Object | Navigation links map |
| `fcc` | Object | Featured content map |
| `data` | Object | Additional data |

### Methods

**`render()`** → HTMLElement
- Creates header with navbar and hero content
- Returns the rendered header element
- Appends to DOM automatically

### Usage Example
```javascript
const header = new Header(
  "Z COMICS",
  "Heroes Live Forever",
  [["home", "#"], ["search", "#"]],
  [
    ["VillainX", "https://example.com/img1.jpg"],
    ["Transformor", "https://example.com/img2.jpg"]
  ],
  { image: "https://example.com/bg.jpg" }
);

app.appendChild(header.render());
```

---

## FeatureBanner

**Purpose:** Displays a featured content section with text and image side-by-side. Click to open detailed feature modal if description is provided.

### Constructor
```javascript
new FeatureBanner(data)
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | Object | Configuration object (see structure below) |

### Data Structure
```javascript
{
  title: "New Content",              // Main heading
  subtitle: "This Month",            // Secondary text
  description: "Full description...", // Optional: Opens FeatureModal on click
  banner: {
    image: "https://...",            // Banner image URL
    title: "The Lab",                // Image title
    subtitle: "Transformer Issue 1"   // Image description
  }
}
```

### Properties
| Property | Type | Description |
|----------|------|-------------|
| `main` | HTMLElement | The section element |
| `data` | Object | Feature configuration |

### Methods

**`render()`** → HTMLElement
- Builds feature banner with text and image
- Adds click event listener if description exists
- Returns the rendered section

### User Interactions
- **Click banner (if description exists)** → Opens FeatureModal with detailed content

### Usage Example
```javascript
const banner = new FeatureBanner({
  title: "New Content!",
  subtitle: "This Holiday",
  description: "This is an exciting new comic series launching this holiday season!",
  banner: {
    image: "https://example.com/comic.jpg",
    title: "New Comic on Black Valley Comics",
    subtitle: "Transformor"
  }
});

app.appendChild(banner.render());
```

---

## HeroSection

**Purpose:** Creates a grid of character cards with interactive image modal popup.

### Constructor
```javascript
new HeroSection(data)
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | Object | Grid configuration (see structure below) |

### Data Structure
```javascript
{
  sectionHeader: {
    title: "Heroes Gallery"
  },
  sectionGrid: {
    "Character Name": {
      image: "https://...",     // Character image URL
      year: "2019",             // Year/ID
      theme: "blue"             // Color theme (blue, pink, red, navy)
    },
    // ... more characters
  }
}
```

### Properties
| Property | Type | Description |
|----------|------|-------------|
| `main` | HTMLElement | The section element |
| `data` | Object | Grid configuration |

### Methods

**`render()`** → HTMLElement
- Creates character grid with clickable cards
- Each card opens ImageModal on click
- Returns the rendered section

### Theme Options
- `blue` - Blue gradient background
- `pink` - Pink gradient background
- `red` - Red gradient background
- `navy` - Navy gradient background

### Usage Example
```javascript
const heroes = new HeroSection({
  sectionHeader: { title: "Heroes Gallery" },
  sectionGrid: {
    "Transformor": {
      image: "https://example.com/transform.jpg",
      year: "2019",
      theme: "blue"
    },
    "Aqua Night": {
      image: "https://example.com/aqua.jpg",
      year: "2019",
      theme: "blue"
    }
  }
});

app.appendChild(heroes.render());
```

### Interactions
- **Click card** → Opens full-resolution image in modal
- **Modal close** → Click X button or overlay to dismiss

---

## AnnouncementSection

**Purpose:** Creates a call-to-action announcement banner with button.

### Constructor
```javascript
new AnnouncementSection(data)
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | Object | Configuration object (see structure below) |

### Data Structure
```javascript
{
  title: "IMPORTANT ANNOUNCEMENT!!",
  description: "Don't forget to keep up with updates...",
  buttonText: "Follow",
  link: "https://example.com"
}
```

### Properties
| Property | Type | Description |
|----------|------|-------------|
| `main` | HTMLElement | The section element |
| `data` | Object | Announcement configuration |

### Methods

**`render()`** → HTMLElement
- Creates announcement section with button link
- Returns the rendered section

### Usage Example
```javascript
const announcement = new AnnouncementSection({
  title: "IMPORTANT ANNOUNCEMENT!!",
  description: "Don't forget to keep up with updates on social media",
  buttonText: "Follow",
  link: "https://linktr.ee/Z_comics_studios"
});

app.appendChild(announcement.render());
```

---

## ImageModal

**Purpose:** Full-screen modal for viewing images in detail.

### Constructor
```javascript
new ImageModal(imageSrc, title="")
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `imageSrc` | String | Image URL to display |
| `title` | String | Optional title/caption |

### Properties
| Property | Type | Description |
|----------|------|-------------|
| `main` | HTMLElement | The modal container |
| `imageSrc` | String | Image source URL |
| `title` | String | Title text |

### Methods

**`render()`** → HTMLElement
- Creates and displays the modal
- Appends to document.body
- Attaches event listeners

**`close()`** → void
- Removes modal from DOM
- Called by close button or overlay click

**`static open(imageSrc, title="")`** → void
- Convenience method to create and render in one call
- Recommended usage pattern

### Usage Example
```javascript
// Automatic way (recommended)
ImageModal.open("https://example.com/hero.jpg", "Transformer");

// Manual way
const modal = new ImageModal("https://example.com/hero.jpg", "Transformer");
modal.render();

// Close programmatically
modal.close();
```

### User Interactions
- **Click X button** → Closes modal
- **Click overlay** → Closes modal
- **Escape key** → (Not implemented, can be added)

---

## FeatureModal

**Purpose:** Full-screen modal displaying a feature with background image, dark overlay, and detailed description text. Triggered by clicking FeatureBanner elements.

### Constructor
```javascript
new FeatureModal(title, description, imageSrc)
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | String | Feature title heading |
| `description` | String | Detailed feature description (supports HTML) |
| `imageSrc` | String | Background image URL |

### Properties
| Property | Type | Description |
|----------|------|-------------|
| `main` | HTMLElement | The modal container |
| `title` | String | Feature title |
| `description` | String | Feature description |
| `imageSrc` | String | Background image source URL |

### Methods

**`render()`** → HTMLElement
- Creates and displays the feature modal
- Applies background image with dark gradient overlay
- Appends to document.body
- Attaches event listeners

**`close()`** → void
- Removes modal from DOM
- Called by close button or overlay click

**`static open(title, description, imageSrc)`** → void
- Convenience method to create and render in one call
- Recommended usage pattern

### Usage Example
```javascript
// Automatic way (recommended)
FeatureModal.open(
  "New Comic Series",
  "Experience the epic tale of heroes and villains in this stunning new series!",
  "https://example.com/feature-bg.jpg"
);

// Manual way
const modal = new FeatureModal(
  "New Comic Series",
  "Experience the epic tale...",
  "https://example.com/feature-bg.jpg"
);
modal.render();

// Close programmatically
modal.close();
```

### User Interactions
- **Click X button** → Closes modal
- **Click overlay** → Closes modal
- **Description scrollable** → If content exceeds container height

### Visual Features
- Background image with dark gradient overlay
- High z-index (1000+) for top-layer display
- Slide-in animation on open
- Text content overlays background with dark backdrop

---

## CopyrightBox

**Purpose:** Floating fixed-position box displaying company logo, name, and copyright year. Typically placed in bottom-left corner.

### Constructor
```javascript
new CopyrightBox(logoSrc, companyName, year="2024")
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `logoSrc` | String | Company logo image URL |
| `companyName` | String | Company/brand name |
| `year` | String | Copyright year (defaults to "2024") |

### Properties
| Property | Type | Description |
|----------|------|-------------|
| `main` | HTMLElement | The copyright box container |
| `logoSrc` | String | Logo image source URL |
| `companyName` | String | Company name |
| `year` | String | Copyright year |

### Methods

**`render()`** → HTMLElement
- Creates and displays the copyright box
- Appends to document.body
- Returns the rendered element

### Usage Example
```javascript
const copyrightBox = new CopyrightBox(
  "https://example.com/logo.png",
  "Z Comics Studios",
  "2024"
);

copyrightBox.render();

// With default year (2024)
const copyrightBox2 = new CopyrightBox(
  "https://example.com/logo.png",
  "Z Comics"
);

copyrightBox2.render();
```

### Visual Features
- Fixed position (bottom-left corner)
- Backdrop blur effect
- Logo image with rounded corners
- Semi-transparent dark background
- Slide-in animation on load
- Responsive design with proper spacing

---

## Integration Example

```javascript
const app = document.querySelector(".app");

// Create header
app.appendChild(
  new Header(
    "Z COMICS",
    "Heroes Live Forever",
    [["home", "#"], ["search", "#"]],
    [["VillainX", "url1"], ["Transformor", "url2"]],
    { image: "bg.jpg" }
  ).render()
);

// Create feature banner (with modal trigger)
app.appendChild(
  new FeatureBanner({
    title: "New Content!",
    subtitle: "This Holiday",
    description: "Epic new series launching this season!", // Opens modal on click
    banner: {
      image: "feature.jpg",
      title: "New Comic",
      subtitle: "Issue 1"
    }
  }).render()
);

// Create hero/character grid
app.appendChild(
  new HeroSection({
    sectionHeader: { title: "Heroes Gallery" },
    sectionGrid: {
      "Transformer": { image: "t.jpg", year: "2019", theme: "blue" },
      "Aqua Night": { image: "a.jpg", year: "2019", theme: "blue" }
    }
  }).render()
);

// Create announcement section
app.appendChild(
  new AnnouncementSection({
    title: "IMPORTANT ANNOUNCEMENT!!",
    description: "Follow us on social media for updates",
    buttonText: "Follow",
    link: "https://linktr.ee/Z_comics_studios"
  }).render()
);

// Add copyright box to page
new CopyrightBox(
  "https://example.com/logo.png",
  "Z Comics Studios",
  "2024"
).render();
```

---

## CSS Classes Reference

| Class | Element | Purpose |
|-------|---------|---------|
| `.hero-section` | Header | Main hero wrapper |
| `.top-nav` | Nav | Navigation bar |
| `.brand` | Span | Brand logo text |
| `.nav-icons` | Div | Navigation icons container |
| `.hero-content` | Div | Hero content wrapper |
| `.big-z-graphic` | Div | Large decorative letter |
| `.hero-collage` | Div | Featured content grid |
| `.collage-item` | Div | Individual feature card |
| `.mobile-only` | Div | Visible only on screens < 600px |
| `.feature-banner` | Section | Feature section wrapper |
| `.feature-text` | Div | Feature text content |
| `.feature-image-wrapper` | Div | Image section |
| `.subtitle` | Span | Subtitle text |
| `.heroes-section` | Section | Character grid section |
| `.section-header` | Div | Section title area |
| `.section-grid` | Div | Character grid container |
| `.char-card` | Article | Character card |
| `.card-[theme]` | Article | Theme variant (blue, pink, red, navy) |
| `.char-img` | Div | Character image container |
| `.char-name` | Span | Character name |
| `.char-id` | Span | Character year/ID |
| `.announcement-section` | Section | Announcement wrapper |
| `.announcement-content` | Div | Announcement content |
| `.btn-outline` | Button | Outline button style |
| `.image-modal` | Div | Image modal container |
| `.modal-overlay` | Div | Modal overlay (clickable to close) |
| `.modal-content` | Div | Modal content wrapper |
| `.modal-body` | Div | Modal body content |
| `.modal-image` | Img | Modal image |
| `.modal-title` | P | Modal title |
| `.modal-close` | Button | Close button |
| `.feature-modal` | Div | Feature modal container |
| `.feature-modal-overlay` | Div | Feature modal overlay |
| `.feature-modal-content` | Div | Feature modal content wrapper |
| `.feature-modal-backdrop` | Div | Dark gradient overlay on background |
| `.feature-modal-body` | Div | Feature modal body content |
| `.feature-modal-title` | H2 | Feature modal title |
| `.feature-modal-description` | P | Feature modal description |
| `.feature-modal-close` | Button | Feature modal close button |
| `.copyright-box` | Div | Copyright box container (fixed position) |
| `.copyright-content` | Div | Copyright content wrapper |
| `.copyright-logo` | Img | Company logo image |
| `.copyright-text` | Div | Copyright text section |
| `.copyright-company` | P | Company name |
| `.copyright-year` | P | Copyright year |
| `.desktop-warning` | Div | Compatibility warning for screens > 600px |

---

## Browser Support
- Modern browsers with ES6 support
- Tested on Chrome, Firefox, Safari, Edge
- Mobile responsive design

## Notes
- All components use template literals for HTML construction
- Event listeners are automatically attached in render methods
- Modal appends directly to document.body
- Components return rendered elements for flexible DOM insertion
