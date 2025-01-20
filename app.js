import { saveData } from "./firebase-config.js";

document.getElementById("save-data").addEventListener("click", () => {
  saveData();
});