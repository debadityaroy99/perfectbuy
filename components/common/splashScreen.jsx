import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Walmartify</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,                       // Use the entire screen
    justifyContent: 'center',      // Center vertically
    alignItems: 'center',          // Center horizontally
    backgroundColor: '#f0f0f0',    // Optional: Set a background color
  },
  text: {
    fontSize: 24,                  // Set the font size
    fontWeight: 'bold',            // Set the font weight
    color: '#333',                 // Set the text color
  },
});

export default SplashScreen;
