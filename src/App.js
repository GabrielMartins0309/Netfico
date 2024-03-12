import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);  

const App = () => {    
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </Router>
  );
  
}

export default App;
