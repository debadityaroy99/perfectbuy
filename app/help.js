import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import LottieView from 'lottie-react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icon library

const Takeaway = () => {
  const [phoneNumber, setPhoneNumber] = useState('+91 878 780 4490'); // Predefined phone number
  const [location, setLocation] = useState('');
  const [selectedIssue, setSelectedIssue] = useState('');
  const router = useRouter();

  const callExecutive = () => {
    const phoneUrl = `tel:${phoneNumber}`;
    Linking.openURL(phoneUrl);
  };

  const handleLocationChange = (text) => {
    setLocation(text);
  };

  const handleBackPress = () => {
    router.back(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}> 
      <LottieView
        loop
        autoPlay
        style={{
          width: 200,
          height: 200,
          top: -50,
          backgroundColor: '#f8f8f8',
        }}
        source={require('../assets/help.json')}
      />

      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.greetingText}>Hi Debaditya,</Text>
          <Text style={styles.header}>How can we help?</Text>
        </View>
      </View>

      {/* Issues Dropdown */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select an Issue</Text>
        <Picker
          selectedValue={selectedIssue}
          onValueChange={(itemValue) => setSelectedIssue(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select an issue..." value="" />       
          <Picker.Item label="Store Navigation" value="store_navigation" />
          <Picker.Item label="Product Details" value="product_availability" />
          <Picker.Item label="Lost and Found" value="lost_found" />
          <Picker.Item label="Billing Issue" value="billing_issue" />
        </Picker>
      </View>   

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

      {/* Location Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Your Location in Mall</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={handleLocationChange}
          placeholder="E.g., In Aisle 5"
        />
      </View>

      {/* Confirm Takeaway Button */}
      <TouchableOpacity style={styles.button} onPress={() => { router.push('/Cart/otp'); }}>
        <Text style={styles.buttonText}>Request Help</Text>
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
    top:-300
  },
  headerTextContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    alignSelf: 'flex-start',
    top: -60,
    left:-14
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    top: -60,
    left:-14
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    top: -40,
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
  picker: {
    width: '100%',
    height: 50,
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
    marginVertical: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
  },
  finalizeButton: {
    backgroundColor: '#28a745',
  },
});

export default Takeaway;
