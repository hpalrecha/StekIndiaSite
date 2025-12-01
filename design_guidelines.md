# STEK India Website - Design Guidelines

## Design Approach
**Reference-Based Design**: Replicate STEK Automotive's (stekautomotive.com) premium, modern automotive aesthetic with clean lines, bold imagery, and professional polish.

## Core Visual Identity

### Color Palette
- **Header/Navigation**: Dark charcoal/black background (#1a1a1a to #000000)
- **Content Background**: Pure white (#ffffff)
- **Primary Accent**: Deep red/maroon for CTAs and highlights (#c41e3a or similar deep red)
- **Text**: Dark gray/black on white, white on dark backgrounds
- **Secondary**: Light grays for borders, subtle backgrounds

### Typography
- **Font Stack**: Modern sans-serif (Poppins, Inter, or similar professional typeface via Google Fonts)
- **Hierarchy**:
  - H1: 48-64px, bold weight (700-800) - hero headlines
  - H2: 36-48px, bold weight - section headers
  - H3: 24-32px, semibold - subsection titles
  - Body: 16-18px, regular weight (400)
  - Small text/captions: 14px

### Layout System
**Spacing Units**: Tailwind scale using 4, 6, 8, 12, 16, 20, 24, 32 units
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Container max-width: max-w-7xl
- Grid gaps: gap-6 to gap-8
- Component spacing: mb-8, mb-12, mb-16 for vertical rhythm

## Page-Specific Layouts

### Homepage
- **Hero Section**: Full-width, 80vh hero banner with large background image (automotive/PPF application), overlay gradient for text readability, centered headline (H1) with red CTA button
- **Product Categories Grid**: 2x2 or 3-column grid showcasing Paint Protection Film, Window Film, Windshield Film, Car-Care - each card with image, title, short description
- **Solutions Overview**: 3-column layout for Installers, Dealerships, Architectural with icons/images
- **About Snippet**: Split layout with image and text introducing STEK India
- **CTA Section**: Full-width banner with background image and prominent "Become an Installer" or "Find Installer" CTA

### Navigation Header
- **Dark background** with white text, sticky on scroll
- Logo left-aligned
- Main menu centered/right: Brands | Solutions (dropdown: Installers, Dealerships, Architectural) | Products | About | Installer Locator | Contact
- **Resources** as separate menu item with external links (opens new tab)
- Red CTA button: "Become Installer" (external link)

### Product Category Pages
- Hero banner with category-specific imagery
- Grid layout (3-4 columns desktop, 2 tablet, 1 mobile) for product variants
- Each product card: large image, product name, key features, "Learn More" link
- Filter/category tabs if multiple sub-categories

### Solutions Pages (Installers, Dealerships, Architectural)
- Hero section with solution-specific imagery
- Benefits grid (2-3 columns)
- Call-to-action sections with image + text layouts
- Contact/enquiry form integration

### Installer Locator
- Page header with search functionality placeholder
- Map section (placeholder for future implementation)
- List view grid for installer cards with location, contact info
- Filter options sidebar

### About Page
- Hero image/banner
- Mission/vision sections with alternating image-text layouts
- Company values/stats in card grid
- Team section (if applicable)

### Contact/Enquiry Page
- Split layout: Contact form (left) + location/info (right)
- Form fields: Name, Email, Phone, Subject, Message
- Office address, hours, contact details

### Footer
- Dark background matching header
- 4-column layout (desktop): Company Info | Quick Links | Products | Contact Info
- Social media icons
- Copyright and legal links
- Newsletter signup (optional)

## Component Design Patterns

### Buttons
- **Primary CTA**: Red background, white text, rounded corners, padding px-8 py-3
- **Secondary**: White/transparent with red border and red text
- **Button on images**: Blurred background backdrop (backdrop-blur-sm), no hover color changes

### Cards
- White background, subtle shadow, rounded corners (rounded-lg)
- Hover state: slight lift effect (transform translateY)
- Image aspect ratio: 16:9 or 4:3 for consistency

### Hero Banners
- Full-width, responsive height (min-h-[60vh] to min-h-[80vh])
- Dark overlay gradient on images (from bottom or full overlay at 40-50% opacity)
- Text always readable with sufficient contrast

## Images Strategy
**Critical Image Placements**:
- **Homepage Hero**: High-quality automotive/PPF installation image (professional, clean)
- **Product Category Cards**: Product application photos (car with film, window tint examples)
- **Solutions Pages**: Professional installer images, dealership settings, architectural applications
- **About Page**: Company/team photos, facility images
- All images should be high-resolution, professional quality, automotive industry aesthetic

## Responsive Breakpoints
- Mobile: < 768px (single column layouts)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)

## Accessibility
- High contrast text on backgrounds
- Accessible color contrast ratios (WCAG AA minimum)
- Clear focus states on interactive elements
- Semantic HTML structure
- Alt text for all images

## Key Design Principles
1. **Bold & Clean**: Large imagery, generous whitespace, clear hierarchy
2. **Professional Premium**: Automotive industry polish and sophistication
3. **User-Focused**: Easy navigation, clear CTAs, intuitive information architecture
4. **Consistent**: Reusable component patterns across all pages
5. **Performance**: Optimized images, minimal animations, fast load times