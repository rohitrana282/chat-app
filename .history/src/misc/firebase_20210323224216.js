import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDPbEgGTBy1y7daSRrvT80dMdv7BHkSzqg',
  authDomain: 'chat-web-app-69f69.firebaseapp.com',
  databaseURL: 'https://chat-web-app-69f69-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-69f69',
  storageBucket: 'chat-web-app-69f69.appspot.com',
  messagingSenderId: '866547978507',
  appId: '1:866547978507:web:88527f90f7077859a3920e',
};
const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
