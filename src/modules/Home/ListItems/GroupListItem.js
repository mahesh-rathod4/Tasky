import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { Color } from "../../../utils/Colors";

export default class GroupListItem extends Component {
  constructor(props) {
    super(props);
  }

   getTime(){
    const date = this.props.lastMsgTime;
    return date.toDate().toDateString()
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onTapItem}>
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
              <Text>{this.props.name}</Text>
              <Text style={{ color: Color.subtitle }}>
                {this.props.lastMsg}
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Text style={styles.title}>{this.getTime()}</Text>
            {this.props.messageCount == 0 ? (
              <View style={styles.messageCount}>
                <Text style={{ color: "white", fontSize: 10 }}>
                  {this.props.msgCount}
                </Text>
              </View>
            ) : (
              <Text />
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
    alignSelf: "stretch",
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 11,
    paddingVertical: 2,
    color: Color.primary,
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
