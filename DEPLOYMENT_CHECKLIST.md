# 🔥 BlazeMethod.ai Deployment Checklist

## ✅ Completed

- [x] Website deployed to Vercel: https://blazemethod.vercel.app
- [x] GitHub repos created and populated
- [x] John & Otto photo added
- [x] Book links and video credentials updated
- [x] Song remixed with "with love and fire"
- [x] Guide MCP server marked as "Coming Soon"
- [x] NPM package files created and committed
- [x] Email sent with full summary

## ⏳ Your Final Steps

### 1. Publish NPM Package (5 minutes)

**First: Enable 2FA on npm**
1. Go to https://www.npmjs.com/settings/YOUR_USERNAME/twofa
2. Enable 2FA with authenticator app (Google Authenticator, Authy, etc.)
3. Save recovery codes

**Then publish:**
```bash
cd /tmp/blazemethod-guide-mcp/packages/guide
npm publish --access public --otp=123456
```
(Replace `123456` with your 6-digit 2FA code)

This reserves `@blazemethod/guide` on npm.

**Alternative:** See `/tmp/npm-publish-instructions.md` for access token method.

### 2. Configure DNS (5 minutes)

Go to GoDaddy DNS for blazemethod.ai and add:

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| A | www | 76.76.21.21 |

Wait 5-30 minutes, then blazemethod.ai will work!

## 🔗 Quick Links

- **Website (live):** https://blazemethod.vercel.app
- **GitHub (main):** https://github.com/jrydell3/blazemethod
- **GitHub (guide):** https://github.com/jrydell3/blazemethod-guide-mcp
- **Full Summary:** Check your email

---

**With love and fire. 🔥♥**
