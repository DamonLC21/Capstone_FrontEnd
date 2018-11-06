import React from 'react';
import { Text,TextInput, View, Button, Image, TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';
import AppNavigator from '../navigation/AppNavigator';
import { createStackNavigator } from 'react-navigation';
import SignUpScreen from './SignUpScreen'
import LoginForm from './LoginForm'

class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null,
      };
    constructor(){
        super()
        this.state ={
            login: false
        }
        this.getApp = this.getApp.bind(this)
    }
 
    render() {
            return this.getApp();
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
                   onPress={() => this.props.navigation.navigate('LoginForm')}>
               <Text style={localStyles.buttonText}>Login</Text>
               </TouchableHighlight>
               <TouchableHighlight style={localStyles.buttons} 
                   underlayColor={'#68a0ff'}
                   onPress={() => this.props.navigation.navigate('SignUp')}>
               <Text style={localStyles.buttonText}>Sign Up</Text>
               </TouchableHighlight>
           </View>
        </View>
            )
        }
    }
  }

  const RootStack = createStackNavigator(
    {
      Login: LoginScreen,
      SignUp: SignUpScreen,
      LoginForm: LoginForm
    },
    {
      initialRouteName: 'Login',
    }
  );

  export default class App extends React.Component {
    render() {
      return <RootStack />;
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

  