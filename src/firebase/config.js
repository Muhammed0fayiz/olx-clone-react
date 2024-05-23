import firebase from 'firebase';
import 'firebase/auth'

import 'firebase/firebase'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBIE57MT78JSd9wisG1kjZVcnDZjqyBSZA",
    authDomain: "olx-clone-project-2289c.firebaseapp.com",
    projectId: "olx-clone-project-2289c",
    storageBucket: "olx-clone-project-2289c.appspot.com",
    messagingSenderId: "365778543844",
    appId: "1:365778543844:web:68af6c02d0a829d3d878f1",
    measurementId: "G-24XYT8RQ31"
  };

 export default firebase.initializeApp(firebaseConfig)