# Google Apps Script Setup Guide for Pixlark Marketing

This guide explains how to deploy and update the **Google Apps Script email engine** for Pixlark Marketing.

---

## 🚀 Updating to the Latest Script with Bird + Logo

### Step 1: Open Your Existing Google Apps Script Project
1. Go to [https://script.google.com/](https://script.google.com/) and open your **Pixlark Contact Form Handler** project (or open your Google Sheet -> **Extensions** -> **Apps Script**).

---

### Step 2: Replace Code with [`google-apps-script.js`](file:///e:/GMD/PixelArk/Pixlark/google-apps-script.js)
1. Open [`google-apps-script.js`](file:///e:/GMD/PixelArk/Pixlark/google-apps-script.js) in this repo.
2. Select all (`Ctrl+A`) and copy (`Ctrl+C`).
3. In the Google Apps Script editor (`Code.gs`), select all and paste the new code.
4. Click the **Save** icon (`Ctrl+S`).

---

### Step 3: Deploy New Version (Crucial Step)
Whenever you modify Google Apps Script code, you must publish a new version:
1. Click the blue **Deploy** button at top right -> select **Manage deployments**.
2. Click the **Pencil icon** (Edit) on your Active deployment.
3. Under **Version**, click the dropdown and select **New version**.
4. Click **Deploy**.

---

### Step 4: Test Form Submission
1. Open [`contact.html`](file:///e:/GMD/PixelArk/Pixlark/contact.html) in your browser.
2. Fill out the contact form and submit.
3. Check your inbox at `zensoralabs@gmail.com` — the email will arrive with the **PixlArk bird symbol and logo** displayed.
