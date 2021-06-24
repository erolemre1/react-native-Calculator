
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from "react-native";
import Header  from  "./src/components/header";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state= { 
      input1: "",
      input2: "",
      result: ""
    }
    this.sum= this.sum.bind(this);    
    this.deduct= this.deduct.bind(this);    
    this.mult= this.mult.bind(this);      
    this.div= this.div.bind(this);    
  }

sum() {
  const number1= parseFloat(this.state.input1);
  const number2= parseFloat(this.state.input2);
  const result= number1 + number2;
  this.setState({
    result: result  
  })
}
deduct() {
  const number1= parseFloat(this.state.input1);
  const number2= parseFloat(this.state.input2);
  const result= number1 - number2;
  this.setState({
    result: result  
  })
}
mult() {
  const number1= parseFloat(this.state.input1);
  const number2= parseFloat(this.state.input2);
  const result= number1 * number2;
  this.setState({
    result: result  
  })
}
div() {
 const number1= parseInt(this.state.input1);
 const number2= parseInt(this.state.input2);
 const result= number1 / number2;
 this.setState({
   result: result  
 })
}

 

  render () {
    return (
        <View style={styles.container}>
        <Header headerText = "Basit Hesap Makinesi"/>
         
          <View style={styles.contentWrapper}>
           <TextInput style= {styles.input}
            placeholder = "ilk sayı"
            onChangeText={(text) => {
              this.setState({
                input1: text
              })

            }}
            value = {this.state.input1}
            />
            
            <TextInput style= {styles.input}
            placeholder = "ikinci sayı"
            onChangeText={(text) => {
              this.setState({
                input2: text
              })

            }}
            value = {this.state.input2}
            />
            <View style = {styles.buttonWrapper}>
            <Button  onPress={this.sum}
              color= "seagreen"
              title = "+"
              
              
              />
           <Button onPress={this.deduct}
              color="seagreen"
              title = "-"
              fontSize
            
              />
           <Button onPress={this.mult}
              color="seagreen"
              title = "*"
              />
          <Button onPress={this.div}
              color="seagreen"
              title = "/ "
              />
            </View>

<Text style={styles.sampleText}> Sonuç:{this.state.result }</Text> 
            </View> 

            
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
flex: 1,
fontWeight:"bold",
flexDirection: "column",



  },
  contentWrapper: {
    padding: 20,

    justifyContent: "center",
    
  }, 
  buttonWrapper:{
 display:"flex",
 flexDirection:"row",
justifyContent:"center",
margin:10

     },
  input: {
    height: 70,
    fontSize:30,
 
  
  },
  sampleText:{
    height:  70,
    fontSize: 50,
  
  },

  
});
