import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import UserListItem from "./ListItems/UserListItem";
import firestore from "@react-native-firebase/firestore";
// import {loadUsers} from '../NewChat/action';


 export default class NewChatView extends Component {


  constructor() {
    super();
    this.docs = firestore().collection("Users")
    this.state = {
      isLoading: false,
      users :[]
    }
  }


  componentDidMount() {
    this.unsubscribe = this.docs.onSnapshot(this.fetchUsers);
  }

  fetchUsers =  (querySnapshot) => {
    const users = [];
    querySnapshot.forEach((userDoc) => {
      const {email,isEnabledPush} = userDoc.data();
      users.push({'email':email,'isEnabledPush':isEnabledPush,'isSelect':false});
    })
    console.log(users)
  }


   async getUser() {
    // await firestore()
    //   .collection("Users")
    //   .get()
    //   .then(snapshot => {
    //     snapshot
    //       .docs
    //       .forEach(doc => {
    //         console.log(JSON.parse(doc._document.data.toString()))
    //       });
    //   });
  }

  render() {
    return (
      <View>
        <Text>d</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

