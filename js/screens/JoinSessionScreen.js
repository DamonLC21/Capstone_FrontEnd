import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Button, TouchableHighlight, StyleSheet, Text } from 'react-native';

export default class JoinSession extends Component {
    static navigationOptions = {
        title:'Group Sessions',
        headerStyle: {
          backgroundColor: '#1ecfc9',
          borderBottomWidth: 0,
        },
        headerTintColor: '#1a2327',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    
  constructor(props) {
    super(props);
    this.state = { 
        text: '', 
        location: null 
    };

        this._postLocation2 = this._postLocation2.bind(this)
        this.newCoordinates = this.newCoordinates.bind(this)
  }

  render() {
    return (
        <View style={localStyles.container}>
            <TextInput
                style={{width: 300, height: 40, borderColor: 'gray', borderWidth: 1, color:"#fff"}}
                onChangeText={(text) => this.setState({text})}
                placeholder="Session Key"
                placeholderTextColor="white"
            />
             <Button
            title="Locate"
            onPress={this.newCoordinates}
            color="#1ecfc9"
          />
        </View>
    );
  }

    newCoordinates = () => {
        return new Promise((resolve,reject) => {
            navigator.geolocation.getCurrentPosition(
             position => {
                const location = position;
                this.setState({ location });
                resolve(location)
            },
            error => {
                reject(error)
                Alert.alert(error.message)
            },
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            ) 
        })
        // .then(this._postLocation2)
        .then(result => this._postLocation2(result))
        .then(response => this.props.navigation.navigate('Finder'))
  };
  

_postLocation2 = (location) => {
        const id = this.state.text
        const gps =  location
        return fetch('https://seatscapstone.herokuapp.com/sessions/' + id , {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            location2: gps
        })
    })
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