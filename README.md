# Gipjazes Flowers Gallery

**The Premium 4D Floral Experience.**

## 🌸 Features
- **4D Animated Background**: Stunning CSS-based tesseract animation.
- **Private Upload Portal**: `/admin/upload` for owner access.
- **Public Gallery**: High-performance image grid with instant downloads.
- **Cross-Platform**: Ready for Android (Play Store) & Web.

## 🚀 Getting Started

### Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000).

### 📱 Android App (Capacitor)
To package this as an Android app:
1. Ensure the app is running locally or deployed.
2. Build the project:
   ```bash
   npm run build
   ```
3. Initialize/Sync Capacitor:
   ```bash
   npx cap add android
   npx cap sync
   ```
4. Open in Android Studio:
   ```bash
   npx cap open android
   ```
   *Note: For a production app, update `server.url` in `capacitor.config.json` to your live website URL (e.g., on Render).*

## ☁️ Deployment (Render)
1. Push this code to GitHub.
2. Connect to Render.com -> New Web Service.
3. Use `npm run build` command and `npm start`.
4. **Note**: On Render's free tier, the filesystem is **ephemeral**. Uploaded images will be lost on redeploys. For permanent storage, integrate an S3 bucket or Cloudinary.

## 🔒 Owner Access
Navigate to `/admin/upload` to plant new flowers.
