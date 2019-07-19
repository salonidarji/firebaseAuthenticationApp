import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "native-base";
import * as firebase from "firebase";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: ""
    };
  }
  static navigationOptions = {
    title: "Home",
    header: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticate => {
      if (authenticate) {
        this.setState({
          email: authenticate.email,
          name: authenticate.displayName
        });
      } else {
        this.props.navigation.replace("Signin");
      }
    });
  }

  signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("signOut");
      })
      .catch(error => alert(error.message));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} />
          <Text>- By Saloni M Darji</Text>
        </View>
        <View style={styles.userDetails}>
          <Text>Hey {this.state.name}</Text>
          <Text>You are signed in as: {this.state.email}</Text>
        </View>
        <Button
          style={styles.button}
          full
          rounded
          danger
          onPress={() => {
            this.signOutUser();
          }}
        >
          <Text style={styles.buttonText}>Signout</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 20
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 30
  },
  userDetails: {},

  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  }
});
