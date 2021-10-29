import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

let firebaseConfig = {
    apiKey: "AIzaSyAmf5z4TfnzqXERlimtrS8wGS89SlWqPBM",
    authDomain: "apptarefas-607c1.firebaseapp.com",
    projectId: "apptarefas-607c1",
    storageBucket: "apptarefas-607c1.appspot.com",
    messagingSenderId: "831562224265",
    appId: "1:831562224265:web:aaf219203965d44e2e2c58",
    measurementId: "G-5B7GCT66ZH"
  };

  //Verificação se tem mais de um banco aberto
  if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
  }

  export default firebase;