import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";
import SplashScreen from "../components/common/splashScreen";
import Button from "./signup/button";
import { COLORS } from "../constants/theme";

const SignUp = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
  });

  return isShowSplash ? (
    <SplashScreen />
  ) : (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Top-left blue circle */}
      <View style={styles.blueCircle} />

      {/* Login form */}
      <View style={{ paddingHorizontal: 24, marginTop: 290 }}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Good to see you back!</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <Button text="Next" bgColor="#0066FF" fgColor="#fff" borderRadius={24}/>

        <TouchableOpacity style={{ alignSelf: "center", marginTop: 16 }}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>     
      </View>
      <View style={styles.grayCircle} />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  blueCircle: {
    position: "absolute",
    top: -80,
    left: -80,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "#0066FF",
  },
  grayCircle: {
    
    bottom: -90,
    right: -190,
    width:300,
    height:300,
    borderRadius: 250,
    backgroundColor: "#a6aba7",
    opacity: 0.5
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 19,
    color: "#555",
    marginTop: 8,
    marginBottom: 32,
  },
  input: {
    width: "100%",
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    marginBottom: 24,
    fontSize: 16,
  },
  cancelText: {
    fontSize: 14,
    color: "#666",
  },
});
