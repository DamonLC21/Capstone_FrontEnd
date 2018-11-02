import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Button, TouchableHighlight, StyleSheet, Text } from 'react-native';

export default class JoinSession extends Component {
    static navigationOptions = {
        title:'Group Sessions',
        headerStyle: {
          backgroundColor: '#79cab6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    
  constructor(props) {
    super(props);
    this.state = { text: 'Session Key' };
  }

  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                style={{width: 300, height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
             <Button
            title="Locate"
            onPress={() => this.props.navigation.navigate('Finder')}
          />
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
      backgroundColor:'#79cab6',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    }
  });