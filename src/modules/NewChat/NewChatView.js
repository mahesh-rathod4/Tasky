import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import UserListItem from "./ListItems/UserListItem";
import firestore from "@react-native-firebase/firestore";
import {connect} from 'react-redux';
import {loadUsers} from '../NewChat/action';


 class NewChatView extends Component {
  componentDidMount() {
    loadUsers();
  }

  // async getUser() {
  //   const users = await firestore()
  //     .collection("Users")
  //     .get()
  //     const doc = users.docs.map(doc => doc.data());
  //   console.log(doc);
  // }

  render() {
    return (
      <View>
        <Text>d</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  data: state.getUserReducer.data,
  loading: state.getUserReducer.loading,
  error: state.getUserReducer.error,
});

const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(NewChatView);