import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image
} from "react-native";
import * as firebase from "firebase";
import { Form, Item, Label, Button, Input } from "native-base";

export default class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }
  static navigationOptions = {
    title: "SignUp",
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
          });
      })
      .catch(error => {
        alert(error.message);
        console.log(error);
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
          <Text>- By Saloni M Darji</Text>
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
            <Label>Name: </Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="name-phone-pad"
              onChangeText={name => this.setState({ name })}
            />
          </Item>

          <Item floatingLabel>
            <Label>Password: </Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="name-phone-pad"
              onChangeText={password => this.setState({ password })}
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
              this.props.navigation.navigate("Signin");
            }}
          >
            <Text>Already having Account ?</Text>
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
    marginBottom: 30
  },
  form: {
    padding: 20,
    width: "100%"
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
