import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Color } from "../../../utils/Colors";


export default class UserListItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.UserName}>
            <Text style={{color: Color.primary,fontSize:16,fontWeight: "bold"}}>MR</Text>
        </View>
        <View style = {styles.names}>
        <Text style ={{color:Color.title}}>
                Mahesh Rathod
            </Text>
            <Text style ={{color:Color.subtitle}}>
                Hey there! I am using Tasky.
            </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        height:60,
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
    },
    names:{
        justifyContent: "flex-start",
        marginHorizontal: 12,
    },
    UserName:{
        height:46,
        width:46,
        borderRadius:23,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:Color.primaryLight,
    }
})