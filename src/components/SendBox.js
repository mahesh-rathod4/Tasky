import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { Component } from "react";
import { Color } from "../utils/Colors";

export default class SendBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnable: false,
      msg: "",
    };
  }

  render() {
    return (
      <View style={styles.sentMsgBg}>
        <TextInput
          style={styles.message}
          multiline
          value={this.state.msg}
          onChangeText={(value) => {
            // this.state({ msg: value });
            this.setState({ msg: value });
            if (value.length < 1) {
              this.setState({ isEnable: false });
            } else {
              this.props.onChangeText(value);
              this.setState({ isEnable: true });
            }
          }}
          placeholder="Message.."
        />
        <TouchableOpacity
          disabled={this.state.isEnable ? false : true}
          onPress={() => {
            this.props.onTapBtnSend();
            this.setState({ msg: "", isEnable: false });
          }}
        >
          <Text
            style={
              this.state.isEnable ? styles.enableTitle : styles.disableTitle
            }
          >
            SEND
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  enableTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Color.primary,
    marginEnd: 50,
  },
  disableTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Color.title,
    marginEnd: 50,
  },
  message: {
    marginVertical: 8,
    marginStart: 16,
    width: "80%",
  },
  sentMsgBg: {
    margin: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#d7d7d7",
    alignSelf: "stretch",
    borderRadius: 20,
  },
});
