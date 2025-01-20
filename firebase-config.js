// Import Firebase scripts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// import { getDatabase, ref, set } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCw9FGqizpKOKF5ITKZZ9KW0_mQmk16YGw",
    authDomain: "fuel-tracker-nsw.firebaseapp.com",
    databaseURL: "https://fuel-tracker-nsw-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fuel-tracker-nsw",
    storageBucket: "fuel-tracker-nsw.firebasestorage.app",
    messagingSenderId: "405030208707",
    appId: "1:405030208707:web:8b868dcbdcad91813a8e76",
    measurementId: "G-F0ED3JQZY1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Example function to write data to Firebase
function saveData() {
  set(ref(db, 'example/path'), {
    key: "value"
  }).then(() => {
    console.log("Data saved successfully!");
  }).catch(error => {
    console.error("Error saving data:", error);
  });
}

// Export saveData for use in other files
export { saveData };