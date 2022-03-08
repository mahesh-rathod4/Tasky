import { Text, StyleSheet, View, FlatList } from "react-native";
import React, { Component } from "react";
import messaging from "@react-native-firebase/messaging";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import UIButton from "../../components/UIButton";
import GroupListItem from "./ListItems/GroupListItem";

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: ["tx", "f"],
    };
  }

  componentDidMount() {
    this.getToken();
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
