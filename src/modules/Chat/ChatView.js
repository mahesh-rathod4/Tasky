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
      messages: [0, 1, 1, 0, 0, 0, 1, 1, 0],
    };
  }

  componentDidMount() {
    console.log(this.props.group);
  }

  renderItem = ({ item }) => {
    if (item == 0) {
      return <LeftChatBubble />;
    }
    {
      return <RightChatBubble />;
    }
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ChatHeader
            email={"j"}
            users={"users"}
            onTapBtnBack={() => {
              this.props.navigation.goBack();
            }}
          />
          <FlatList
            data={this.state.messages}
            renderItem={this.renderItem}
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
