import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { Color } from "../../utils/Colors";
import LeftChatBubble from "../../components/LeftChatBubble";
import RightChatBubble from "../../components/RightChatBubble";

export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text></Text>
          <LeftChatBubble />
          <RightChatBubble />
          <View style={styles.sentMsgBg}>
            <TextInput
              style={styles.message}
              multiline
              onChangeText={(value) => {
                // this.state({ msg: value });
              }}
              placeholder="Message.."
            />
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: Color.primary,
                  marginEnd: 50,
                }}
              >
                SEND
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  message: {
    marginVertical: 16,
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
