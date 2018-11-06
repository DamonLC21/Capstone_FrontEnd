import React from 'react';
import { Text,TextInput, View, Button, Image, TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';
import AppNavigator from '../navigation/AppNavigator';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null,
      };

    constructor(){
        super()
        this.state ={
            login: false
        }
        this.notLoggedIn = this.notLoggedIn.bind(this)
        this.showPage = this.showPage.bind(this);
    }
 
    render() {
        if (this.state.login == true) {
            return this.getRealApp();
        }
        else if(this.state.login == false){
            return this.notLoggedIn();
        }
}

    notLoggedIn(){
       {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#1a2327" }}>
                    <TextInput
                        style={{width: 300, height: 40, borderColor: '#fff', borderWidth: 1, borderRadius:50,textAlign: 'center', color:'#fff',marginTop: 10}}
                        onChangeText={(userName) => this.setState({userName})}
                        placeholder="Username"
                        placeholderTextColor="white"
                        keyboardAppearance="dark"
                    />
                    <TextInput
                        style={{width: 300, height: 40, borderColor: '#fff', borderWidth: 1, borderRadius:50,textAlign: 'center', color:'#fff',marginTop: 10}}
                        onChangeText={(passWord) => this.setState({passWord})}
                        placeholder="Password"
                        placeholderTextColor="white"
                        keyboardAppearance="dark"
                        secureTextEntry={true}
                    />
                    <TouchableHighlight style={localStyles.buttons} 
                        underlayColor={'#68a0ff'}
                        onPress={this.showPage}
                    >
                        <Text style={localStyles.buttonText}>Login</Text>
                    </TouchableHighlight>
        </View>
      );
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

  