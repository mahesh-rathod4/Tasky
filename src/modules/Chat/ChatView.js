import { Text, StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import React, { Component } from "react";
import LeftChatBubble from "../../components/LeftChatBubble";
import RightChatBubble from "../../components/RightChatBubble";
import ChatHeader from "../../components/ChatHeader";
import SendBox from "../../components/SendBox";
import { connect } from "react-redux";
import saveGroupReducer from "../Home/reducer";
import firestore from "@react-native-firebase/firestore";
import MessageModel from "../../models/MessageModel";
import auth from "@react-native-firebase/auth";
import utils from "../../utils/Utils";

class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      messages: [],
      msg: "",
    };
  }

  componentDidMount() {
    if (this.props.group != undefined) {
    }
  }

  sendMessage() {
    const authId = auth().currentUser.uid;
    const email = auth().currentUser.email;
    const messageModel = new MessageModel(
      authId,
      this.state.msg,
      new Date(),
      email
    );
    const messages = this.state.messages;
    messages.push(messageModel);
    messages.reverse();
    this.setState({ messages: messages });
    // const usersCollection = firestore().collection("messages");
    // usersCollection
    //   .doc(this.props.group.id)
    //   .collection('messages')
    //   .add(messageModel)
    //   .then(() => {
    //     console.log("Add Message Successfully");
    //   });
  }

  renderItem = ({ item }) => {
    if (item.id != auth().currentUser.uid) {
      return (
        <LeftChatBubble
          message={item.message}
          name={item.name}
          date={utils.formatAMPM(item.date)}
        />
      );
    } else {
      return (
        <RightChatBubble
          message={item.message}
          date={utils.formatAMPM(item.date)}
        />
      );
    }
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ChatHeader
            email={this.props.group.groupName}
            users={this.props.group.membersName.join(",")}
            onTapBtnBack={() => {
              this.props.navigation.goBack();
            }}
          />
          <FlatList
            data={this.state.messages}
            extraData={this.state}
            renderItem={this.renderItem}
            inverted
            keyExtractor={(item) => item.id + utils.makeId(8)}
          />
          <SendBox
            onChangeText={(value) => {
              this.setState({ msg: value });
            }}
            onTapBtnSend={() => {
              this.sendMessage();
            }}
          />
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

const mapStateToProps = (state) => {
  return {
    group: state.saveGroupReducer.group,
  };
};

const mapDispatchToProps = (dispatch) => {
  // return {
  //   reduxSaveUser: user => dispatch(saveUserDetails(user)),
  // };
};

export default connect(mapStateToProps, null)(ChatView);
