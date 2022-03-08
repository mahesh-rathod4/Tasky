import { Text, StyleSheet, View, FlatList } from "react-native";
import React, { Component } from "react";
import UserListItem from "./ListItems/UserListItem";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import UIButton from "../../components/UIButton";
import LoaderView from "../../components/LoaderView";
import UITextField from "../../components/UITextField";
import GroupModel from "../../models/GroupModel";
import makeId from "../../utils/Utils";

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
      const { email, id } = userDoc.data();
      if (cID != userDoc.id) {
        users.push({
          email: email,
          id: id,
        });
      }
    });
    this.setState({ users: users, isLoading: false });
  };

  onTabBtnCreateNow() {
    if (this.state.name == "") {
      alert("Enter valid group name");
    } else {
      const selectedUsers = this.state.users
        .filter((user) => user.isSelect)
        .map((user) => user.id);
      if (selectedUsers.length < 0) {
        alert("At list select one user");
      } else {
        console.log(selectedUsers);
      }
      const groupCollection = firestore().collection("Group");
      const id = makeId(8);
      const group = new GroupModel(
        new Date(),
        auth().currentUser.uid,
        id,
        selectedUsers,
        this.state.name
      );
      groupCollection
        .doc(id)
        .set(group)
        .then(() => {
          const usersCollection = firestore().collection("Users");
          usersCollection
            .doc(auth().currentUser.uid)
            .update({
              groups: { id },
            })
            .then(() => {
              console.log("User updated!");
            });
          this.props.navigation.goBack();
        });
    }
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
          onTapBtn={() => {
            this.onTabBtnCreateNow();
          }}
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
