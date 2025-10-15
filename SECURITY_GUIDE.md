# Security Guide - AL HADI EXPORTS

## Environment Variables & Secrets Management

### 1. Environment File Setup

Create a `.env.local` file in the project root directory with the following variables:

```bash
# Email Configuration (Required for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code

# Optional: Custom SMTP settings
# SMTP_HOST=smtp.your-provider.com
# SMTP_PORT=465
```

### 2. Security Best Practices

#### ✅ Current Security Status
- `.env*` files are properly excluded in `.gitignore`
- No hardcoded secrets found in codebase
- Environment variables are properly validated in API routes
- Google Maps uses public embed URLs (no API key required)

#### 🔒 Email Security
The contact form uses SMTP authentication with the following security measures:
- Environment variables for credentials
- SMTP connection verification
- Secure TLS configuration
- Error handling without exposing credentials

### 3. API Key Domain Restrictions

Although this application currently uses Google Maps embed (which doesn't require API keys), here are the steps for securing API keys when needed:

#### Google Maps JavaScript API (if upgrading from embed)

1. **Access Google Cloud Console**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Select your project or create a new one

2. **Enable APIs**
   - Navigate to "APIs & Services" > "Library"
   - Enable "Maps JavaScript API"
   - Enable "Places API" (if using places features)

3. **Create API Key**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the generated API key

4. **Restrict API Key by Domain**
   ```
   HTTP referrers (web sites):
   - https://your-domain.com/*
   - https://www.your-domain.com/*
   - http://localhost:3000/* (for development)
   ```

5. **Restrict API Key by API**
   - Select "Restrict key"
   - Choose "Maps JavaScript API"
   - Choose "Places API" (if needed)

6. **Environment Variable Setup**
   ```bash
   # Add to .env.local
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-restricted-api-key
   ```

#### Other API Services

For any future API integrations, follow these domain restriction patterns:

**Stripe (Payment Processing)**
```bash
# Restrict to your domain in Stripe Dashboard
# Add to .env.local (use test keys for development)
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

**SendGrid (Email Service)**
```bash
# Restrict sender authentication to your domain
SENDGRID_API_KEY=SG.xxx
SENDGRID_FROM_EMAIL=noreply@your-domain.com
```

### 4. Production Deployment Security

#### Environment Variables Checklist
- [ ] `.env.local` exists with all required variables
- [ ] `.env.local` is not committed to version control
- [ ] Production environment variables are set in hosting platform
- [ ] API keys are restricted by domain/IP
- [ ] SMTP credentials use app-specific passwords

#### Hosting Platform Setup

**Vercel**
```bash
# Set environment variables in Vercel dashboard
vercel env add SMTP_USER
vercel env add SMTP_PASS
vercel env add NEXT_PUBLIC_SITE_URL
```

**Netlify**
```bash
# Set in Netlify dashboard under Site Settings > Environment Variables
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 5. Gmail App Password Setup

For SMTP email functionality:

1. **Enable 2-Factor Authentication**
   - Go to Google Account settings
   - Enable 2-factor authentication

2. **Generate App Password**
   - Go to Google Account > Security
   - Select "App passwords"
   - Choose "Mail" and your device
   - Copy the 16-character password

3. **Use App Password**
   ```bash
   # Use the app password (not your regular Gmail password)
   SMTP_PASS=your-16-character-app-password
   ```

### 6. Security Monitoring

#### Regular Security Checks
- [ ] Review environment variables quarterly
- [ ] Rotate API keys annually
- [ ] Monitor for exposed secrets in commits
- [ ] Update dependencies regularly
- [ ] Review access logs for unusual activity

#### Tools for Secret Scanning
```bash
# Install git-secrets to prevent committing secrets
npm install -g git-secrets

# Scan for secrets in codebase
git secrets --scan
```

### 7. Emergency Response

If secrets are accidentally committed:

1. **Immediate Actions**
   - Rotate all exposed credentials immediately
   - Remove secrets from git history
   - Update environment variables

2. **Git History Cleanup**
   ```bash
   # Remove file from git history
   git filter-branch --force --index-filter \
   'git rm --cached --ignore-unmatch .env.local' \
   --prune-empty --tag-name-filter cat -- --all
   
   # Force push to remote
   git push origin --force --all
   ```

3. **Credential Rotation**
   - Generate new API keys
   - Update hosting platform environment variables
   - Test application functionality

## Contact

For security concerns or questions about this guide, please contact the development team.