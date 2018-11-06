import React from 'react';
import { Text, View, Button, Image} from 'react-native';


export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        header: null,
      };
      
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#1a2327" }}>
          <Image
                source={require('../res/emoji_smile/placeholder.png')}
                style={{width:150, height: 150}}
            />
          <Button
            title="End Active Session"
            onPress={() => this.props.navigation.navigate('Details')}
            color="#1ecfc9"
          />
        </View>
      );
    }
  }