import React, { Component } from 'react';
import { AppRegistry, Alert, TextInput, View, Button, TouchableOpacity, TouchableHighlight, StyleSheet, Text } from 'react-native';

export default class StartSession extends Component {
    static navigationOptions = {
        title: 'Start Session',
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
    this.state = { text: '',
        location: null,
        sessionName: ''
    };
    this._getKey = this._getKey.bind(this);
    this._postLocation = this._postLocation.bind(this);
  }

  render() {
    if (this.state.location == null ) {
    return (
        <View style={localStyles.container}>
        <TouchableOpacity style={localStyles.buttons} underlayColor={'#68a0ff'} onPress={this.findCoordinates}>
          <Text style={localStyles.buttonText}>Start Session</Text>
        </TouchableOpacity>
        </View>
        );
    }
    else if(this.state.location !== null){
        return this._getKey()
    }
}

findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = position;
        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  };
  

_postLocation = () => {
        const gps =  this.state.location
        const sesh = this.state.sessionName
        return fetch('https://seatscapstone.herokuapp.com/sessions', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sessionName: sesh,
            location1: gps,
        })
    })
    .then(data => { 
        const stuff = JSON.parse(data._bodyInit);
        this.setState({text: stuff.session._id})
    }
    )
}

_getKey() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#1a2327" }}>
        <Text style={{textAlign: 'center', marginBottom: 10, color:"#fff"}}>Your location is being shared. Name Session and press "GET CODE" below, copy, and send to friends to locate you!</Text>
            <TextInput
                style={{width: 300, height: 40, borderColor: '#fff', borderWidth: 1, borderRadius:50,textAlign: 'center', color:'#fff'}}
                placeholder='Enter Session Name'
                placeholderTextColor='white'
                onChangeText={(sessionName) => this.setState({sessionName})}
            />
            <TextInput
                style={{width: 300, height: 40, borderColor: '#fff', borderWidth: 1, borderRadius:50,textAlign: 'center', color:'#fff'}}
                value={this.state.text}
            />
            <TouchableHighlight style={localStyles.buttons} underlayColor={'#68a0ff'} onPress={this._postLocation} >
                <Text style={localStyles.buttonText}>Get Code</Text>
            </TouchableHighlight>
        </View>
    );
  }
}


var localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1a2327"
    },
    buttonText: {
      color:'#1ecfc9',
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
      backgroundColor:'#1a2327',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    }
  });