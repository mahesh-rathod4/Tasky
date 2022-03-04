import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";

const UISecureTextField = (props) => {
  const [isSecureText, setSecureText] = useState(true);
  const onTapSecurePass = () => setSecureText(!isSecureText);

  return (
    <View style={styles.bg}>
      <TextInput
        secureTextEntry={isSecureText}
        style={styles.title}
        onChangeText={(text) => props.onChangeText(text)}
        placeholder={props.placeholder}
      />
      <TouchableOpacity
        style={styles.FacebookStyle}
        activeOpacity={0.5}
        onPress={onTapSecurePass}
      >
        {isSecureText ? (
          <Image
            style={styles.eyeIcon}
            source={require("../assets/images/eyeSe.png")}
          />
        ) : (
          <Image
            style={styles.eyeIcon}
            source={require("../assets/images/eye.png")}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    fontSize: 16,
    height: 60,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "#F7F7F7",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 16,
  },
  eyeIcon: {
    width: 20,
    height: 16,
    marginHorizontal: 16,
    resizeMode: "contain",
  },
});

export default UISecureTextField;
