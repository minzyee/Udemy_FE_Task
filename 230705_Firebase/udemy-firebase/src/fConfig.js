// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAlNvNkAWqerR_BuuD0y9S7nw-l45qUsPg",
	authDomain: "udemy-firebase-9e689.firebaseapp.com",
	projectId: "udemy-firebase-9e689",
	storageBucket: "udemy-firebase-9e689.appspot.com",
	messagingSenderId: "18802388446",
	appId: "1:18802388446:web:af786e75057a5f3280814f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
};
export default auth;
