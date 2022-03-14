import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Color } from "../../../utils/Colors";

const UserDetail = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ width: 20, height: 20 }}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <View style={{ margin: 16 }}>
          <Text style={{ fontSize: 14, color: Color.subtitle }}>
            {props.heading}
          </Text>
          <Text style={{ color: Color.title, fontSize: 16 }}>
            {props.email}
          </Text>
        </View>
      </View>

      {props.isShow ? (
        <TouchableOpacity>
          <Image
            style={{ width: 20, height: 20,tintColor:Color.primary }}
            source={require("../../../assets/images/edit.png")}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
