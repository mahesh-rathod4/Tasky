import { Text, StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import React, { Component } from "react";
import LeftChatBubble from "../../components/LeftChatBubble";
import RightChatBubble from "../../components/RightChatBubble";
import ChatHeader from "../../components/ChatHeader";
import SendBox from "../../components/SendBox";

export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      messages: [],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ChatHeader
            email={"maheshr8484@gmail.com"}
            users={"users"}
            onTapBtnBack={() => {
              this.props.navigation.goBack();
            }}
          />
          <FlatList
            data={this.state.messages}
            renderItem={({ item, index }) => <Text>g</Text>}
            keyExtractor={(item) => item.id}
          />
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
