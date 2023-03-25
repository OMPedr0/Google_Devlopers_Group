import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const app = initializeApp({
    apiKey: "AIzaSyDx4hfHcxWm4quil0H8PS451GNTVBXKDao",
    authDomain: "project-workshop-9a580.firebaseapp.com",
    projectId: "project-workshop-9a580",
    storageBucket: "project-workshop-9a580.appspot.com",
    messagingSenderId: "801854471530",
    appId: "1:801854471530:web:6615765b17e4627591f913"
});

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
