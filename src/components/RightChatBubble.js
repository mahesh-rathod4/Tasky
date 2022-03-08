import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { Color } from "../utils/Colors";

export default class RightChatBubble extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row",justifyContent: "space-between"}}>
        <Text/>
        <View style={styles.bubble}>
          <View style={styles.mssageTime}>
            <Text style={{ paddingVertical: 8 }}>Message</Text>
            <Text
              style={{
                color: Color.subtitle,
                paddingHorizontal: 8,
                paddingTop: 8,
                fontSize: 12,
              }}
            >
              8.20 Pm
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bubble: {
    margin: 16,
    width: "80%",
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 16,
    backgroundColor: Color.lightDimm,
  },
  mssageTime: {
    paddingHorizontal: 8,
    paddingBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
