import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { Color } from "../../../utils/Colors";

export default class GroupListItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{
              uri: "https://reactjs.org/logo-og.png",
            }}
            style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
          />
          <View
            style={{
              justifyContent: "center",
              padding: 8,
            }}
          >
            <Text>Group Name</Text>
            <Text>Last Message</Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Text style={styles.title }>4:40 PM</Text>
          <View style={styles.messageCount}>
            <Text style={{ color: "white", fontSize: 10 }}>1</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
    alignSelf: "stretch",
    height:60,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 12,
    paddingVertical:2,
    color:Color.primary,
  },
  messageCount: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.primary,
  },
});
