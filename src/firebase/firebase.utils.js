import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const config ={
    apiKey: "AIzaSyA0Vw9FkmygNl05BLk0vuj_PCUoGC1Jtzs",
    authDomain: "crwn-db-1215c.firebaseapp.com",
    databaseURL: "https://crwn-db-1215c.firebaseio.com",
    projectId: "crwn-db-1215c",
    storageBucket: "crwn-db-1215c.appspot.com",
    messagingSenderId: "417502443180",
    appId: "1:417502443180:web:edb0105cbabe8c34e7d109",
    measurementId: "G-Q7PKWV11SX"
  }

  export const createUserProfileDocument = async (userAuth, additionalData)=>{
   if(!userAuth)return;
   
    
   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();

   if(!snapShot.exists){
       const  {displayName, email} = userAuth;
       const createdAt = new Date();

       try{
           await userRef.set({
               displayName,
               email,
               createdAt,
                ...additionalData
            })
         
            
       } catch(e){
        console.log('error creating user', e.message);
       }
   }
   return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase