# AL HADI EXPORTS - Premium Garments Export Website

A modern, responsive website for AL HADI EXPORTS, a leading manufacturer and exporter of premium quality garments based in Sialkot, Pakistan.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Fast Performance**: Built with Next.js 14 for optimal performance and SEO
- **Interactive Components**: Engaging UI components with hover effects and animations
- **Contact Form**: Functional contact form for customer inquiries
- **Product Showcase**: Comprehensive product catalog with detailed information
- **Company Information**: About page with company history, mission, and values

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Utilities**: clsx for conditional class names
- **Font**: Inter (Google Fonts)

## 📱 Pages

1. **Home** (`/`) - Hero section, company overview, product showcase, statistics
2. **About** (`/about`) - Company history, mission, vision, values, certifications
3. **Products** (`/products`) - Product catalog with filtering and search
4. **Contact** (`/contact`) - Contact form, business information, location details

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd al_hadi_app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
al_hadi_app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── products/          # Products page
│   │   ├── globals.css        # Global styles and animations
│   │   ├── layout.tsx         # Root layout component
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable components
│   │   ├── ui/               # UI components (Button, Card)
│   │   ├── Footer.tsx        # Footer component
│   │   └── Header.tsx        # Header component
│   ├── data/                 # Static data
│   │   └── content.ts        # Company and product data
│   └── lib/                  # Utility functions
│       └── utils.ts          # Helper functions
├── public/                   # Static assets
└── package.json             # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Primary**: Deep navy blue (#1e3a8a)
- **Primary Dark**: Darker navy (#1e40af)
- **Accent**: Teal (#14b8a6)
- **Accent Warm**: Gold (#f59e0b)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights with proper hierarchy
- **Body Text**: Regular weight with good readability

### Components
- **Button**: Multiple variants (primary, secondary, accent, outline, ghost)
- **Card**: Flexible card component with hover effects
- **Animations**: Smooth fade-in, slide-up, and scale animations

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: Built-in Google Fonts optimization
- **Code Splitting**: Automatic code splitting for faster loading
- **SEO Optimized**: Proper meta tags and structured data
- **Responsive Images**: Optimized for all screen sizes

## 🔧 Customization

### Adding New Products

Edit `src/data/content.ts` to add new products to the catalog.

### Modifying Colors

Update the color variables in `src/app/globals.css` to change the theme.

### Adding New Pages

Create new folders in `src/app/` following Next.js App Router conventions.

## 📞 Contact Information

**AL HADI EXPORTS**
- Address: Industrial Area, Sialkot, Punjab, Pakistan
- Phone: +92 52 123 4567
- Email: info@alhadiexports.com
- Website: www.alhadiexports.com

## 📄 License

This project is proprietary and confidential. All rights reserved by AL HADI EXPORTS.

---

Built with ❤️ using Next.js 14 and Tailwind CSS
