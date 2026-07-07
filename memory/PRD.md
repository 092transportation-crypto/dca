# DCA Limo Website - Product Requirements Document

## Original Problem Statement
Build a professional, modern, and trustworthy website for DCA Limo (previously bwiairports.com) - an airport transportation and limousine service. The site should align with established airport transportation brands, emphasizing reliability, safety, and punctuality.

## Core Requirements
- Multi-page structure: Home, Services, Fleet, About, Contact, Blog, Booking
- Professional English content with clear, confident tone
- Golden/amber and black theme (matching logo colors)
- DCA Limo branding with logo
- Mobile-responsive design
- Third-party booking integration (mylimobiz.com widget)
- Service areas showcase based on user-provided location data
- Contact email: info@dclimos.com
- Phone: +1 (877) 609-1919

## Tech Stack
- **Frontend:** React, Tailwind CSS, React Router, Shadcn/UI
- **Backend:** FastAPI (minimal use in this project)
- **Database:** MongoDB (not actively used)

---

## What's Been Implemented

### ✅ Completed (January 2025)

### ✅ SEO Backlink Package — Maryland Focus (December 2025)

**On-site link building:**
- Added visible "Trusted Partners & Resources" section on HomePage with **29 high-authority outbound backlinks** (airports BWI/DCA/IAD, tourism boards Visit Maryland/Annapolis/Baltimore/DC/Frederick, venues National Aquarium/Merriweather/Camden Yards/M&T Bank Stadium/Live! Casino, universities USNA/UMD/JHU/Georgetown/GWU, government AA County/Montgomery County/NIH/NIST/MD MVA, industry NLA/FMCSA/BBB/MD Chamber/Annapolis Chamber).
- Added internal links cluster with 14 anchor-text chips pointing to Services/Fleet/Booking/Contact.
- Expanded Footer with Maryland Service Areas strip (26 MD cities) and Partners & Resources strip (15 authority links).
- Upgraded structured data: LimousineService schema with 22 MD cities in `areaServed`, OfferCatalog with 8 services, AggregateRating, sameAs social links. Added WebSite and BreadcrumbList schemas.
- Updated geo meta to Maryland (US-MD, Hanover coordinates).
- Massively expanded hidden SEO content block in `index.html`: 31-city MD location list, 37-item partner/resource outbound link list, and 5 new MD-specific SEO sections (Annapolis, Baltimore, Bethesda, BWI Airport, Maryland Cities).
- Updated `sitemap.xml` with image sitemap extension and current lastmod dates.

**Off-site backlink action plan:**
- Created `/app/BACKLINKS_CHECKLIST.md` — a comprehensive Maryland-focused directory submission checklist with 7 priority tiers (Google/Bing/Apple maps, 100+ MD chambers/tourism/citation/niche wedding/corporate/social directories) and link-earning tactics (guest posts, sponsorships, HARO, venue partnerships).



**Website Structure & Pages:**
- HomePage.jsx - Hero, services overview, features, service areas, CTA
- ServicesPage.jsx - Detailed service offerings
- FleetPage.jsx - Vehicle fleet showcase (from 92limo.com)
- AboutPage.jsx - Company information
- ContactPage.jsx - Contact form and info
- BlogPage.jsx - Blog listing
- BlogPostPage.jsx - Individual blog posts
- BookingPage.jsx - Booking widget integration
- NotFoundPage.jsx - Custom 404 error page

**Components:**
- Header.jsx - Navigation, logo, contact info, mobile menu
- Footer.jsx - Site links, contact details, internal links

**Theme & Branding:**
- Golden/amber and black color scheme matching logo
- DCA Limo branding throughout
- Mobile-responsive design across all pages

**Service Locations (January 14, 2025):**
- Washington DC & Virginia areas
- Maryland - BWI Area
- Anne Arundel County full coverage (Annapolis, Arnold, Cape St Claire, etc.)

**Fleet (from 92limo.com):**
- Economy Class
- Business Class (Mercedes E-Class)
- First Class (Mercedes S-Class)
- Premium SUV (Cadillac Escalade)
- Sprinter Van (Mercedes Sprinter)

**SEO Optimizations (January 15, 2025):**
- ✅ H1 headings on all pages with keywords
- ✅ Meta descriptions with trending keywords
- ✅ Page titles optimized for each page
- ✅ Sitemap.xml created
- ✅ Robots.txt created
- ✅ Custom 404 error page
- ✅ Favicon markup (multiple sizes)
- ✅ Open Graph and Twitter Card meta tags
- ✅ Structured Data (JSON-LD) for LocalBusiness
- ✅ Geo tags for local SEO
- ✅ Internal links improved in footer
- ✅ Preconnect/dns-prefetch for performance
- ✅ Google Analytics placeholder added
- ✅ Canonical URLs set

**Booking Widget Fix (January 15, 2025):**
- ✅ MyLimoBiz widget integrated and working
- Widget loads booking form with location, date/time, vehicle selection

---

## SEO Keywords Targeted
- DCA airport limo
- Washington DC limo service
- Airport transportation DC
- Luxury car service Maryland
- Executive transportation Virginia
- BWI airport shuttle
- Reagan National Airport limo
- Dulles airport transfer
- Corporate car service DC
- Wedding limo DC
- Prom limo Maryland
- Black car service Washington
- Chauffeur service DMV

---

## Server-Side Configurations Needed (For VPS Deployment)

The following require server-level configuration on IONOS VPS:

1. **URL Canonicalization/301 Redirects:**
   - Configure Nginx to redirect www to non-www (or vice versa)
   - Redirect HTTP to HTTPS
   ```nginx
   server {
       listen 80;
       server_name www.dclimos.com dclimos.com;
       return 301 https://dclimos.com$request_uri;
   }
   ```

2. **Cache Headers for Static Assets:**
   ```nginx
   location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
       expires 1y;
       add_header Cache-Control "public, immutable";
   }
   ```

3. **Strict-Transport-Security Header:**
   ```nginx
   add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
   ```

4. **SPF Record (DNS Level):**
   - Add TXT record to domain DNS:
   - `v=spf1 include:_spf.google.com ~all`

5. **Google Analytics:**
   - Replace `G-XXXXXXXXXX` in index.html with actual GA4 tracking ID

---

## Prioritized Backlog

### P0 - Critical (Completed)
- ✅ All P0 items completed

### P1 - High Priority
- [ ] Add customer testimonials/reviews section
- [ ] Implement contact form backend functionality
- [ ] Convert images to WebP format for better performance
- [ ] Optimize image sizes

### P2 - Medium Priority
- [ ] Theme abstraction to tailwind.config.js
- [ ] Add Google Maps integration for service area visualization
- [ ] Implement blog CMS or admin panel
- [ ] Add FAQ section

### P3 - Low Priority / Future
- [ ] Add live chat support
- [ ] Implement multi-language support
- [ ] Social media integration

---

## File Structure
```
/app/frontend/
├── public/
│   ├── index.html (SEO optimized)
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── FleetPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── BlogPostPage.jsx
│   │   ├── BookingPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── App.js
│   ├── App.css
│   └── index.js
```

## Third-Party Integrations
- **MyLimoBiz:** Booking widget (https://book.mylimobiz.com/v4/92transp)
- **Google Analytics:** Placeholder added (needs real tracking ID)

## Key URLs
- Production: https://dclimos.com (to be configured)
- Booking External: https://book.mylimobiz.com/v4/92transp
