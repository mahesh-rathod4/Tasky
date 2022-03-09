import { Text, StyleSheet, View, FlatList } from "react-native";
import React, { Component } from "react";
import messaging from "@react-native-firebase/messaging";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import UIButton from "../../components/UIButton";
import GroupListItem from "./ListItems/GroupListItem";
import firestore from "@react-native-firebase/firestore";
import GroupResponseModel from "../../models/GroupResponseModel";

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.groups = firestore().collection("Group");
    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    this.getToken();
    this.unsubscribe = this.groups.onSnapshot(this.fetchGroups);
    PushNotification.configure({
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },

      onNotification: function (notification) {
        console.log("onNOTIFICATION:", notification);
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      onAction: function (notification) {
        console.log("onAction:", notification.action);
        console.log("NOTIFICATION:", notification);
      },
      onRegistrationError: function (err) {
        console.error(err.message, err);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }

  fetchGroups = (querySnapshot) => {
    const responseGroups = [];
    this.setState({ isLoading: true });
    querySnapshot.forEach((groupDoc) => {
      const {
        groupName,
        id,
        lastMsgTime,
        createAt,
        createBy,
        members,
        recentMsg,
      } = groupDoc.data();
      const groupResponseModel = new GroupResponseModel(
        createAt,
        createBy,
        id,
        members,
        groupName,
        recentMsg,
        lastMsgTime
      );
      responseGroups.push(groupResponseModel);
    });
    this.setState({ groups: responseGroups });
  };

  getToken = async () => {
    try {
      const token = await messaging().getToken();
      if (token) return token;
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.groups}
          renderItem={({ item, index }) => (
            <GroupListItem
              name={item.groupName}
              lastMsg={item.recentMsg}
              lastMsgTime={item.lastMsgTime}
              msgCount={0}
              onTapItem={() => {
                this.props.navigation.navigate("Chat");
              }}
            />
          )}
        />
        <UIButton
          isEnabled="true"
          title="Create Group"
          onTapBtn={() => {
            this.props.navigation.navigate("NewChat");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 40,
  },
});
