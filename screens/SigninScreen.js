import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import * as firebase from "firebase";
import { Form, Item, Input, Label, Button } from "native-base";

export default class SigninScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  static navigationOptions = {
    title: "SignIn",
    header: null
  };

  signupUser = (name, email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(authenticate => {
        return authenticate.user
          .updateProfile({
            displayName: name
          })
          .then(() => {
            this.props.navigation.replace("Home");
          })
          .catch(error => {
            alert(error.message);
          });
      })
      .catch(error => {
        alert(error.message);
      });
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="position"
        enabled
      >
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} />
          <Text>Do Login</Text>
        </View>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Email: </Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={email => this.setState({ email })}
            />
          </Item>

          <Item floatingLabel>
            <Label>Password: </Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              onChangeText={email => this.setState({ email })}
            />
          </Item>

          <Button
            style={styles.button}
            full
            rounded
            onPress={() => {
              this.signupUser(
                this.state.name,
                this.state.email,
                this.state.password
              );
            }}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </Button>
        </Form>

        <View style={styles.footer}>
          <Text>OR</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Signup");
            }}
          >
            <Text>Create a new Account ?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  form: {
    padding: 20,
    width: "100%",
    marginBottom: 30
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center"
  }
});
