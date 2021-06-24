import React, {Component} from "react";
import {Text, StyleSheet, View,} from "react-native";



export default class header extends Component{
    render(){
        return(
            <View style={styles.header}>
<Text style={styles.headerText}>{this.props.headerText} </Text>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    header: { 
   
        height: 100,   
        paddingTop: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "skyblue"
      },
      headerText: {
        fontSize: 30,
        textAlign:"center"
      }
    });
    