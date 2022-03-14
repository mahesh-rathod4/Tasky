import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Color } from "../../../utils/Colors";

const ProfileImageView = (props) => {
  return (
    <View>
      <View style={styles.profileView}>
        <TouchableOpacity
          onPress={() => {
            props.onTapProfile();
          }}
        >
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.onTapAddProfile();
          }}
          style={{
            backgroundColor: Color.primary,
            height: 40,
            width: 40,
            right: 65,
            top: 110,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
          }}
        >
          <Image
            style={{ width: 24, height: 24, justifyContent: "center" }}
            source={require("../../../assets/images/camera.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileView: {
    alignItems: "center",
    flex: 1,
    margin: 50,
  },
  tinyLogo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});

export default ProfileImageView;
