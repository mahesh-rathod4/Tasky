import { Text, StyleSheet, View, ScrollView } from "react-native";
import React, { Component } from "react";
import ProfileImageView from "./components/ProfileImageView";
import UserDetail from "./components/UserDetail";

export default class ProfileView extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <ProfileImageView
            onTapProfile={() => {}}
            onTapAddProfile={() => {}}
          />
          <View>
            <UserDetail
              heading={"Email"}
              email={"mahesh@gmail.com"}
              isShow={false}
            />
            <UserDetail
              heading={"Mobile No"}
              email={"+918141691419"}
              isShow={true}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  profileView: {
    alignItems: "center",
    flex: 1,
    margin: 50,
  },
  tinyLogo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});
