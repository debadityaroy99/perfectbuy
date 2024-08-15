import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useRouter } from 'expo-router';
const OTPPage = () => {
  const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000).toString(); // Generates a 4-digit OTP
  };

  const [otp, setOtp] = useState(generateOTP());

  const regenerateOTP = () => {
    setOtp(generateOTP());
  };
  const router=useRouter()

  return (
    <View style={styles.container}>
        <LottieView
                    loop
                    autoPlay
                    style={{
                    width: 300,
                    height: 250,
                    top:-80,
                    backgroundColor: '#f5f5f5',
                    }}
                    source={require('../../assets/otp.json')}
                />
      <Text style={styles.title}>Transaction OTP</Text>
      <View style={styles.otpContainer}>
       <TouchableOpacity onPress={()=>{router.push('/Cart/success')}}>
       <Text style={styles.otpText}>{otp}</Text>
       </TouchableOpacity>
      </View>

      <Text style={styles.instructionText}>
        Please show this OTP to the executive to complete your transaction
      </Text>
      <Text style={styles.instructionText2}>
        Executive on the way!
      </Text>
                
      <TouchableOpacity style={styles.regenerateButton} onPress={regenerateOTP}>
        <Text style={styles.buttonText}>Regenerate OTP</Text>
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    top:-20
  },
  otpContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    top:-20
  },
  otpText: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 5,
  },
  instructionText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    top:-20
  },
  instructionText2: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
    top:-20,
    fontWeight:'bold'
  },
  regenerateButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginBottom: 15,
  },
  completeTransactionButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OTPPage;
