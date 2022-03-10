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
    this.docs = firestore()
      .collection("messages")
      .doc(this.props.group.id)
      .collection("messages")
      .orderBy("date", "asc");
    this.state = {
      isLoading: false,
      messages: [],
      msg: "",
    };
  }

  componentDidMount() {
    console.log("CurrentUserID", auth().currentUser.uid);
    this.unsubscribe = this.docs.onSnapshot(this.fetchMsgs);
  }

  componentWillUnmount() {}

  fetchMsgs = (querySnapshot) => {
    const ar = [];
    querySnapshot.forEach((msgDoc) => {
      console.log(msgDoc.data());
      const { id, message, date, name } = msgDoc.data();
      const messageModel = new MessageModel(id, message, date.toDate(), name);
      ar.push(messageModel);
    });
    this.setState({ messages: ar });
  };

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
    //messages.reverse();
    this.setState({ messages: messages });
    const usersCollection = firestore().collection("messages");
    usersCollection
      .doc(this.props.group.id)
      .collection("messages")
      .add(messageModel)
      .then(() => {
        console.log("Add Message Successfully");
      });
  }

  renderItem = ({ item }) => {
    console.log(item);
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
            users={this.props.group.members.join(",")}
            onTapBtnBack={() => {
              this.props.navigation.goBack();
            }}
          />
          <FlatList
            data={this.state.messages}
            extraData={this.state}
            renderItem={this.renderItem}
           
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
