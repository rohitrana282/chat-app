import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDPbEgGTBy1y7daSRrvT80dMdv7BHkSzqg',
  authDomain: 'chat-web-app-69f69.firebaseapp.com',
  projectId: 'chat-web-app-69f69',
  storageBucket: 'chat-web-app-69f69.appspot.com',
  messagingSenderId: '866547978507',
  appId: '1:866547978507:web:88527f90f7077859a3920e',
};

const app = firebase.initializeApp(config);
