import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
const PasswordScreen = () => {
  const router = useRouter();
  const [pin, setPin] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (value, index) => {
    if (value.length > 1) value = value.slice(-1); // keep last char
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const code = pin.join('');
      router.push('/loginSuccess');
    
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Decorative blue shape */}
      <View style={styles.topShape} />

      {/* Avatar */}
      
        <LottieView
                loop
                autoPlay
                style={{
                width: 250,
                height: 250,
                top:-10
                }}
                source={require('../../walmartify/assets/male.json')}
            />
 

      {/* Greeting */}
      <View style={{marginTop:-20}}>
        <Text style={styles.greeting}>Hello, Tushar!!</Text>
        <Text style={styles.subtitle}>Type your password</Text>

        {/* PIN inputs */}
        <View style={styles.pinContainer}>
            {pin.map((digit, idx) => (
            <TextInput
                key={idx}
                ref={(ref) => (inputs.current[idx] = ref)}
                value={digit}
                onChangeText={(val) => handleChange(val, idx)}
                keyboardType="number-pad"
                secureTextEntry
                maxLength={1}
                style={styles.pinInput}
            />
            ))}
        </View>
      </View>

      {/* Submit arrow */}
      <TouchableOpacity style={styles.arrowBtn} onPress={handleSubmit}>
        <Ionicons name="arrow-forward" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Not you link */}
      <TouchableOpacity style={{ marginTop: 40 }}>
        <Text style={styles.notYou}>Not you?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  topShape: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 220,
    backgroundColor: '#0071ce',
    opacity:0.9,
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 80,
  },
  avatarWrapper: {
    marginTop: -40,
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 60,
    padding: 4,
    backgroundColor: '#f7f7f7',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  greeting: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: 40,
  },
  pinInput: {
    width: 55,
    height: 55,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
    fontSize: 24,
  },
  arrowBtn: {
    marginTop: 40,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0071ce',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notYou: {
    color: '#777',
    fontSize: 14,
  },
}); 