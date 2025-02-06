import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBhioDcnCVJaDcH8MxdYcPxuteietZkKKg",
  authDomain: "blackjack-1aac4.firebaseapp.com",
  databaseURL: "https://blackjack-1aac4-default-rtdb.firebaseio.com",
  projectId: "blackjack-1aac4",
  storageBucket: "blackjack-1aac4.firebasestorage.app",
  messagingSenderId: "382717543058",
  appId: "1:382717543058:web:f7875e2effd218d8199c4b",
  measurementId: "G-3VM5Q3QK0G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);