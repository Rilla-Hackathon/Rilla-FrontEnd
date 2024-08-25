import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4HYp7YwQjiyiozRUUUr2WnVT42MAc4-4",
  authDomain: "rilla-63f80.firebaseapp.com",
  projectId: "rilla-63f80",
  storageBucket: "rilla-63f80.appspot.com",
  messagingSenderId: "449161250214",
  appId: "1:449161250214:web:c7e2e45d20f55521d77b67",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, GoogleAuthProvider, signInWithPopup };
