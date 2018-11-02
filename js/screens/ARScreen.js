import React from 'react';
import { Text, View,StyleSheet,TouchableHighlight } from 'react-native';
import { ViroARSceneNavigator} from 'react-viro';
var AR_NAVIGATOR_TYPE = "AR";
var defaultNavigatorType = "UNSET"
var sharedProps = {apiKey:"E3229309-156A-4591-A7A2-73899A66E4A2"}
var InitialARScene = require('../HelloWorldSceneAR')


export default class ARScreen extends React.Component {
    static navigationOptions = {
        header: null,
      };
      
    constructor() {
        super();
    
        this.state = {
          navigatorType : defaultNavigatorType,
          sharedProps : sharedProps
        }
        this._getARNavigator = this._getARNavigator.bind(this);
        this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
        this._exitViro = this._exitViro.bind(this);
      }

    render() {
        if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
            return this._getARNavigator()
        }
      return (
        <View style={localStyles.outer} >
        <View style={localStyles.inner} >
          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'} >
            <Text style={localStyles.buttonText}>Find Friend</Text>
          </TouchableHighlight>
        </View>
      </View>
      );
    }
    _getARNavigator() {
        return (
          <ViroARSceneNavigator {...this.state.sharedProps}
            initialScene={{scene: InitialARScene}} />
        );
      }

    _getExperienceButtonOnPress(navigatorType) {
        return () => {
          this.setState({
            navigatorType : navigatorType
          })
        }
      }

      _exitViro() {
        this.setState({
          navigatorType : UNSET
        })
      }

  }

  var localStyles = StyleSheet.create({
    viroContainer :{
      flex : 1,
      backgroundColor: "black",
    },
    outer : {
      flex : 1,
      flexDirection: 'row',
      alignItems:'center',
      backgroundColor: "#1a2327",
    },
    inner: {
      flex : 1,
      flexDirection: 'column',
      alignItems:'center',
      backgroundColor: "#1a2327",
    },
    titleText: {
      paddingTop: 30,
      paddingBottom: 20,
      color:'#fff',
      textAlign:'center',
      fontSize : 25
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
    },
    exitButton : {
      height: 50,
      width: 100,
      paddingTop:10,
      paddingBottom:10,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor:'#68a0cf',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    }
  });

  module.exports = ARScreen