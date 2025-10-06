# 📧 Email Setup Guide for AL HADI EXPORTS Contact Form

## 🚀 Quick Setup (5 minutes)

Your contact form is **ready to send emails** once you configure your Gmail App Password. Follow these steps:

### Step 1: Enable 2-Step Verification on Gmail

1. Go to [Google Account Settings](https://myaccount.google.com)
2. Click **"Security"** in the left sidebar
3. Under **"How you sign in to Google"**, click **"2-Step Verification"**
4. Follow the setup process if not already enabled

### Step 2: Generate Gmail App Password

1. In the same Security section, scroll down to **"App passwords"**
2. Click **"App passwords"** (you may need to sign in again)
3. Select **"Mail"** as the app
4. Select **"Other (custom name)"** as the device
5. Enter **"AL HADI Website"** as the device name
6. Click **"Generate"**
7. **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)

### Step 3: Update Environment Variables

1. Open `.env.local` file in your project root
2. Replace `your-gmail-app-password-here` with the 16-character password from Step 2
3. Save the file

```env
SMTP_PASS=abcd efgh ijkl mnop
```

### Step 4: Test the Setup

1. Restart your development server: `npm run dev`
2. Go to your contact page: `http://localhost:3001/contact`
3. Fill out and submit the form
4. Check your Gmail inbox for the email

---

## 🔧 Technical Details

### Current Configuration

- **SMTP Server**: Gmail (smtp.gmail.com)
- **Port**: 587 (STARTTLS encryption)
- **Authentication**: App Password (secure)
- **From Email**: smshan425@gmail.com
- **To Email**: smshan425@gmail.com

### Email Features

✅ **Professional HTML Email Template**
- Company branding with gradient header
- Structured contact information display
- Detailed project requirements section
- Mobile-responsive design

✅ **Comprehensive Error Handling**
- SMTP connection verification
- Graceful fallback for email failures
- Detailed logging for debugging
- User-friendly error messages

✅ **Security Best Practices**
- App Password authentication (not regular password)
- TLS encryption for email transmission
- Environment variable protection
- No sensitive data in code

### API Response Format

**Successful Email Delivery:**
```json
{
  "message": "Quote request submitted successfully! We will contact you within 24 hours.",
  "emailSent": true,
  "messageId": "email-message-id"
}
```

**Email Delivery Failed (but form submitted):**
```json
{
  "message": "Quote request received! We will contact you soon.",
  "emailSent": false,
  "error": "Email delivery may be delayed"
}
```

---

## 🛠️ Troubleshooting

### Common Issues

**❌ "Username and Password not accepted"**
- Ensure 2-Step Verification is enabled
- Use App Password, not regular Gmail password
- Copy the 16-character password exactly (with spaces)

**❌ "Email service not configured"**
- Check that `SMTP_PASS` is set in `.env.local`
- Restart the development server after changes

**❌ "Email service connection failed"**
- Verify your internet connection
- Check Gmail account status
- Ensure the App Password is still valid

### Testing Checklist

- [ ] 2-Step Verification enabled on Gmail
- [ ] App Password generated and copied
- [ ] `.env.local` updated with correct password
- [ ] Development server restarted
- [ ] Form submission successful
- [ ] Email received in Gmail inbox

---

## 🌐 Production Deployment

### Environment Variables for Production

Set these environment variables in your production hosting platform:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=smshan425@gmail.com
SMTP_PASS=your-16-character-app-password
SMTP_FROM=smshan425@gmail.com
SMTP_TO=smshan425@gmail.com
```

### Security Considerations

- **Never commit** real passwords to version control
- Use **different App Passwords** for different environments
- **Rotate App Passwords** periodically
- **Monitor email logs** for suspicious activity

---

## 📱 Mobile & Cross-Browser Compatibility

The email functionality is fully responsive and works across:

✅ **Desktop Browsers**: Chrome, Firefox, Safari, Edge
✅ **Mobile Browsers**: iOS Safari, Android Chrome
✅ **Email Clients**: Gmail, Outlook, Apple Mail, Thunderbird
✅ **Devices**: Smartphones, tablets, desktops

---

## 📞 Support

If you encounter any issues:

1. Check the browser console for JavaScript errors
2. Check the terminal logs for server errors
3. Verify your Gmail App Password is correct
4. Test with a simple form submission

**Email Template Preview**: The emails include professional formatting with your company branding, contact details, and project requirements in an easy-to-read format.

---

*Last Updated: December 2024*
*Status: Production Ready ✅*