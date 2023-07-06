// npm install firebase 명령어로 firebase를 설치한다.
// 내 계정과 관련된 firebase 설정 내용을 넣을 것이다.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyANo1Jh_rdQK9MQN_5Segd3FvTSxHT26c4",
	authDomain: "practice-firebase-b3224.firebaseapp.com",
	projectId: "practice-firebase-b3224",
	storageBucket: "practice-firebase-b3224.appspot.com",
	messagingSenderId: "473837823093",
	appId: "1:473837823093:web:49dcc79399ba73e7f7443c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
