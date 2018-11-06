import React from 'react';
import { Text,TextInput, View, Button, Image, TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';


export default class SignUpScreen extends React.Component {
    static navigationOptions = {
        title: 'Sign Up',
        headerStyle: {
            backgroundColor: '#1a2327',
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      };
    constructor(props) {
        super(props);
        this.state = { 
            firstName: '',
            lastName: '',
            userName: '',
            passWord: '',
            email: ''
        };
        this._postUser = this._postUser.bind(this);
    }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#1a2327" }}>
            <TextInput
                style={{width: 300, height: 40, borderColor: '#fff', borderWidth: 1, borderRadius:50,textAlign: 'center', color:'#fff',marginTop: 10}}
                onChangeText={(firstName) => this.setState({firstName})}
                placeholder="First Name"
                placeholderTextColor="white"
                keyboardAppearance="dark"
            />
            <TextInput
                style={{width: 300, height: 40, borderColor: '#fff', borderWidth: 1, borderRadius:50,textAlign: 'center', color:'#fff',marginTop: 10}}
                onChangeText={(lastName) => this.setState({lastName})}
                placeholder="Last Name"
                placeholderTextColor="white"
                keyboardAppearance="dark"
            />
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
            />
            <TextInput
                style={{width: 300, height: 40, borderColor: '#fff', borderWidth: 1, borderRadius:50,textAlign: 'center', color:'#fff', marginTop: 10}}
                onChangeText={(email) => this.setState({email})}
                placeholder="youremail@provider.com"
                placeholderTextColor="white"
                keyboardType='email-address'
                keyboardAppearance="dark"
            />
            <TouchableHighlight style={localStyles.buttons} 
                   underlayColor={'#68a0ff'}
                   onPress={this._postUser}>
               <Text style={localStyles.buttonText}>Sign Up</Text>
            </TouchableHighlight>
        </View>
      );
    }

    _postUser = () => {
        return fetch('https://seatscapstone.herokuapp.com/users', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            passWord: this.state.passWord,
            email: this.state.email
        })
        }).then(response => this.props.navigation.navigate('LoginForm'))
    };
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

  