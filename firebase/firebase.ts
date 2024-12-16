import {initializeApp, getApp, getApps} from "@firebase/app";
import {getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import {getFirestore } from "@firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import {getStorage} from "@firebase/storage";

const firebaseConfig = {

    apiKey: "AIzaSyCdrwSpDCPUkZ7BViattzqsHcAqMbVE5Dc",
  
    authDomain: "petshop-27740.firebaseapp.com",
  
    projectId: "petshop-27740",
  
    storageBucket: "petshop-27740.firebasestorage.app",
  
    messagingSenderId: "892460248514",
  
    appId: "1:892460248514:web:523ae297ca3fbd0d293a5b"
  
  };
  


let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp(); // if already initialized, use that one
}
export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);
export const storage = getStorage(app);