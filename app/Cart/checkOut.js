import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import {useRouter} from 'expo-router';
const DeliveryOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const router=useRouter()
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How would you like to receive your order?</Text>

      <TouchableOpacity
        style={[
          styles.optionCard,
          selectedOption === 'delivery' && styles.selectedOption,
        ]}
        onPress={() => {router.push('/Cart/delivered')}}
      >
<LottieView
        loop
        autoPlay
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'white',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../assets/Animation - 1723437629831.json')}
      />

        <Text style={styles.optionText}>Get it Delivered</Text>
        <Text style={styles.optionDescription}>
          Your order will be delivered to your doorstep.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.optionCard,
          selectedOption === 'takeaway' && styles.selectedOption,
        ]}
        onPress={() => router.push('/Cart/takeAway')}
      >
        <Image
          source={{ uri: 'https://example.com/takeaway-icon.png' }}
          style={styles.icon}
        />
        <LottieView
        loop
        autoPlay
        style={{
          width: 200,
          height: 160,
          backgroundColor:'white',
          top:-50
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../assets/shopping cart.json')}
        
      />

        <Text style={styles.optionText}>Takeaway</Text>
        <Text style={styles.optionDescription}>
          An executive will assist you with the payment and takeaway
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => {
          // Handle continue action based on selected option
        }}
        disabled={!selectedOption}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    top:30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  optionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
    top:-16
  },
  selectedOption: {
    borderColor: '#007bff',
    borderWidth: 2,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  optionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    bottom:15
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DeliveryOptions;
