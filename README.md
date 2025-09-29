**# IRCTC Clone - React + Redux + Firestore**

A **train booking and information web application** inspired by IRCTC.  
This project is built with **React**, **Redux Toolkit**, and **Firebase Firestore** for data storage.  
It is intended as a **demo/project for learning purposes** (does **not use real IRCTC APIs**).

---

**## Features**

- **Train Search** – Search trains by source and destination.
- **Train Schedule Display** – View departure and arrival times.
- **PNR Simulation** – Generate and check mock PNR status.
- **Redux State Management** – Manages app state for user actions and train data.
- **Firestore Database** – Stores mock train schedules, user data, and bookings.
- **Responsive UI** – Works on desktop and mobile screens.
- **User authentication** (email/password + Google OAuth)

---

**## Tech Stack**

- **Frontend:** React, Redux Toolkit, React Router
- **Backend / Database:** Firebase Firestore, FirebaseAuth
- **Styling:** CSS / TailwindCSS (optional)
- **State Management:** Redux Toolkit
- **APIs:** Mocked train data stored in Firestore
- **Hosting (Optional):** Firebase Hosting / Vercel / Netlify

---

**## Project Structure**

irctc-clone/
│
├─ public/
├─ src/
│ ├─ components/ # Reusable React components
│ ├─ pages/ # Pages like Home, Trains, PNR
│ ├─ redux/ # Redux slices & store configuration
│ ├─ firebase/ # Firestore configuration
│ ├─ App.jsx
│ └─ index.js
├─ package.json
└─ README.md

yaml
Copy code

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/irctc-clone.git
cd irctc-clone
Install dependencies

bash
Copy code
npm install
Configure Firebase Firestore

Create a Firebase project: https://console.firebase.google.com/

Enable Firestore Database.

Copy your Firebase config and create firebase.js:

javascript
Copy code
// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
Running the App
bash
Copy code
npm start
App will run on http://localhost:3000

Redux DevTools can be used to inspect state.

---
Feel free to contribute, raise issues, or fork the project!
 
 **## 📬 Contact If you have any questions, suggestions, or feedback, feel free to reach out:**

GitHub: https://github.com/rwtabhii

Email: abhishekrawatdev@gmail.com