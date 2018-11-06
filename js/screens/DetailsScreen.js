import React from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';

export default class DetailsScreen extends React.Component {
    static navigationOptions = {
        title:'Delete Session',
        headerStyle: {
          backgroundColor: '#1ecfc9',
          borderBottomWidth: 0,
        },
        headerTintColor: '#1a2327',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
    }
      
    render() {
      return (
        <View style={localStyles.container}>
            <TextInput
                style={{width: 300, height: 40, borderColor: 'gray', borderWidth: 1, color:"#fff"}}
                onChangeText={(text) => this.setState({text})}
                placeholder="Enter Session Name"
                placeholderTextColor="white"
            />
            <Button
                title="End Session"
                onPress={this.endSesh}
                color="#1ecfc9"
            />
        </View>
      );
    }

    endSesh = () => {
        const sesh = this.state.text
        fetch('https://seatscapstone.herokuapp.com/sessions/' + sesh, {
            method: "DELETE" 
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