import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Button, TouchableHighlight, StyleSheet, Text } from 'react-native';

export default class StartSession extends Component {
    static navigationOptions = {
        title: 'Start Session'
      };
    
  constructor(props) {
    super(props);
    this.state = { text: 'blue' };
    this._getKey = this._getKey.bind(this);
    this._changeText = this._changeText.bind(this);
  }

  render() {
    if (this.state.text == 'FJfj343NERD4909SH') {
        return this._getKey()
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableHighlight style={localStyles.buttons} 
            underlayColor={'#68a0ff'} 
            onPress={this._changeText()}>
            <Text style={localStyles.buttonText}>Share Location</Text>
          </TouchableHighlight>
        </View>
    );
  }

_changeText() { 
    return () => {
        this.setState({text:'FJfj343NERD4909SH'})
    }
  }

_getKey() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{textAlign: 'center', marginBottom: 10}}>Your location is being shared. Copy this key and send to friends!</Text>
            <TextInput
            style={{width: 300, height: 40, borderColor: 'gray', borderWidth: 1}}
            value={this.state.text}
            />
            <TouchableHighlight style={localStyles.buttons} underlayColor={'#68a0ff'} >
                <Text style={localStyles.buttonText}>Copy</Text>
            </TouchableHighlight>
         </View>
    );
  }
}


var localStyles = StyleSheet.create({
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