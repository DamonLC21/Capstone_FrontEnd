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
    this.state = { text: 'Session Key' };
  }

  render() {
    return (
        <View style={localStyles.container}>
            <TextInput
                style={{width: 300, height: 40, borderColor: 'gray', borderWidth: 1, color:"#fff"}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
             <Button
            title="Locate"
            onPress={() => this.props.navigation.navigate('Finder')}
            color="#1ecfc9"
          />
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