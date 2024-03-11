import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyA_o_xKxyBDDjwzmiUu8LVsvBpjbRaZcGU",
  authDomain: "netflico-171.firebaseapp.com",
  projectId: "netflico-171",
  storageBucket: "netflico-171.appspot.com",
  messagingSenderId: "1058220531301",
  appId: "1:1058220531301:web:e5d884ef99c8fb51b3b08c",
  measurementId: "G-T3XZ7RZ0KP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
