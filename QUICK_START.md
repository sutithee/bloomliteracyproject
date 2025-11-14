# 🚀 Quick Start Guide - Bloom Literacy Project Website

## Opening Your Website

### Method 1: Double-Click (Simplest)
1. Navigate to the `website` folder
2. Double-click `index.html`
3. Your website will open in your default browser

### Method 2: Local Server (Recommended for Development)
```bash
# Navigate to the website folder
cd path/to/bloomliteracyproject

# Start a local server (choose one):

# Python 3
python3 -m http.server 8000

# OR Python 2
python -m SimpleHTTPServer 8000

# OR Node.js
npx http-server -p 8000

# Then open: http://localhost:8000
```

## 📋 Quick Customization Checklist

### 1. Update Contact Email (Already Done! ✅)
- Current email: `info@bloomliteracyproject.org`
- If you need to change it to a different email:
  - Open each `.html` file
  - Find: `info@bloomliteracyproject.org`
  - Replace with: Your actual email
  - Files to update: All 7 HTML files

### 2. Add Social Media Links (5 minutes)
- Find: `<a href="#" class="social-btn">`
- Replace `#` with:
  - Facebook: `https://facebook.com/yourpage`
  - Instagram: `https://instagram.com/yourhandle`
  - Twitter: `https://twitter.com/yourhandle`

### 3. Update Donation Progress (2 minutes)
When donations come in:
- Open `donate.html`
- Find line 294: `const CURRENT_AMOUNT_RAISED = 0;`
- Change `0` to your current amount (e.g., `150`, `2500`)
- Save and refresh - progress bar updates automatically!
- **See detailed instructions in:** `HOW_TO_UPDATE_DONATIONS.md`

### 4. Add Real Photos (10 minutes)
- Create folder: `website/images/`
- Add your photos
- Replace Unsplash URLs:
  ```html
  From: <img src="https://images.unsplash.com/..." alt="...">
  To: <img src="images/your-photo.jpg" alt="...">
  ```

## 🎨 Current Website Structure

```
Pages:
✅ Homepage              (index.html)
✅ About Us              (about.html)
✅ Our Campaign          (campaign.html)
✅ Our Cause             (cause.html)
✅ Events & Calendar     (events.html)
✅ Donate                (donate.html)
✅ Contact Us            (contact.html)

Features:
✅ Mobile responsive
✅ Light pink & green theme
✅ Interactive navigation
✅ Animated elements
✅ Form validation
✅ Progress tracking
✅ Event calendar
```

## 🔧 Next Steps to Make It Live

### Immediate (Before Launch)
1. ✏️ Update email addresses
2. 📸 Replace placeholder images
3. 🔗 Add social media links
4. 💳 Integrate payment for donations
5. 📧 Set up contact form backend

### Donation System (Already Set Up!)
✅ **All donations go through Room to Read**
- Donate page: https://fundraise.roomtoread.org/fundraiseusd/bloom-literacy-project
- Update progress easily in `donate.html` (see `HOW_TO_UPDATE_DONATIONS.md`)
- Secure, tax-deductible, professional

### Contact Form Options
- **FormSubmit.co** (free, no backend needed)
- **Formspree** (free tier available)
- **EmailJS** (send directly from JavaScript)

### Hosting Options (Free)
1. **GitHub Pages** - `yourusername.github.io`
2. **Netlify** - Drag & drop deployment
3. **Vercel** - Instant deployment
4. **Firebase** - Google's platform

## 📱 Test Your Website

### Desktop Testing
✅ Chrome
✅ Firefox
✅ Safari
✅ Edge

### Mobile Testing
✅ iPhone/iPad (Safari)
✅ Android (Chrome)

### Test These Features
- [ ] Navigation menu (desktop & mobile)
- [ ] All links work
- [ ] Forms show validation messages
- [ ] Donation amount selector
- [ ] Smooth scrolling
- [ ] Back-to-top button appears when scrolling
- [ ] Images load correctly
- [ ] Mobile menu toggle
- [ ] Responsive layout on small screens

## 💡 Tips

### Color Changes
Edit `css/style.css` at line 8-15 (CSS variables)

### Font Changes
Change Google Fonts link in each HTML file `<head>` section

### Adding Pages
1. Copy any existing `.html` file
2. Update content
3. Add link to navigation in all pages

### Updating Events
Edit `events.html` - organized by month

## 📞 Need Help?

1. Check `README.md` for detailed documentation
2. Look at code comments in files
3. Check browser console (F12) for JavaScript errors
4. Validate HTML: https://validator.w3.org
5. Test mobile: https://search.google.com/test/mobile-friendly

## 🎯 Your Campaign Goals

Remember to update when reached:
- 💰 $5,000 fundraising goal
- 📚 200+ books collected
- 👥 500+ participants engaged

---

**Website Created:** November 2025  
**For:** Bloom Literacy Project  
**Campaign:** An Iris for Education  
**Mission:** Empowering girls through education in Nepal 🌸

