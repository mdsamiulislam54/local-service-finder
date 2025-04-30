# SebaFinder Web Application

This is a responsive service details web application built with **React**, **Tailwind CSS**, **React Icons**, and **Firebase Authentication**. The app displays service features, descriptions, and pricing plans. It fetches service data from a JSON file and allows user authentication using Firebase.

---
👉 [Live Site](https://sebafinder.netlify.app/)

## ✨ Features

- 📝 Service features list with icons  
- 📑 Detailed service descriptions divided into multiple parts  
- 💸 Dynamic pricing card for each service  
- 🔐 User Authentication with Firebase (Email/Password, Google Sign-In)  
- 📱 Fully responsive and mobile-friendly  
- 🎨 Styled with Tailwind CSS and React Icons  

---

## 🚀 Technologies Used

- **React**
- **Tailwind CSS**
- **React Icons**
- **React Router**
- **Firebase Authentication**
- **JSON (for service data)**

---

## 📂 Project Structure



---

## 🔥 Firebase Authentication Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Go to **Authentication** → **Sign-in Method**
4. Enable **Email/Password** and **Google**
5. Copy your Firebase config and paste it into `src/firebase/firebase.config.js`

```javascript
// src/firebase/firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

```


# Install dependencies
### npm install
# Start the development server 
### npm run dev (or npm start)
# Open your browser 
### http://localhost:5173 (if using Vite)

