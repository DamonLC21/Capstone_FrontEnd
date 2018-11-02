import React from 'react';
import { Text, View, Button } from 'react-native';


export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        header: null,
      };
      
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {/* other code from before here */}
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      );
    }
  }