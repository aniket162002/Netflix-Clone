import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB13S-ZNs71kk_CIt8xcXjzxZGWrbabKP8",
  authDomain: "netflix-clone-57363.firebaseapp.com",
  projectId: "netflix-clone-57363",
  storageBucket: "netflix-clone-57363.appspot.com",
  messagingSenderId: "393555460813",
  appId: "1:393555460813:web:19d01644f28036edb09f84",
  measurementId: "G-LHS1SZE3QZ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
