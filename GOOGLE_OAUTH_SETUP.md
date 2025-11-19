# Google OAuth Setup Guide

## ✅ Fixed Issues
- Removed quotes from `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`
- Removed `http://` prefix from Client ID
- Removed trailing slash from Client ID

## Current Configuration
Your `.env.local` should now have:
```env
GOOGLE_CLIENT_ID=919772688848-u43bcoangkhqdg6jsdkvp7om8io4vnei.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=**Q7o1
```

## ⚠️ Important: Verify Google Cloud Console Settings

### Step 1: Check Your OAuth Client in Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Navigate to **APIs & Services** → **Credentials**
4. Find your OAuth 2.0 Client ID: `919772688848-u43bcoangkhqdg6jsdkvp7om8io4vnei`
5. Click on it to edit

### Step 2: Verify Authorized Redirect URIs

Make sure you have this EXACT redirect URI (case-sensitive):
```
http://localhost:3000/api/auth/callback/google
```

**Important:**
- Must start with `http://` (not `https://` for localhost)
- Must be exactly: `/api/auth/callback/google`
- No trailing slash
- Must match your `NEXTAUTH_URL` in `.env.local`

### Step 3: Verify Client Secret

If your Client Secret looks incomplete (ends with `**Q7o1`), you may need to:
1. Go to Google Cloud Console → Credentials
2. Click on your OAuth client
3. Check if the secret is complete
4. If needed, create a new secret and update `.env.local`

### Step 4: Enable Required APIs

Make sure these APIs are enabled in Google Cloud Console:
- **Google+ API** (or **Google Identity API**)
- **People API** (optional but recommended)

To enable:
1. Go to **APIs & Services** → **Library**
2. Search for "Google Identity" or "Google+ API"
3. Click **Enable**

## 🔄 After Making Changes

1. **Restart your dev server:**
   ```bash
   # Stop server (Ctrl+C)
   cd Community
   pnpm dev
   ```

2. **Clear browser cache/cookies** for localhost:3000

3. **Test Google login** again

## 🐛 Troubleshooting

### Error: "invalid_client"
- ✅ Check Client ID format (no quotes, no http://, no trailing slash)
- ✅ Verify Client Secret is complete
- ✅ Ensure redirect URI matches exactly

### Error: "redirect_uri_mismatch"
- ✅ Check redirect URI in Google Cloud Console
- ✅ Must be: `http://localhost:3000/api/auth/callback/google`
- ✅ No trailing slash

### Error: "access_denied"
- ✅ Check if required APIs are enabled
- ✅ Verify OAuth consent screen is configured

## 📝 Quick Checklist

- [ ] Client ID format is correct (no quotes, no http://)
- [ ] Client Secret is complete
- [ ] Redirect URI is set: `http://localhost:3000/api/auth/callback/google`
- [ ] Google+ API or Google Identity API is enabled
- [ ] OAuth consent screen is configured
- [ ] `.env.local` file is in the `Community` folder
- [ ] Dev server has been restarted after changes

## 🚀 Next Steps

1. Verify your Google Cloud Console settings match the above
2. Restart your dev server
3. Try Google login again

If you still get errors, check:
- Browser console for detailed error messages
- Server terminal for NextAuth errors
- Google Cloud Console → Credentials for client status

