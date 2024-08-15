import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import LottieView from 'lottie-react-native';
import { useRouter } from 'expo-router';
const Takeaway = () => {
  const [phoneNumber, setPhoneNumber] = useState('+91 878 780 4490'); // Predefined phone number
  const [location, setLocation] = useState('');
    const router=useRouter()
  const callExecutive = () => {
    const phoneUrl = `tel:${phoneNumber}`;
    Linking.openURL(phoneUrl);
  };

  const handleLocationChange = (text) => {
    setLocation(text);
  };

  return (
    <View style={styles.container}> 
            <LottieView
                    loop
                    autoPlay
                    style={{
                    width: 200,
                    height: 200,
                    top:-50,
                    backgroundColor: '#f8f8f8',
                    }}
                    // Find more Lottie files at https://lottiefiles.com/featured
                    source={require('../../assets/salesperson.json')}
                />

      {/* Header */}
      <Text style={styles.header}>Takeaway Service</Text>

      {/* Phone Number Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          editable={false} // Predefined phone number, not editable
        />
      </View>

      {/* Call Executive Button */}


      {/* Location Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Your Location in Mall</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={handleLocationChange}
          placeholder="E.g.,  In Aisle 5"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>{router.push('/Cart/otp')}}>
        <Text style={styles.buttonText}>Confirm Takeaway</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    top:-22
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  finalizeButton: {
    backgroundColor: '#28a745',
  },
});

export default Takeaway;
