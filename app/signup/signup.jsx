import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS } from '../../constants';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from './customInput';
import Button from './button';

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Decorative Shapes */}
      <View style={styles.blueCircle} />
      <View style={styles.blueBlobRight} />
      <View style={styles.lightBlobBottom} />

      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.subtitleWrapper}>
          <Text style={styles.subtitle}>Good to see you back!</Text>
          {/* <Ionicons name="heart" size={14} color="#000" style={{ marginLeft: 4 }} /> */}
        </View>

        <CustomInput
          placeholder={'Email'}
          value={email}
          setValue={setEmail}
          secureTextEntry={false}
        />

        <Button text={'Next'} bgColor={'#0071ce'} fgColor={'white'} />

        <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 12 }}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  blueCircle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 260,
    height: 260,
    backgroundColor: '#0071ce',
    borderBottomRightRadius: 260,
  },
  blueBlobRight: {
    position: 'absolute',
    top: 160,
    right: -40,
    width: 120,
    height: 160,
    backgroundColor: '#0071ce',
    borderRadius: 80,
    transform: [{ rotate: '30deg' }],
  },
  lightBlobBottom: {
    position: 'absolute',
    bottom: -120,
    right: -60,
    width: 380,
    height: 380,
    backgroundColor: '#eef3ff',
    borderRadius: 190,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 90,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#111',
  },
  subtitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  cancelText: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
});