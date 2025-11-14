# 🚀 Deployment Guide - bloomliteracyproject.org

## Quick Overview
Your website will be hosted on **GitHub Pages** with your custom domain **bloomliteracyproject.org**

**Timeline:**
- GitHub setup: 10 minutes
- DNS propagation: 1-4 hours (max 48 hours)
- SSL certificate: Automatic after DNS propagates

---

## 📋 Step-by-Step Deployment

### Step 1: Create GitHub Repository (5 minutes)

1. Go to https://github.com
2. Sign in (or create a free account)
3. Click **"+"** → **"New repository"**
4. Repository name: `bloomliteracyproject.org` (or any name)
5. Description: "Official website for Bloom Literacy Project"
6. Choose: **Public**
7. Click: **"Create repository"**

### Step 2: Upload Your Files (5 minutes)

**Method 1: Drag & Drop (Easiest)**
1. In your new repository, click "uploading an existing file"
2. Drag ALL these files/folders:
   ```
   ✅ index.html
   ✅ about.html
   ✅ campaign.html
   ✅ cause.html
   ✅ contact.html
   ✅ donate.html
   ✅ events.html
   ✅ CNAME (important!)
   ✅ css/ folder
   ✅ js/ folder
   ✅ icons/ folder
   ✅ README.md
   ✅ All other files
   ```
3. Commit changes

**Method 2: Git Command Line**
```bash
# Navigate to your project folder
cd path/to/bloomliteracyproject

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/bloomliteracyproject.org.git
git push -u origin main
```

### Step 3: Enable GitHub Pages (2 minutes)

1. Go to repository **Settings** → **Pages**
2. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
3. Click **Save**
4. Your site is now live at: `https://YOUR-USERNAME.github.io/bloomliteracyproject.org/`

### Step 4: Add Custom Domain (2 minutes)

1. Still in **Settings → Pages**
2. Under "Custom domain", enter: `bloomliteracyproject.org`
3. Click **Save**
4. GitHub will create a CNAME file (or use the one we provided)
5. ✅ Check "Enforce HTTPS" (after DNS propagates)

---

## 🌐 DNS Configuration

### Where You Bought Your Domain

Log into your domain registrar (GoDaddy, Namecheap, Google Domains, etc.)

### DNS Records to Add

#### A Records (for apex domain)
Add **FOUR** A records:

| Type | Name/Host | Value/Points to    | TTL  |
|------|-----------|-------------------|------|
| A    | @         | 185.199.108.153   | 3600 |
| A    | @         | 185.199.109.153   | 3600 |
| A    | @         | 185.199.110.153   | 3600 |
| A    | @         | 185.199.111.153   | 3600 |

#### CNAME Record (for www subdomain)

| Type  | Name/Host | Value/Points to              | TTL  |
|-------|-----------|------------------------------|------|
| CNAME | www       | YOUR-USERNAME.github.io.     | 3600 |

**⚠️ Replace `YOUR-USERNAME` with your actual GitHub username!**

### Registrar-Specific Instructions

<details>
<summary><b>GoDaddy</b></summary>

1. My Products → Domains → DNS
2. Click "Add" to create new records
3. For A records:
   - Type: A
   - Name: @
   - Value: [IP address]
   - TTL: 1 Hour
4. For CNAME:
   - Type: CNAME
   - Name: www
   - Value: your-username.github.io
   - TTL: 1 Hour
5. Save all
</details>

<details>
<summary><b>Namecheap</b></summary>

1. Domain List → Manage → Advanced DNS
2. Click "Add New Record"
3. For A records:
   - Type: A Record
   - Host: @
   - Value: [IP address]
   - TTL: Automatic
4. For CNAME:
   - Type: CNAME Record
   - Host: www
   - Value: your-username.github.io
   - TTL: Automatic
5. Save all
</details>

<details>
<summary><b>Google Domains</b></summary>

1. Select domain → DNS
2. Manage custom records
3. Create new record:
   - For A records: Name=@, Type=A, Data=[IP]
   - For CNAME: Name=www, Type=CNAME, Data=your-username.github.io
4. Save
</details>

<details>
<summary><b>Cloudflare</b></summary>

1. Select domain → DNS
2. Add record
3. For A records:
   - Type: A
   - Name: @
   - IPv4 address: [IP]
   - Proxy status: DNS only (grey cloud)
4. For CNAME:
   - Type: CNAME
   - Name: www
   - Target: your-username.github.io
   - Proxy status: DNS only initially
