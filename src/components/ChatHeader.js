import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";

export default class ChatHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.props.onTapBtnBack}
        >
          <View style={styles.container}>
            <Image
              style={{ width: 20, height: 20, marginStart: 16, marginEnd: 4 }}
              source={require("../assets/images/back.png")}
            />
            <Image
              source={{
                uri: "https://reactjs.org/logo-og.png",
              }}
              style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ paddingHorizontal: 8 }}>
            <Text>{this.props.email}</Text>
            <Text>{this.props.users}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
  },
});
