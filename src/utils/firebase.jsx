// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc} from "firebase/firestore";
import { products } from "../dataBase/products";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv8wBEwdsIqfLx5PH7METBGEi5beeV7f4",
  authDomain: "mia-react.firebaseapp.com",
  projectId: "mia-react",
  storageBucket: "mia-react.appspot.com",
  messagingSenderId: "9524952295",
  appId: "1:9524952295:web:fa41accf2f0b4d07a17642",
  measurementId: "G-ZZL4Z35Q9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//crear una instancia de la base de datos
export const db = getFirestore(app);

//exportar los datos
export async function exportData(){
  const collectionRef = collection(db , "products")
  for(let item of products){
const response = await addDoc(collectionRef, item)
console.log("producto exportado con ID: "+ response.id)
  }
} 