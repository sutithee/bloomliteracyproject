# ⚡ Quick Deploy Checklist

## 1️⃣ GitHub (10 min)
```
✅ Create repository at github.com
✅ Upload ALL files (including CNAME)
✅ Settings → Pages → Enable
✅ Settings → Pages → Add domain: bloomliteracyproject.org
```

## 2️⃣ DNS Records (5 min)

**Add to your domain registrar:**

### A Records (add 4):
```
@ → 185.199.108.153
@ → 185.199.109.153
@ → 185.199.110.153
@ → 185.199.111.153
```

### CNAME Record (add 1):
```
www → YOUR-USERNAME.github.io
```

## 3️⃣ Wait & Test (1-4 hours)
```
✅ Check: whatsmydns.net
✅ Visit: http://bloomliteracyproject.org
✅ Visit: http://www.bloomliteracyproject.org
✅ Enable HTTPS in GitHub settings
```

## 🎯 That's it!

**Full guide:** See `DEPLOYMENT_GUIDE.md`

---

## 🆘 Common Issues

**Site not loading?**
- Wait longer (up to 48 hours)
- Check DNS at whatsmydns.net
- Verify all 4 A records added

**No HTTPS?**
- Wait 24 hours after DNS propagates
- Then enable in GitHub Settings → Pages

**404 Error?**
- Check index.html is in repository root
- Verify GitHub Pages is enabled

---

## 📞 Your Info

**Domain:** bloomliteracyproject.org  
**Email:** info@bloomliteracyproject.org  
**GitHub:** YOUR-USERNAME/bloomliteracyproject.org

**Replace YOUR-USERNAME with your actual GitHub username!**

