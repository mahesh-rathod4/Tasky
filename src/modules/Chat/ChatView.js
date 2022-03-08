import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { Component, FlatList } from "react";
import LeftChatBubble from "../../components/LeftChatBubble";
import RightChatBubble from "../../components/RightChatBubble";
import ChatHeader from "../../components/ChatHeader";
import SendBox from "../../components/SendBox";
import { MessageModel } from "../../models/MessageModel";

export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ChatHeader email={"maheshr8484@gmail.com"} users={"users"} />
          

          <SendBox />
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
});
