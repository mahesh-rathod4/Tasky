import { Text, StyleSheet, View, TouchableOpacity,Image } from "react-native";
import React, { Component } from "react";
import { Color } from "../../../utils/Colors";

export default class UserListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onTapItem}>
        <View style={styles.container}>
          <View style={styles.UserName}>
            {this.props.isSelected ? (
              <Image
                style={styles.eyeIcon}
                source={require("../../../assets/images/checkmark.png")}
              />
            ) : (
              <Text
                style={{
                  color: Color.primary,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {this.props.email.slice(0, 2).toUpperCase()}
              </Text>
            )}
          </View>
          <View style={styles.names}>
            <Text style={{ color: Color.title }}>{this.props.email}</Text>
            <Text style={{ color: Color.subtitle }}>
              Hey there! I am using Tasky.
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  names: {
    justifyContent: "flex-start",
    marginHorizontal: 12,
  },
  UserName: {
    height: 46,
    width: 46,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.primaryLight,
  },
  eyeIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  }
});
