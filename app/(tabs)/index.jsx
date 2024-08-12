import * as React from 'react';
import {LinearGradient} from 'expo-linear-gradient'
import { View, StyleSheet, Image, Text} from 'react-native';
export default function App() {
  const image = require('../../assets/images/Figueirense.png')
  return (
    <View style={styles.container}>
  <LinearGradient
  colors={['#ffffff', 'transparent']}
  style={styles.background}
  />
  <Text>FIGUEIRA APP</Text>
    <Image
    style={styles.image}
    source={image}
    />
    
    </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
    
},
image: {
  width:210,
  height:250
},
background:{
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  height:300,
}

});
