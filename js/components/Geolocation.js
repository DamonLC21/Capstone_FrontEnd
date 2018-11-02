import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from "react-native";

export default class App extends Component {
  state = {
    location: null
  };

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttons} underlayColor={'#68a0ff'} onPress={this.findCoordinates}>
          <Text style={styles.buttonText}>Share Location</Text>
        </TouchableOpacity>
        <Text>Location: {this.state.location}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10
    },
    instructions: {
      textAlign: "center",
      color: "#333333",
      marginBottom: 5
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