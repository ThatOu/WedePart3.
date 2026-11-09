# Aqua Tropics - Tropical Fish & Aquarium Retail Website
**Student Name:** Yashodhan Nair  
**Student ID:** ST10446781  
**Course/Module:** Web Development (Part 3)  
**Academic Year:** 2026  

---

## 1. Project Overview
Aqua Tropics is a local retail store based in Durban, KwaZulu-Natal, specializing in tropical freshwater fish, aquatic plants, and aquarium maintenance supplies. 
Part 3 enhances the website built in Part 1 and Part 2 by integrating interactive JavaScript features (dynamic gallery lightbox, custom interactive map, search & filter algorithms), robust HTML5 and client-side JavaScript form validation with AJAX submission handling, comprehensive On-Page/Off-Page SEO strategies (meta tags, structured semantic HTML, `robots.txt`, and `sitemap.xml`), and instructions for cloud deployment via GitHub Pages / Netlify.

---

## 2. Sitemap & Website Architecture
```
Aqua Tropics Website Architecture
│
├── Home (index.html)
│   ├── Dynamic Hero Carousel & Banner
│   ├── Featured Products & Interactive Highlights
│   ├── Interactive Map (Leaflet.js Durban Store Location)
│   └── Accordion FAQ / Knowledge Base
│
├── About Us (about.html)
│   ├── Story, Mission & Vision
│   ├── Interactive Team / Values Tabs
│   └── Customer Testimonials Slider
│
├── Products & Services (products.html)
│   ├── Dynamic Search Bar & Category Filter
│   ├── Product Catalog Grid (Fish, Plants, Supplies)
│   └── Interactive Lightbox Gallery
│
├── Product Enquiry (enquiry.html)
│   ├── Custom Interactive Enquiry Form (Availability, Pricing, Sponsorship)
│   ├── Dynamic Pricing & Cost Calculation Logic
│   └── Client-side JavaScript Validation & AJAX Simulation
│
└── Contact Us (contact.html)
    ├── General Contact & Support Form
    ├── Dynamic Email Compilation Mailto Handler
    ├── Store Hours & Location Info
    └── Interactive Leaflet Map Container
```

---

## 3. SEO Implementation Strategy

### 3.1 On-Page SEO
* **Target Keywords:** `tropical fish durban`, `aquarium supplies KZN`, `freshwater fish store durban`, `aquatic plants south africa`, `aquarium maintenance`.
* **Title & Meta Tags:** Every page includes unique, descriptive `<title>` tags and customized `<meta name="description">` and `<meta name="keywords">` tags.
* **Semantic Header Hierarchy:** Strict hierarchy using single `<h1>` headers per page, followed by `<h2>` and `<h3>` tags for scannability and crawler parsing.
* **Image Optimization:** All `<img>` tags feature descriptive `alt` text and specified `width`/`height` attributes to minimize Cumulative Layout Shift (CLS).
* **Clean URLs & Open Graph:** Readable relative links and Open Graph meta markup (`og:title`, `og:description`, `og:type`) for social media indexing.

### 3.2 Off-Page & Technical SEO
* **`robots.txt`**: Placed at the root directory to direct search engine bots and reference the XML sitemap.
* **`sitemap.xml`**: Standardized XML sitemap indexing all 5 primary URLs with prioritized change frequencies.
* **Page Speed & Security**: Clean modular JS/CSS, optimized asset sizes, HTTPS enforcement headers ready for deployment platforms, and `rel="noopener noreferrer"` on external links.

---

## 4. Form Validation & Submissions

### 4.1 Product Enquiry Form (`enquiry.html`)
* **Purpose:** Allows users to enquire about fish species, equipment availability, custom tank setups, or sponsorship/volunteering.
* **Interactive Validation:** Client-side JavaScript validates full names, email syntax, selection inputs, and date pickers.
* **Dynamic Response:** Computes approximate cost estimates dynamically based on user selections before submission.
* **AJAX Handling:** Intercepts default form submission using `preventDefault()` and sends asynchronous requests with visual loading indicators and modal responses.

### 4.2 Contact Form (`contact.html`)
* **Purpose:** General user communications and customer service inquiries.
* **Validation & Compilation:** Real-time regex pattern checking for South African phone numbers (`^(\+27|0)[6-8][0-9]{8}$`) and message character counters.
* **Email Integration:** Compiles structured input into standard email query strings and opens the user's mail client or posts via AJAX API.

---

## 5. Deployment Instructions

### 5.1 GitHub Pages Deployment
1. Commit all files to the main branch of your GitHub repository:
   ```bash
   git add .
   git commit -m "Complete Part 3 functionality, SEO, and forms"
   git push origin main
   ```
2. Navigate to repository **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select `Deploy from a branch`.
4. Choose the `main` branch and `/ (root)` folder, then click **Save**.
5. Access your live site at `https://<username>.github.io/<repository-name>/`.

### 5.2 Netlify Deployment
1. Log in to [Netlify](https://www.netlify.com/).
2. Click **Add new site** > **Import an existing project**.
3. Connect your GitHub account and select your `Aqua-Tropics` repository.
4. Set Build Command to empty and Publish directory to `/` or `.`.
5. Click **Deploy Site**.

---

## 6. Detailed Changelog

### Version 3.0 - Part 3 Enhancement Release (Current)
* **Part 2 Feedback Integration:**
  * Fixed image contrast ratio issues in product card overlays.
  * Corrected mobile menu ARIA expanded states across all secondary navigation headers.
  * Standardized button padding and fixed typography scale inconsistencies on tablet viewports.
* **JavaScript & Interactive Features:**
  * Built dynamic Lightbox Gallery on `products.html` for expanding high-res product photos.
  * Integrated interactive Leaflet.js map with custom markers on `index.html` and `contact.html`.
  * Implemented live client-side Search and Category Filtering algorithm for product inventory.
  * Added accordion component for FAQs on `index.html`.
* **Form Logic & AJAX:**
  * Added comprehensive JavaScript form validation with visual error feedback on `enquiry.html` and `contact.html`.
  * Implemented dynamic price calculation logic on the enquiry form based on selected services and items.
  * Added simulated AJAX asynchronous form handling with loader state and feedback modals.
* **SEO & Technical Deliverables:**
  * Created root `robots.txt` and `sitemap.xml` files.
  * Added page-specific Title, Meta Description, Open Graph tags, and standard structured schema across all HTML files.
  * Added clean code documentation throughout JS, CSS, and HTML source files.

---

## 7. References
* **MDN Web Docs.** HTML5 Form Validation and Client-Side Scripting. https://developer.mozilla.org/en-US/docs/Learn/Forms
* **Leaflet.js Documentation.** An open-source JavaScript library for mobile-friendly interactive maps. https://leafletjs.com/
* **Google Search Central.** Search Engine Optimization (SEO) Starter Guide. https://developers.google.com/search/docs/fundamentals/seo-starter-guide
* **W3C Web Accessibility Initiative (WAI).** WAI-ARIA Overview. https://www.w3.org/WAI/standards-guidelines/aria/