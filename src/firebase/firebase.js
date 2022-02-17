
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCGxF7b-xL2AkMY7VnCcWBXnG8QzFQ3mxc",
  authDomain: "neumacar-1afc5.firebaseapp.com",
  projectId: "neumacar-1afc5",
  storageBucket: "neumacar-1afc5.appspot.com",
  messagingSenderId: "731625226804",
  appId: "1:731625226804:web:0851d19809ae0016d48061"
};

export const app = initializeApp(firebaseConfig);

export const getFirestoreApp=() =>{
  return app
}



