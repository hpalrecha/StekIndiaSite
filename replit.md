# STEK India Website

## Overview
A modern, responsive company website for STEK India replicating the design and structure of STEK Automotive (stekautomotive.com) with customized content for the Indian market.

## Key Features
- **Homepage**: Hero banner, product grid, solutions overview, stats, CTA sections
- **Products**: Paint Protection Film (with subcategories), Window Film, Windshield Film, Car Care
- **Solutions**: Installers, Dealerships, Architectural (no Marine/DIY per requirements)
- **Installer Locator**: Searchable list of certified Indian installers
- **Contact Form**: Full contact form with validation
- **Resources**: External links to STEK Automotive global site (opens in new tabs)

## Technical Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod validation
- **State Management**: TanStack Query
- **Backend**: Express.js
- **Database**: PostgreSQL with Drizzle ORM (persistent storage)
- **DB Driver**: @neondatabase/serverless

## Project Structure
```
client/src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation with dropdown menus
│   │   ├── Footer.tsx      # Site footer
│   │   └── Layout.tsx      # Main layout wrapper
│   └── ui/                 # shadcn/ui components
├── pages/
│   ├── Home.tsx            # Homepage
│   ├── Products.tsx        # Product categories & detail pages
│   ├── Solutions.tsx       # Solutions for Installers/Dealerships/Architectural
│   ├── About.tsx           # About STEK India
│   ├── Brands.tsx          # Brand overview
│   ├── InstallerLocator.tsx # Find certified installers
│   ├── Contact.tsx         # Contact form
│   └── not-found.tsx       # 404 page
├── lib/
│   ├── constants.ts        # Navigation, products, solutions data
│   └── queryClient.ts      # API client setup
└── App.tsx                 # Main app with routing

server/
├── routes.ts               # API endpoints
├── db.ts                   # Database connection (PostgreSQL via Drizzle)
├── storage.ts              # Database-backed storage (DatabaseStorage)
└── index.ts                # Server entry

shared/
└── schema.ts               # Data models and Zod schemas
```

## Design System
- **Colors**: Dark header (zinc-900), white content background, deep red/maroon primary (#c41e3a)
- **Typography**: Poppins font family
- **Components**: Cards with hover effects, consistent spacing, responsive grids

## API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/installers` - List all installers
- `GET /api/installers?state=<state>` - Filter installers by state

## External Resources (Redirect to STEK Global)
- Become an Installer
- Training Program
- Find a Partner
- Blog

## Running the Project
The application runs on port 5000 with `npm run dev`.

## Admin Portal
Access the admin portal at `/admin` to manage:
- **Dashboard**: Overview of contact enquiries and blog post stats
- **Enquiries**: View all contact form submissions with details
- **Blog**: Create, edit, publish/unpublish, and delete blog posts with image upload

### Admin Login Credentials
- **Username**: admin
- **Password**: stek2024

Admin credentials are stored in the PostgreSQL database with bcrypt-hashed passwords.

## Recent Changes
- Migrated from in-memory storage to PostgreSQL database for persistent data storage
- All data (contact enquiries, blog posts, products, installers) now persists across server restarts
- Added unified Admin Portal (/admin) with dashboard, enquiries, products, and blog management
- Created Blog system with CMS capabilities
- Updated navigation Resources menu with correct external/internal links
- Initial site build with all pages and components
- Implemented responsive navigation with dropdown menus
- Added product categories with subcategories
- Created installer locator with search/filter
- Built contact form with validation
