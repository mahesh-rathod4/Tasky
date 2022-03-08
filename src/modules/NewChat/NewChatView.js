import { Text, StyleSheet, View, FlatList } from "react-native";
import React, { Component } from "react";
import UserListItem from "./ListItems/UserListItem";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import UIButton from "../../components/UIButton";

export default class NewChatView extends Component {
  constructor() {
    super();
    this.docs = firestore().collection("Users");
    this.state = {
      isLoading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.docs.onSnapshot(this.fetchUsers);
  }

  fetchUsers = (querySnapshot) => {
    this.setState({ isLoading: false });
    const users = [];
    const cID = auth().currentUser.uid;
    querySnapshot.forEach((userDoc) => {
      const { email, isEnabledPush } = userDoc.data();
      if (cID != userDoc.id) {
        users.push({
          email: email,
          isEnabledPush: isEnabledPush,
          isSelect: false,
        });
      }
    });
    this.setState({ users: users, isLoading: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.users}
          renderItem={({ item, index }) => (
            <UserListItem
              email={item.email}
              isSelected={item.isSelect}
              onTapItem={() => {
                const constTempUser = this.state.users;
                constTempUser[index].isSelect = !constTempUser[index].isSelect;
                this.setState({ users: constTempUser });
              }}
            />
          )}
        />
        <UIButton
          isEnabled="true"
          title="Create Group"
          onTapBtn={() => {
            
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:40,
  },
});
