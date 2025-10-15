# AL HADI EXPORTS - Premium Garments Export Website

A modern, responsive website for AL HADI EXPORTS, a leading manufacturer and exporter of premium quality garments based in Karachi, Pakistan.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Fast Performance**: Built with Next.js 15 with Turbopack for optimal performance and SEO
- **Interactive Components**: Engaging UI components with hover effects and animations
- **Contact Form**: Functional contact form with email integration
- **Product Showcase**: Comprehensive product catalog with detailed information
- **Company Information**: About page with company history, mission, and values
- **Dark Mode**: Theme switching capability
- **PDF Generation**: Downloadable product catalogs
- **Security**: SEDEX, BSCI, HIGG, and Accord Pakistan certified

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router and Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Email**: Nodemailer for contact form
- **PDF**: jsPDF for catalog generation
- **Utilities**: clsx, tailwind-merge
- **Font**: Inter (Google Fonts)

## 📱 Pages

1. **Home** (`/`) - Hero section, company overview, product showcase, statistics
2. **About** (`/about`) - Company history, mission, vision, values, certifications
3. **Products** (`/products`) - Product catalog with filtering and search
4. **Contact** (`/contact`) - Contact form, business information, location details
5. **Manufacturing** (`/manufacturing`) - Manufacturing capabilities and processes
6. **Customers** (`/customers`) - Client testimonials and success stories

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

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your configuration:
```env
# Email Configuration (Required for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Development Scripts

```bash
# Development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check

# Optimize images (if needed)
node optimize-images.mjs
```

## 🌍 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Required for contact form functionality
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Site configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Email Setup Instructions

1. **Gmail Setup**:
   - Enable 2-factor authentication
   - Generate an App Password
   - Use the App Password as `SMTP_PASS`

2. **Other Email Providers**:
   - Update `SMTP_HOST` and `SMTP_PORT` accordingly
   - Ensure SMTP authentication is enabled

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
# Build the application
npm run build

# Test the production build locally
npm start
```

### Deploy to Vercel (Recommended)

1. **Automatic Deployment**:
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

2. **GitHub Integration**:
   - Push your code to GitHub
   - Connect repository to Vercel
   - Automatic deployments on every push

3. **Environment Variables**:
   - Add environment variables in Vercel dashboard
   - Set `NEXT_PUBLIC_SITE_URL` to your domain

### Deploy to Other Platforms

#### Netlify
```bash
# Build command
npm run build

# Publish directory
out
```

#### AWS Amplify
- Connect GitHub repository
- Build settings: `npm run build`
- Output directory: `.next`

#### Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Deploy
railway login
railway init
railway up
```

#### DigitalOcean App Platform
- Connect GitHub repository
- Build command: `npm run build`
- Run command: `npm start`

### Production Checklist

- [ ] Environment variables configured
- [ ] Email SMTP settings tested
- [ ] SSL certificate enabled
- [ ] Domain configured
- [ ] Analytics tracking setup
- [ ] Error monitoring enabled
- [ ] Performance monitoring setup

## 📊 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: Built-in Google Fonts optimization
- **Code Splitting**: Automatic code splitting for faster loading
- **SEO Optimized**: Proper meta tags and structured data
- **Responsive Images**: Optimized for all screen sizes

## 🔧 Customization

### Adding New Products

Edit `src/data/content.ts` to add new products:

```typescript
export const products = [
  {
    id: 'new-product',
    name: 'New Product Name',
    description: 'Product description',
    image: '/images/products/new-product.jpg',
    category: 'Category Name',
    minOrder: '1500 pieces per color',
    features: ['Feature 1', 'Feature 2'],
    materials: ['Material 1', 'Material 2']
  }
];
```

### Customizing Colors

Update the color scheme in `src/app/globals.css`:

```css
:root {
  --primary: #1e3a8a;
  --primary-dark: #1e40af;
  --accent: #14b8a6;
  --accent-warm: #f59e0b;
}
```

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add `page.tsx` and `layout.tsx` (optional)
3. Update navigation in `src/components/Header.tsx`

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**:
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

2. **Email Not Working**:
   - Check SMTP credentials in `.env.local`
   - Verify Gmail App Password setup
   - Check firewall/network restrictions

3. **Images Not Loading**:
   - Ensure images are in `public/images/` directory
   - Check file paths and extensions
   - Verify image optimization settings

4. **TypeScript Errors**:
   ```bash
   # Run type checking
   npm run type-check
   
   # Fix common issues
   npm run lint:fix
   ```

### Performance Issues

- Enable image optimization
- Use Next.js Image component
- Implement lazy loading
- Minimize bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Test changes thoroughly
- Update documentation as needed

## 📄 License

This project is proprietary software owned by AL HADI EXPORTS. All rights reserved.

## 📞 Support

For technical support or questions:

- **Email**: info@alhadiexports.com
- **Phone**: +92-21-32726708
- **Address**: Karachi, Pakistan

---

**AL HADI EXPORTS** - Premium Quality Garments Since 1995
