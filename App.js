import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as firebase from "firebase";
import { createStackNavigator, createAppContainer } from "react-navigation";

import LoadingScreen from "./screens/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/SignupScreen";
import SigninScreen from "./screens/SigninScreen";

var firebaseConfig = {
  apiKey: "AIzaSyC0SwRV3im6Y4Tr-d4P2ZkBFoZCvDs8MwM",
  authDomain: "reactapp-cb9b0.firebaseapp.com",
  databaseURL: "https://reactapp-cb9b0.firebaseio.com",
  projectId: "reactapp-cb9b0",
  storageBucket: "",
  messagingSenderId: "315585075766",
  appId: "1:315585075766:web:0aae000438000b53"
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
