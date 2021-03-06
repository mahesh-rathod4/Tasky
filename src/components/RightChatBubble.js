import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { Color } from "../utils/Colors";

export default class RightChatBubble extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text />
        <View style={styles.bubble}>
          <View style={styles.mssageTime}>
            <Text style={{ paddingVertical: 8,color:Color.title }}>{this.props.message}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                
              }}
            >
              <Text/>
              <Text
                style={{
                  color: Color.subtitle,
                  paddingHorizontal: 8,
                  paddingTop: 8,
                  fontSize: 12,
                }}
              >
               {this.props.date}
              </Text>
            </View>
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
    borderTopRightRadius: 0,
    borderTopLeftRadius: 16,
    backgroundColor: Color.itemLightBG,
  },
  mssageTime: {
    paddingHorizontal: 8,
    paddingBottom: 8,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
