# Z Comics UI - Constructor Classes Documentation

Complete API reference for component classes used in the Z Comics user interface.

## Quick Navigation
- [Header](#header) - Hero section with navigation and featured content
- [FeatureBanner](#featurebanner) - Content showcase section
- [HeroSection](#herosection) - Character gallery grid
- [AnnouncementSection](#announcementsection) - Call-to-action banner
- [ImageModal](#imagemodal) - Full-screen image viewer

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

**Purpose:** Displays a featured content section with text and image side-by-side.

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
- Returns the rendered section

### Usage Example
```javascript
const banner = new FeatureBanner({
  title: "New Content!",
  subtitle: "This Holiday",
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

## Integration Example

```javascript
const app = document.querySelector(".app");

app.append(
  new Header(
    "Z COMICS",
    "Heroes Live Forever",
    [["home", "#"], ["search", "#"]],
    [["VillainX", "url1"], ["Transformor", "url2"]],
    { image: "bg.jpg" }
  ).render(),

  new FeatureBanner({
    title: "New Content!",
    subtitle: "This Holiday",
    banner: {
      image: "feature.jpg",
      title: "New Comic",
      subtitle: "Issue 1"
    }
  }).render(),

  new HeroSection({
    sectionHeader: { title: "Heroes Gallery" },
    sectionGrid: {
      "Transformer": { image: "t.jpg", year: "2019", theme: "blue" },
      "Aqua Night": { image: "a.jpg", year: "2019", theme: "blue" }
    }
  }).render(),

  new AnnouncementSection({
    title: "IMPORTANT ANNOUNCEMENT!!",
    description: "Follow us on social media",
    buttonText: "Follow",
    link: "https://linktr.ee/Z_comics_studios"
  }).render()
);
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
| `.image-modal` | Div | Modal container |
| `.modal-overlay` | Div | Modal overlay |
| `.modal-content` | Div | Modal content wrapper |
| `.modal-image` | Img | Modal image |
| `.modal-title` | P | Modal title |
| `.modal-close` | Button | Close button |

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
