import { Text, StyleSheet, View, FlatList } from "react-native";
import React, { Component } from "react";
import UserListItem from "./ListItems/UserListItem";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import UIButton from "../../components/UIButton";
import LoaderView from "../../components/LoaderView";
import UITextField from "../../components/UITextField";

export default class NewChatView extends Component {
  constructor() {
    super();
    this.docs = firestore().collection("Users");
    this.state = {
      isLoading: false,
      users: [],
      name: "",
    };
  }

  componentDidMount() {
    this.unsubscribe = this.docs.onSnapshot(this.fetchUsers);
  }

  fetchUsers = (querySnapshot) => {
    this.setState({ isLoading: true });
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

  onTabBtnCreateNow() {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <LoaderView loading={this.state.isLoading} />
        <UITextField
          placeholder="Name"
          onChangeText={(value) => {
            this.setState({ name: value });
          }}
        />
        <Text style={{ paddingHorizontal: 16 }}>Select Members</Text>
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
          title="Create Now"
          onTapBtn={
            this.onTabBtnCreateNow
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
  },
});
