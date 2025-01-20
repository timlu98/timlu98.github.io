// Import Firebase scripts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// import { getDatabase, ref, set } from "firebase/database";

// Firebase configuration

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