import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { images } from '../../constants';
import { Image } from 'react-native';
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={images.logo} style={{width:386,height:386}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,                       // Use the entire screen
    justifyContent: 'center',      // Center vertically
    alignItems: 'center',          // Center horizontally
    backgroundColor: '#83bae7',      // Set a blue background
  },
  text: {
    fontSize: 24,                  // Set the font size
    fontWeight: 'bold',            // Set the font weight
    color: '#333',                 // Set the text color
  },
});
export default SplashScreen;
