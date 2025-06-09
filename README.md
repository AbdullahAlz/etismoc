# Ibtisite Website

A modern, responsive website for Ibtisite startup built with Next.js, featuring multilingual support and a clean, professional design.

## Features

- ✅ **Static Website**: Built with Next.js and configured for static export
- ✅ **Multilingual Support**: English and Arabic with proper RTL support
- ✅ **Responsive Design**: Works perfectly on desktop and mobile devices
- ✅ **Modern UI**: Clean, professional design with Tailwind CSS
- ✅ **SEO Optimized**: Proper meta tags and semantic HTML structure
- ✅ **Navigation Drawer**: Mobile-friendly navigation with smooth animations
- ✅ **Contact Form**: Functional contact form with validation
- ✅ **Company Pages**: Complete About Us and Contact Us pages
- ✅ **Footer Links**: Privacy Policy and Terms of Service pages
- ✅ **Favicon**: Custom company favicon

## Pages

1. **Home Page** (`/`) - Company introduction and features
2. **About Us** (`/about`) - Company story, mission, vision, and team
3. **Contact Us** (`/contact`) - Contact form and company information
4. **Privacy Policy** (`/privacy`) - Privacy policy page
5. **Terms of Service** (`/terms`) - Terms of service page

## Languages

- **English** (`/en`) - Left-to-right layout
- **Arabic** (`/ar`) - Right-to-left layout with proper Arabic typography

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Inter (English), Cairo (Arabic)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

Build the static website:

```bash
npm run build
```

The static files will be generated in the `dist` folder.

### Deployment

Since this is a static website, you can deploy it to any static hosting service:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Upload the `dist` folder contents
- **AWS S3**: Upload to an S3 bucket configured for static hosting

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx      # Main layout with header/footer
│   │   │   ├── page.tsx        # Home page
│   │   │   ├── about/
│   │   │   │   └── page.tsx    # About Us page
│   │   │   ├── contact/
│   │   │   │   └── page.tsx    # Contact page
│   │   │   ├── privacy/
│   │   │   │   └── page.tsx    # Privacy Policy
│   │   │   └── terms/
│   │   │       └── page.tsx    # Terms of Service
│   │   ├── globals.css         # Global styles
│   │   └── page.tsx            # Root redirect
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   └── Footer.tsx          # Site footer
│   ├── lib/
│   │   └── navigation.ts       # Internationalization config
│   ├── messages/
│   │   ├── en.json            # English translations
│   │   └── ar.json            # Arabic translations
│   └── i18n.ts                # i18n configuration
├── public/
│   └── favicon.svg            # Company favicon
├── middleware.ts              # Internationalization middleware
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── package.json              # Dependencies and scripts
```

## Customization

### Changing Company Information

1. **Company Name**: Update "LeComp" in translation files (`src/messages/en.json` and `src/messages/ar.json`)
2. **Colors**: Modify the color scheme in `tailwind.config.js`
3. **Content**: Edit the page components in `src/app/[locale]/*/page.tsx`
4. **Logo**: Replace the text logo in `src/components/Header.tsx` with an image
5. **Contact Info**: Update contact information in `src/app/[locale]/contact/page.tsx`

### Adding New Languages

1. Create a new translation file in `src/messages/` (e.g., `fr.json`)
2. Add the locale to `src/lib/navigation.ts`
3. Update the language selector in `src/components/Header.tsx`

### SEO Optimization

The website includes:
- Semantic HTML structure
- Proper heading hierarchy
- Meta descriptions and titles
- Open Graph tags
- Responsive images
- Fast loading times
- Mobile-friendly design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is private and proprietary to LeComp.
