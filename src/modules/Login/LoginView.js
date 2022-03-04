import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UITextField from "../../components/UITextField";
import UISecureTextField from "../../components/UISecureTextField";
import UIButton from "../../components/UIButton";
import { Color } from "../../utils/Colors";

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorEmail: "",
      errorPass: "",
    };
  }

  validatePassword() {
    var passwordReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (this.state.password.length < 6) {
      this.setState({ errorPass: "Please enter Valid Password" });
      return;
    }
    if (passwordReg.test(this.state.password) === false) {
      this.setState({ errorPass: "Please enter Valid Password" });
      return;
    } else {
      this.setState({ errorPass: "" });
    }
  }

  validateEmail() {
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (this.state.email.length < 6) {
      this.setState({ errorEmail: "Please enter Valid Email" });
      return;
    }
    if (emailReg.test(this.state.email) === false) {
      this.setState({ errorEmail: "Please enter Valid Email" });
      return;
    } else {
      this.setState({ errorEmail: "" });
    }
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          barStyle={"dark-content"}
        />
        <ScrollView>
          <View style={styles.container}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <UITextField
              placeholder="Username"
              onChangeText={(value) => {
                this.setState({ email: value });
                this.validateEmail();
              }}
            />
            <Text
              style={{
                fontSize: 10,
                color: "red",
                alignSelf: "stretch",
                paddingHorizontal: 16,
              }}
            >
              {this.state.errorEmail}
            </Text>
            <UISecureTextField
              placeholder="Password"
              onChangeText={(value) => {
                this.setState({ password: value });
                this.validatePassword();
              }}
            />
            <Text
              style={{
                fontSize: 10,
                color: "red",
                alignSelf: "stretch",
                paddingHorizontal: 16,
              }}
            >
              {this.state.errorPass}
            </Text>
            <View style={styles.forgotPassword}>
              <TouchableOpacity>
                <Text>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
            <UIButton isEnabled="false" title="Login" onTapBtn={() => {
              this.validateEmail();
              this.validatePassword();
            }} />
            <Text style={{ paddingTop: 16 }}>OR</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.icon}>
                <View>
                  <Image
                    style={styles.eyeIcon}
                    source={require("../../assets/images/facebook.png")}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <View>
                  <Image
                    style={styles.eyeIcon}
                    source={require("../../assets/images/twitter.png")}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <View>
                  <Image
                    style={styles.eyeIcon}
                    source={require("../../assets/images/linkdin.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text>Don’t have an account?</Text>
              <TouchableOpacity style={{ marginHorizontal: 4 }}>
                <Text style={{ color: Color.primary, fontWeight: "bold" }}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: 100,
    height: 145,
    margin: 50,
  },
  forgotPassword: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row-reverse",
    padding: 16,
  },
  eyeIcon: {
    width: 20,
    height: 16,
    marginHorizontal: 16,
    resizeMode: "contain",
  },
  icon: {
    height: 60,
    borderWidth: 1,
    borderColor: Color.border,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    margin: 16,
  },
});
