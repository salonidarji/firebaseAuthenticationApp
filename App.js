import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as firebase from "firebase";
import { createStackNavigator, createAppContainer } from "react-navigation";

import LoadingScreen from "./screens/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/SignupScreen";
import SigninScreen from "./screens/SigninScreen";

var firebaseConfig = {
  apiKey: "AIzaSyAC7z7gicEPRTssU7dnDgGkgwiujS3CU0Y",
  authDomain: "fir-authproject-c3af7.firebaseapp.com",
  databaseURL: "https://fir-authproject-c3af7.firebaseio.com",
  projectId: "fir-authproject-c3af7",
  storageBucket: "",
  messagingSenderId: "441917754320",
  appId: "1:441917754320:web:535382f0be531eb9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const MainNavigator = createStackNavigator(
  {
    Loading: { screen: LoadingScreen },
    Signin: { screen: SigninScreen },
    Signup: { screen: SignupScreen },
    Home: { screen: HomeScreen }
  },
  {
    // launcher screen
    initialRouteName: "Loading"
  }
);

const App = createAppContainer(MainNavigator);
export default App;
