
'use strict';

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroMaterials,
  ViroBox,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
  ViroAnimations,
} from 'react-viro';



var createReactClass = require('create-react-class');


const placeObject = (yourlocation, mylocation, isMiles,) =>{ 
      
  function toRad(x) {
      return x * Math.PI / 180;
    }
   
    var lon1 = yourlocation.lng;
    var lat1 = yourlocation.lat;
   
    var lon2 = mylocation.lng;
    var lat2 = mylocation.lat;
   
    var R = 6371; // km
   
    var x1 = lat2 - lat1;
    var dLat = toRad(x1);
    var x2 = lon2 - lon1;
    var dLon = toRad(x2)
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
  
   
    if(isMiles) d /= 1.60934;
    x1 = x1 * 1609.344
    x2 = x2 * 1609.344 
    d = d * 1609.344
   
    return [x1, x2, d]
}

var HelloWorldSceneAR = createReactClass({
  getInitialState() {
    return {
      text : "Initializing AR..."
    };
  },

  


  render: function() {
    
  
console.log(placeObject({lat:39.75750899141228,lng:-105.00692868825644},{lat:39.75747507655993,lng:-105.00690604330251},true))


    

    return (
      <ViroARScene onTrackingUpdated={()=>{this.setState({text : "Damon has entered augmented space and time"})}}>
        <ViroText text={this.state.text} scale={[.1, .1, .1]} height={1} width={12} position={[0, .5, -1]} style={styles.helloWorldTextStyle} />
        <ViroAmbientLight color={"#aaaaaa"} />
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0,-1,-.2]} position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <ViroARPlaneSelector />
          <Viro3DObject
            source={require('./res/emoji_smile/arrow.obj')}
            resources={[]}
            position={[0, 0, -2]}
            scale={[.1, .1, .1]}
            type="OBJ"
            dragType="FixedDistance" onDrag={()=>{}}
          />
      </ViroARScene>
    );
  },

});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 50,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;   