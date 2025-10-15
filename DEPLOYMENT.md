# Production Deployment Guide

## 🚀 Pre-Deployment Checklist

### Environment Variables
- [ ] Copy `.env.example` to `.env.local` for development
- [ ] Set production environment variables in your hosting platform
- [ ] Update `NEXT_PUBLIC_SITE_URL` to your production domain
- [ ] Configure SMTP settings for contact form functionality

### Domain Configuration
- [ ] Update `sitemap.xml` with your production domain
- [ ] Update `robots.txt` sitemap URL
- [ ] Update Open Graph URLs in `layout.tsx`
- [ ] Verify Google verification code in metadata

### Performance Optimization
- [ ] Run `npm run build` to ensure clean production build
- [ ] Test all pages for functionality
- [ ] Verify responsive design on all devices
- [ ] Check Core Web Vitals scores

## 🌐 Deployment Platforms

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically with each push to main branch

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Set environment variables in Netlify dashboard

### AWS Amplify
1. Connect repository and configure build settings
2. Set environment variables in Amplify console
3. Configure custom domain if needed

## 🔧 Production Optimizations Already Implemented

### Performance
- ✅ Image optimization with WebP/AVIF formats
- ✅ Font optimization with `next/font`
- ✅ CSS optimization enabled
- ✅ Package imports optimization
- ✅ Compression enabled
- ✅ Proper caching headers

### Security
- ✅ Security headers configured
- ✅ X-Frame-Options: DENY
- ✅ X-Content-Type-Options: nosniff
- ✅ Referrer-Policy configured
- ✅ Powered-by header removed

### SEO
- ✅ Comprehensive metadata
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Robots.txt configured
- ✅ Sitemap.xml included
- ✅ Structured data ready

## 📊 Monitoring & Analytics

### Recommended Tools
- Google Analytics 4
- Google Search Console
- Vercel Analytics (if using Vercel)
- Core Web Vitals monitoring

### Performance Monitoring
- Monitor Core Web Vitals
- Track page load times
- Monitor error rates
- Check mobile performance

## 🔄 Post-Deployment

### Testing
- [ ] Test all forms and functionality
- [ ] Verify email delivery
- [ ] Check all internal links
- [ ] Test on multiple devices and browsers
- [ ] Verify SSL certificate

### SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Verify domain ownership
- [ ] Set up Google Analytics
- [ ] Monitor search performance

## 🚨 Troubleshooting

### Common Issues
1. **Email not working**: Check SMTP credentials and app password
2. **Images not loading**: Verify image paths and optimization settings
3. **Build failures**: Check for TypeScript errors and dependencies
4. **Performance issues**: Review bundle size and optimize imports

### Support
- Check deployment logs for errors
- Verify environment variables are set correctly
- Test locally with production build: `npm run build && npm start`