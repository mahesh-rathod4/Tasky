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
            <UITextField placeholder="Username" onChangeText={(value) => {}} />
            <UISecureTextField
              placeholder="Password"
              isSecureText={true}
              onChangeText={(value) => {}}
            />
            <View style={styles.forgotPassword}>
              <TouchableOpacity>
                <Text>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
            <UIButton isEnabled="false" title="Login" onTapBtn={() => {}} />
            <Text style={{ paddingTop: 16 }}>OR</Text>
            <View style={{flexDirection: "row"}}>
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
            <View style={{flexDirection: "row"}}>
              <Text>Don’t have an account?</Text>
              <TouchableOpacity style={{marginHorizontal: 4}}>
                <Text style={{color:Color.primary,fontWeight:"bold"}}>Register</Text>
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
