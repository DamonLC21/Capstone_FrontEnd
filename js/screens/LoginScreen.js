import React from 'react';
import { Text, View, Button, Image, TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';
import AppNavigator from '../navigation/AppNavigator';

export default class LoginScreen extends React.Component {
    constructor(){
        super()
        this.state ={
            login: false
        }
        this.getRealApp = this.getRealApp.bind(this)
        this.getApp = this.getApp.bind(this)
        this.showPage = this.showPage.bind(this);
    }
 
    render() {
        if (this.state.login == true) {
            return this.getRealApp();
        }
        else if(this.state.login == false){
            return this.getApp();
        }
}

    getApp(){
       {
            return(
            <View>
            <Image
           source={require('../res/emoji_smile/party.jpg')}
           style={localStyles.backgroundImage}
           />
           <View style={localStyles.container}>
               <Image
               source={require('../res/emoji_smile/logowhite.png')}
               style={{width:200,height:200,resizeMode:'contain',marginTop:30, marginBottom: -50}}
               />
               <TouchableHighlight style={localStyles.buttons} 
                   underlayColor={'#68a0ff'}
                   onPress={() => this.showPage()}>
               <Text style={localStyles.buttonText}>Login</Text>
               </TouchableHighlight>
           </View>
        </View>
            )
        }
    }

    getRealApp(){
        return (
            <AppNavigator />
        )
    }

    showPage(){
          this.setState({
              login:true
            })
    }
  }


  var localStyles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        marginTop:120
    },
    backgroundImage: {
        resizeMode: Image.resizeMode.contain,
        position: 'absolute'
      },
    buttonText: {
      color:'#fff',
      textAlign:'center',
      fontSize : 20
    },
    buttons : {
      height: 60,
      width: 150,
      paddingTop:17,
      paddingBottom:10,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor:'#1ecfc9',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    }
  });

  