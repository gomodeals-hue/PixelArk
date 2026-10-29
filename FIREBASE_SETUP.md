# Firebase Authentication Setup Guide for Pixlark Business Suite

This guide walks you through setting up live Firebase Authentication (Email/Password & Google Sign-In) for your **Pixlark Business Suite** client portal.

---

## 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **"Add project"** (or select an existing Google Cloud / Firebase project).
3. Enter your project name (e.g., `Pixlark-Marketing-Suite`) and click **Continue**.
4. (Optional) Enable Google Analytics and click **Create project**.

---

## 2. Enable Authentication Providers

1. In the left navigation menu of your Firebase Console, click on **Build** &rarr; **Authentication**.
2. Click **"Get started"**.
3. Under the **"Sign-in method"** tab, enable the following providers:
   - **Email/Password**:
     - Click **Email/Password**.
     - Toggle **Enable** to ON.
     - (Optional) Toggle **Email link (passwordless sign-in)** if desired.
     - Click **Save**.
   - **Google**:
     - Click **Google**.
     - Toggle **Enable** to ON.
     - Choose a **Project support email**.
     - Click **Save**.

---

## 3. Register Web App & Get Firebase API Keys

1. In the Project Overview dashboard (click the gear icon ⚙️ &rarr; **Project settings**).
2. Under the **"Your apps"** section, click the **Web icon (`</>`)** to add a web application.
3. App nickname: `Pixlark Web App` (check or uncheck Firebase Hosting as desired).
4. Click **Register app**.
5. You will see a `firebaseConfig` object similar to this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD-YourActualFirebaseApiKeyHere",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

---

## 4. Paste Keys into Pixlark Codebase

Open [`assets/js/firebase-config.js`](file:///e:/GMD/PixelArk/Pixlark/assets/js/firebase-config.js) and replace the configuration object at the top of the file:

```javascript
// assets/js/firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyD-YourActualFirebaseApiKeyHere",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

---

## 5. Authorized Domains for Google Sign-In

For Google OAuth Sign-In and popup authentication to work:
1. In Firebase Console &rarr; **Authentication** &rarr; **Settings** &rarr; **Authorized domains**.
2. By default, `localhost` is authorized.
3. When deploying to production (e.g., `pixlarkmarketing.com` or Vercel/Netlify), click **Add domain** and enter your production domain.

---

## 6. How the Authentication API Works

The project includes modular helper functions in [`assets/js/firebase-config.js`](file:///e:/GMD/PixelArk/Pixlark/assets/js/firebase-config.js):

| Function | Description |
| :--- | :--- |
| `firebaseRegisterUser(email, password, displayName)` | Creates a new user in Firebase Auth and updates profile |
| `firebaseLoginUser(email, password)` | Authenticates an existing user with Email/Password |
| `firebaseLoginWithGoogle()` | Triggers Google OAuth popup sign-in |
| `firebaseSendPasswordReset(email)` | Sends password reset email to user |
| `firebaseSignOutUser()` | Signs out of Firebase and clears local workspace session |

All authentication methods automatically synchronize user profile details with `localStorage` (`pixlark_auth_user` and `pixlark_suite_accounts`) and smoothly redirect to the Business Suite at [`dashboard.html`](file:///e:/GMD/PixelArk/Pixlark/dashboard.html).
