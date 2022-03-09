import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { Color } from "../utils/Colors";

export default class LeftChatBubble extends Component {
  render() {
    return (
      <View style={styles.bubble}>
        <Text
          style={{
            color: Color.primary,
            paddingHorizontal: 8,
            paddingTop: 8,
            fontSize: 12,
          }}
        >
          Mahesh Rathod
        </Text>
        <View style={styles.mssageTime}>
          <Text style={{ width: "75%", paddingTop: 4 ,color:Color.title}}>
            Message
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text />
            <Text
              style={{
                color: Color.subtitle,
                paddingEnd: 8,
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
    marginHorizontal:16,
    marginVertical: 8,
    width: "80%",
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 0,
    backgroundColor: Color.primaryLight,
  },
  mssageTime: {
    paddingHorizontal: 8,
    paddingBottom: 8,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