5. Save
</details>

---

## ⏱️ Waiting Period

### DNS Propagation
- **Minimum:** 5-30 minutes
- **Typical:** 1-4 hours
- **Maximum:** 48 hours

### Check DNS Status
Visit: https://www.whatsmydns.net
- Enter: `bloomliteracyproject.org`
- Check if A records show GitHub's IPs worldwide

### Test Your Site
Try these URLs:
- http://bloomliteracyproject.org
- http://www.bloomliteracyproject.org
- https://bloomliteracyproject.org (after HTTPS is enabled)

---

## 🔒 Enable HTTPS (Automatic)

After DNS propagates:
1. Go to GitHub repository **Settings → Pages**
2. Check the box: **"Enforce HTTPS"**
   - If greyed out, wait a few more minutes
   - GitHub automatically provisions SSL certificate
3. Once enabled, your site will be accessible via `https://`

---

## ✅ Verification Checklist

- [ ] GitHub repository created
- [ ] All files uploaded to GitHub
- [ ] GitHub Pages enabled
- [ ] Custom domain added in GitHub settings
- [ ] DNS A records added (4 records)
- [ ] DNS CNAME record added (www)
- [ ] Waited for DNS propagation
- [ ] http://bloomliteracyproject.org loads
- [ ] http://www.bloomliteracyproject.org loads
- [ ] HTTPS enabled in GitHub settings
- [ ] https://bloomliteracyproject.org loads (with padlock)

---

## 🔄 Updating Your Website

After initial deployment, to make changes:

### Method 1: GitHub Website
1. Go to your repository
2. Click on the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes
5. Scroll down and click "Commit changes"
6. Changes appear live in 1-2 minutes

### Method 2: Git Command Line
```bash
# Make your changes to files
# Then:

git add .
git commit -m "Updated [description of changes]"
git push

# Changes appear live in 1-2 minutes
```

---

## 🆘 Troubleshooting

### Site Not Loading After 24 Hours
1. Check DNS records are correct
2. Use https://www.whatsmydns.net to verify propagation
3. Clear your browser cache (Ctrl+Shift+Delete)
4. Try different browser/device
5. Check GitHub Pages is still enabled

### HTTPS Not Working
1. Make sure DNS has fully propagated (check whatsmydns.net)
2. Wait 24 hours after DNS propagation
3. Try unchecking and re-checking "Enforce HTTPS"
4. Contact GitHub Support if still not working

### 404 Error
1. Make sure `index.html` is in the root of your repository
2. Check file names are exactly correct (case-sensitive)
3. Verify GitHub Pages source is set to `main` branch, `/ (root)`

### Custom Domain Not Working
1. Verify CNAME file exists in repository root
2. Content should be exactly: `bloomliteracyproject.org`
3. No http://, no www., no trailing slash
4. Re-add custom domain in GitHub settings if needed

### CSS/JS Not Loading
1. Check folder names: `css` and `js` (lowercase)
2. Verify files are in correct folders
3. Check HTML file paths are correct
4. Clear browser cache

---

## 📞 Support Resources

- **GitHub Pages Documentation:** https://docs.github.com/en/pages
- **GitHub Support:** https://support.github.com
- **DNS Checker:** https://www.whatsmydns.net
- **SSL Checker:** https://www.ssllabs.com/ssltest/

---

## 🎉 Next Steps After Deployment

1. **Test Everything:**
   - All navigation links
   - Donation links
   - Contact form
   - Mobile responsiveness

2. **SEO Setup:**
   - Submit sitemap to Google Search Console
   - Add Google Analytics
   - Add meta descriptions

3. **Monitor:**
   - Check donation progress regularly
   - Update events calendar monthly
   - Respond to contact form submissions

4. **Promote:**
   - Share on social media
   - Add to email signatures
   - Include in marketing materials

---

## 📊 Quick Reference

**Your URLs:**
- Primary: https://bloomliteracyproject.org
- Alternate: https://www.bloomliteracyproject.org
- GitHub: https://YOUR-USERNAME.github.io/bloomliteracyproject.org/

**GitHub Pages IPs:**
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**CNAME Target:**
- YOUR-USERNAME.github.io

**Contact:**
- Email: info@bloomliteracyproject.org
- Repository: https://github.com/YOUR-USERNAME/bloomliteracyproject.org

---

**🌸 Good luck with your deployment!**

*Remember: DNS changes can take time. Be patient and check back in a few hours.*

