# Layer 9 Solutions - Deployment Notes

## Environment Variables Required

The contact form requires SMTP credentials to function.

### Coolify (recommended)
Set these in your application's **Environment Variables** tab in the Coolify dashboard:
```
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
```
Mark both as **runtime** variables (not build-only). Redeploy after adding them.

### Manual / pm2
Create `.env.local` in the project root:
```
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
```
Ensure the file is **not** committed to git (already in `.gitignore`), then restart:
```bash
npm run build
pm2 restart layer9-next
```

## SMTP Configuration

- **Host:** `jmr01.jtsnet.uk`
- **Port:** `587` (STARTTLS)
- **From:** `noreply@layer9solutions.com`
- **To:** `sales@layer9solutions.com`

If you need to change these, edit: `src/app/api/contact/route.js`

## Verifying It Works

1. Fill out the contact form on `/contact`
2. Check browser console (F12) for any errors
3. Check server logs (`pm2 logs layer9-next` or Coolify's log viewer)
4. Check `sales@layer9solutions.com` inbox for the test message

## Troubleshooting

If you see "Server configuration error":
- Environment variables are missing or not being read
- For Coolify: check they're set as runtime variables and redeploy
- For pm2: make sure `.env.local` is in the project root and restart the server

If you see "Failed to send message":
- Check the error details in browser console / Network tab
- Verify SMTP credentials are correct
- Confirm `jmr01.jtsnet.uk` is reachable from your server on port 587
