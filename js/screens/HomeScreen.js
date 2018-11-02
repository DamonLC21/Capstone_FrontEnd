import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import {YellowBox} from 'react-native';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../res/emoji_smile/logowhite.png')}
        style={styles.welcomeImage}
      />
    );
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerStyle: {
      backgroundColor: '#1ecfc9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


  render() {
    YellowBox.ignoreWarnings(['Warning: ...']);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {/* other code from before here */}
          <Button
            title="Start Session"
            onPress={() => this.props.navigation.navigate('Starts')}
          />
          <Button
            title="Join Session"
            onPress={() => this.props.navigation.navigate('Joins')}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeImage: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
    marginTop: -4,
  }
})
