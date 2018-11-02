import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../res/emoji_smile/Colored.png')}
        style={styles.welcomeImage}
      />
    );
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerStyle: {
      backgroundColor: '#1a2327',
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#1a2327"}}>
          {/* other code from before here */}
          <Button
            title="Start Session"
            onPress={() => this.props.navigation.navigate('Starts')}
            color="#fff"
          />
          <Button
            title="Join Session"
            onPress={() => this.props.navigation.navigate('Joins')}
            color="#fff"
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
