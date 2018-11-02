import React from 'react';
import { Text, View, Button } from 'react-native';

export default class DetailsScreen extends React.Component {
    static navigationOptions = {
        header: null,
      };
      
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Working!</Text>
        </View>
      );
    }
  }