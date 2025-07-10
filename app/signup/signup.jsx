import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS } from '../../constants';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // TODO: hook up to auth logic
    router.push('/home');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* TOP BLUE SECTION */}
      <View style={styles.headerSection}>
        <Ionicons name="shield-checkmark" size={32} color="#fff" style={{ alignSelf: 'center' }} />
        <Text style={styles.headerTitle}>Sign in to your{Platform.OS === 'ios' ? '\n' : ' '}Account</Text>
        <Text style={styles.headerSubtitle}>Enter your email and password to log in</Text>
      </View>

      {/* FORM CARD */}
      <View style={styles.formCard}>
        {/* Google Sign-In Button */}
        <TouchableOpacity style={styles.googleBtn} activeOpacity={0.8}>
          <AntDesign name="google" size={20} color="#EA4335" style={{ marginRight: 8 }} />
          <Text style={styles.googleBtnText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerWrapper}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or login with</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Email Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={[styles.inputWrapper, { flexDirection: 'row', alignItems: 'center' }]}>
          <TextInput
            style={[styles.textInput, { flex: 1 }]}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(prev => !prev)} style={{ paddingHorizontal: 8 }}>
            <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={20} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Remember me & Forgot Password */}
        <View style={styles.rowBetween}>
          <TouchableOpacity
            onPress={() => setRememberMe(prev => !prev)}
            style={styles.checkboxWrapper}
            activeOpacity={0.8}
          >
            {rememberMe && <View style={styles.checkboxTick} />}
          </TouchableOpacity>
          <Text style={styles.rememberMeText}>Remember me</Text>
          <TouchableOpacity onPress={() => router.push('/forgot')} style={{ marginLeft: 'auto' }}>
            <Text style={styles.forgotText}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>

        {/* Log In Button */}
        <TouchableOpacity style={styles.loginBtn} activeOpacity={0.8} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>Log In</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <Text style={{ color: '#777' }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/signup')}> {/* Adjust route if needed */}
            <Text style={{ color: '#0071ce', fontWeight: 'bold' }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  headerSection: {
    backgroundColor: '#0071ce',
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 12,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e0e0e0',
    textAlign: 'center',
    marginTop: 6,
  },
  formCard: {
    backgroundColor: '#fff',
    marginTop: -40,
    marginHorizontal: 16,
    padding: 24,
    borderRadius: 16,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 4,
  },
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  googleBtnText: {
    fontSize: 16,
    color: '#111',
    fontWeight: '500',
  },
  dividerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    marginHorizontal: 8,
    color: '#777',
    fontSize: 14,
  },
  inputWrapper: {
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
    height: 50,
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 16,
    color: '#111',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkboxWrapper: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkboxTick: {
    width: 12,
    height: 12,
    backgroundColor: '#0071ce',
    borderRadius: 2,
  },
  rememberMeText: {
    color: '#555',
    fontSize: 14,
  },
  forgotText: {
    color: '#0071ce',
    fontSize: 14,
  },
  loginBtn: {
    backgroundColor: '#0071ce',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});