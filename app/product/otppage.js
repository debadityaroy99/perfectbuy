import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
const OTPPage = () => {
  return (
    <View style={styles.container}>
        <LottieView
                    loop
                    autoPlay
                    style={{
                    width: 300,
                    height: 250,
                    top:-100,
                    backgroundColor: 'transparent',
                    }}
                    source={require('../../assets/otp.json')}
                />
                   <View style={{top:-64}}>
        <Text style={styles.title}>Enter Transaction OTP</Text>
                 
      {/* OTP Boxes */}
      <View style={styles.otpContainer}>
        <TextInput style={styles.otpBox} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.otpBox} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.otpBox} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.otpBox} maxLength={1} keyboardType="numeric" />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {/* Locate Customer and Call Customer Buttons */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.actionButtonLeft}>
          <Text style={styles.actionButtonText}>Locate Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButtonRight}>
          <Text style={styles.actionButtonText}>Call Customer</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default OTPPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 36,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf:'center'
},
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  otpBox: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
    fontSize: 24,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  submitButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  actionButtonsContainer: {
    top:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButtonLeft: {
    flex: 1,
    backgroundColor: '#333',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  actionButtonRight: {
    flex: 1,
    backgroundColor: '#333',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 10,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
