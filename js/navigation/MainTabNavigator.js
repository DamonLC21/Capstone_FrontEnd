import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import DetailsScreen from '../screens/DetailsScreen'
import ARScreen from '../screens/ARScreen'
import JoinSessionScreen from '../screens/JoinSessionScreen'
import StartSessionScreen from '../screens/StartSessionScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LoginScreen from '../screens/LoginScreen';

  
  const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
    Joins: JoinSessionScreen,
    Starts: StartSessionScreen,
  });
  
  const ProfileStack = createStackNavigator({
    Profile: ProfileScreen,
    Details: DetailsScreen,
  });
  
  const ARStack = createStackNavigator({
      AR: ARScreen,
  });

  export default createBottomTabNavigator(
    {
      Home: HomeStack,
      Profile: ProfileStack,
      Finder: ARStack,
    },{
        tabBarOptions : {
          activeTintColor: '#fff',
          inactiveTintColor: '#000',
          style: {
            backgroundColor: '#1ecfc9',
          },
        }
    }
  );