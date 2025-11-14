# Bloom Literacy Project Website

A beautiful, responsive website for the Bloom Literacy Project - a 501(c)(3) nonprofit organization dedicated to improving literacy and educational opportunities for underprivileged girls aged 5-17 in Nepal.

## 🌸 Theme
- **Primary Color:** Light Pink (#FFE5EC)
- **Secondary Color:** Light Green (#D4F4DD)
- **Background:** White
- **Accent Colors:** Pink (#FF6B9D) and Green (#5DBE7A)

## 📁 Project Structure

```
website/
├── index.html          # Homepage
├── about.html          # About Us page
├── campaign.html       # An Iris for Education campaign details
├── cause.html          # Our Cause - educational inequality info
├── events.html         # Events & Calendar
├── donate.html         # Donation page (static, ready for integration)
├── contact.html        # Contact Us page
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── script.js      # Interactive features
└── README.md          # This file
```

## 🎯 Pages Overview

### 1. **Homepage (index.html)**
- Hero section with call-to-action buttons
- Mission statement
- Key statistics (49% literacy rate, $5,000 goal, 200+ books, 500+ participants)
- Campaign highlight
- Ways to help
- Partner organizations

### 2. **About Us (about.html)**
- Organization introduction
- Mission, Vision, and Values
- Our approach (4-step process)
- Why Nepal?
- Partner details (Room to Read, Pencils of Promise)

### 3. **Our Campaign (campaign.html)**
- An Iris for Education campaign overview
- Campaign objectives with progress bars
- Online and in-person activities
- Strategic partnerships
- Expected benefits
- Innovative approaches

### 4. **Our Cause (cause.html)**
- Problem statement with statistics
- Why it matters
- Root causes (6 key barriers)
- Our response
- Rationale
- Transformative power of education

### 5. **Events (events.html)**
- Complete calendar (November 2024 - January 2025)
- Event categories (online, in-person, fundraisers, book drives)
- Event details with dates and descriptions
- Ways to participate
- Newsletter signup options

### 6. **Donate (donate.html)**
- Impact message
- Donation amount options ($25, $50, $100, $250, $500, custom)
- One-time vs. monthly donations
- Donation form (static - ready for payment integration)
- What donations provide
- Other ways to give
- Campaign goals with progress tracking
- FAQ section

### 7. **Contact (contact.html)**
- Contact information
- Contact form (demonstration)
- Ways to get involved
- Partnership opportunities for schools/organizations
- FAQ section

## ✨ Features

### Responsive Design
- Mobile-friendly navigation with hamburger menu
- Adaptive layouts for tablets and mobile devices
- Touch-friendly buttons and interactive elements

### Interactive Elements
- Smooth scrolling navigation
- Mobile menu toggle
- Donation amount selector
- Form validation
- Progress bars with animations
- Scroll-triggered animations
- Back-to-top button
- Active navigation highlighting

### Visual Design
- Gradient backgrounds
- Box shadows for depth
- Rounded corners for modern look
- Hover effects on buttons and cards
- Animated progress bars
- Icon-enhanced content sections

### Accessibility
- Semantic HTML5
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast text
- Clear visual hierarchy

## 🚀 Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser to view the website locally.

### Option 2: Use a Local Server (Recommended)
For the best experience, use a local web server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npx http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open your browser to: `http://localhost:8000`

### Option 3: Use Live Server (VS Code)
If using Visual Studio Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🔧 Customization Guide

### Adding Your Contact Information
1. Open each HTML file
2. Find the footer section
3. Update the email address from `info@bloomliteracyproject.org` to your actual email
4. Add phone numbers, physical address, or social media links as needed

### Donation System (Already Integrated!)

✅ **All donations are handled through Room to Read's official platform**

Your donate page now links to:
**https://fundraise.roomtoread.org/fundraiseusd/bloom-literacy-project**

**To Update Donation Progress:**
1. Open `donate.html`
2. Find line 294: `const CURRENT_AMOUNT_RAISED = 0;`
3. Update with current amount from your Room to Read page
4. Save and refresh

**See detailed instructions:** `HOW_TO_UPDATE_DONATIONS.md`

**Benefits:**
- ✅ Secure payment processing through Room to Read
- ✅ Tax-deductible receipts automatically generated  
- ✅ Professional, trusted platform
- ✅ No payment integration setup needed
- ✅ Track progress on your website easily

### Adding Real Images
Currently using placeholder images from Unsplash. To add your own:

1. Create an `images/` folder in the website directory
2. Add your images (recommended formats: JPG, PNG, WebP)
3. Update image paths in HTML files:
   ```html
   <!-- Change from: -->
   <img src="https://images.unsplash.com/..." alt="Description">
   
   <!-- To: -->
   <img src="images/your-photo.jpg" alt="Description">
   ```

### Updating Social Media Links
1. Open each HTML file
2. Find elements with class `social-link` or `social-btn`
3. Replace `#` with your actual social media URLs:
   ```html
   <a href="https://facebook.com/yourpage" class="social-btn">Facebook</a>
   <a href="https://instagram.com/yourhandle" class="social-btn">Instagram</a>
   <a href="https://twitter.com/yourhandle" class="social-btn">Twitter</a>
   ```

### Updating Donation Progress
When donations come in, update `donate.html`:

1. Open `donate.html`
2. Find this section (around line 294):
```javascript
const CURRENT_AMOUNT_RAISED = 0;  // Change this number
const GOAL_AMOUNT = 5000;
```
3. Update the amount (e.g., change `0` to `150` if you've raised $150)
4. Save and refresh - the progress bar updates automatically!

**Detailed instructions:** See `HOW_TO_UPDATE_DONATIONS.md`

### Changing Colors
Edit `css/style.css` and modify CSS variables at the top:
```css
:root {
    --color-primary: #FFE5EC;        /* Your light pink */
    --color-secondary: #D4F4DD;      /* Your light green */
    --color-accent: #FF6B9D;         /* Your accent pink */
    --color-accent-green: #5DBE7A;   /* Your accent green */
}
```

## 📧 Setting Up Contact Form

The contact form is currently a demonstration. To make it functional:

**Option 1: FormSubmit (Free, No Backend Required)**
```html
<form action="https://formsubmit.co/your@email.com" method="POST">
```

**Option 2: Formspree (Free Tier Available)**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 3: Backend Integration**
- PHP: Use PHPMailer
- Node.js: Use Nodemailer
- Python: Use Flask-Mail

## 🌐 Deployment Options

### Free Hosting Options:
1. **GitHub Pages** (Recommended)
   - Create a GitHub repository
   - Push your website files
   - Enable GitHub Pages in repository settings
   - Access at: `https://yourusername.github.io/repository-name`

2. **Netlify**
   - Drag and drop your website folder
   - Get instant HTTPS
   - Free custom domain support

3. **Vercel**
   - Similar to Netlify
   - Optimized for modern web projects

4. **Firebase Hosting**
   - Google's hosting solution
   - Includes analytics

### Purchasing Your Domain (blueliteracy.com)
Once you purchase your domain:
1. Update all references in the code
2. Point your domain to your hosting provider
3. Set up SSL certificate (usually automatic with modern hosts)

## 📊 Analytics Integration

To track website visitors:

**Google Analytics:**
```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

## 🔍 SEO Optimization

Add to each page's `<head>` section:
```html
<meta name="description" content="Bloom Literacy Project - Empowering girls through education in Nepal">
<meta name="keywords" content="literacy, Nepal, education, girls education, nonprofit, 501c3">
<meta property="og:title" content="Bloom Literacy Project">
<meta property="og:description" content="Supporting literacy programs for underprivileged girls in Nepal">
<meta property="og:image" content="URL_TO_YOUR_IMAGE">
<meta property="og:url" content="https://blueliteracy.com">
<meta name="twitter:card" content="summary_large_image">
```

## 📱 Social Media Integration

Consider adding:
- Facebook Pixel for tracking
- Instagram feed widget
- Twitter timeline embed
- Social share buttons

## ✅ Before Going Live Checklist

- [x] ✅ Logo and favicon added
- [x] ✅ Social media links added (Instagram, LinkedIn)
- [x] ✅ Donation system integrated with Room to Read
- [x] ✅ Email addresses updated (info@bloomliteracyproject.org)
- [ ] Replace placeholder images with real photos from your events
- [ ] Set up contact form backend (FormSubmit or Formspree)
- [ ] Add Google Analytics
- [ ] Test donation progress updater
- [ ] Test on mobile devices (iPhone, Android)
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Check all links work
- [ ] Add SEO meta tags (descriptions, keywords)
- [ ] Set up SSL certificate when deployed
- [ ] Create and submit sitemap.xml
- [ ] Test page load speeds
- [ ] Ensure WCAG accessibility compliance

## 🎨 Design Credits

- Font: Poppins from Google Fonts
- Images: Unsplash (placeholder - replace with your own)
- Icons: Unicode Emojis (consider Font Awesome for more options)

## 📄 License

This website was created for Bloom Literacy Project, a 501(c)(3) nonprofit organization.

## 🆘 Support

For questions or issues:
- Email: info@bloomliteracyproject.org
- Review the code comments in HTML, CSS, and JS files
- Check browser console for JavaScript errors

## 🔄 Updates & Maintenance

Regular updates needed:
- Event calendar (monthly)
- Progress bars as goals are reached
- Blog/news section (consider adding in future)
- Success stories and impact reports

---

**Built with ❤️ for Bloom Literacy Project**

*Empowering girls through education in Nepal*

