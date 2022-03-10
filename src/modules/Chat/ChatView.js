import { Text, StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import React, { Component } from "react";
import LeftChatBubble from "../../components/LeftChatBubble";
import RightChatBubble from "../../components/RightChatBubble";
import ChatHeader from "../../components/ChatHeader";
import SendBox from "../../components/SendBox";
import { connect } from "react-redux";
import saveGroupReducer from "../Home/reducer";

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
    console.log(this.props.group.id);
    if (this.props.group != undefined) {
    }
  }

  sendMessage() {
    
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
            email={this.props.group.groupName}
            users={this.props.group.membersName.join(",")}
            onTapBtnBack={() => {
              this.props.navigation.goBack();
            }}
          />
          <FlatList data={this.state.messages} renderItem={this.renderItem} />
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
