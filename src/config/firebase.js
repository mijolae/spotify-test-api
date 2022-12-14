// Import the functions you need from the SDKs you need
import 'firebase/app';
import 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyAu2EIvBh2lLiBUY6-z38zt7KG_vQCQNXo',
  authDomain: 'ohmspotify-85d41.firebaseapp.com',
  databaseURL: 'https://ohmspotify-85d41-default-rtdb.firebaseio.com',
  projectId: 'ohmspotify-85d41',
  storageBucket: 'ohmspotify-85d41.appspot.com',
  messagingSenderId: '622652348655',
  appId: '1:622652348655:web:ceed2eb54d729e2dca231a',
  measurementId: 'G-SN0M0MX6K8',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
export default storage;
