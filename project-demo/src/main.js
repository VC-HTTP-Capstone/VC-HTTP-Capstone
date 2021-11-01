import Vue from 'vue';
import App from './App.vue';
import { router } from "./router/index.js";
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAssZ_SS42JMRRg4mLSCMykCkJIsqgYcPE",
  authDomain: "vue-firebase-e3747.firebaseapp.com",
  projectId: "vue-firebase-e3747",
  storageBucket: "vue-firebase-e3747.appspot.com",
  messagingSenderId: "467968981714",
  appId: "1:467968981714:web:946c7dcec74b2aef19cb0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


Vue.config.productionTip = false;

new Vue({
  // el: '#app',
  render: h => h(App),
  router,
}).$mount('#app');