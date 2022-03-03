import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";

const UITextField = (props) => {
  return (
    <View style={styles.bg}>
      <TextInput
        style={styles.title}
        onChangeText={(text) => props.onChangeText(text)}
        placeholder={props.placeholder}
      />
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
  },
  title: {
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default UITextField;
