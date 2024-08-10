import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { icons, SIZES } from '../constants';
import styles from '../components/home/welcome/welcome.style';
import { TextInput } from 'react-native';

const loginSuccess = () => {
  const router = useRouter();
  const [isloading, setIsLoading] = useState(false);
  const [showBox, setShowBox] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowBox(true);
    }, 2000);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -90 }}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerBackVisible: false,
        }}
      />

      <View
        style={{
          width: '100%',
          height: '50%', // Makes the image container cover half the screen height
          borderRadius: 45, // Rounded edges
          overflow: 'hidden', // Ensures the image respects the border radius
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '-100%',
        }}
      >
        <Image
          source={icons.background}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover', // Ensures the image covers the entire container
          }}
          blurRadius={3.5}
        />
      </View>

      <Text
        style={{
          marginTop: -49,
          fontSize: 67,
          fontWeight: 800,
          color: '#f25725',
          textAlign: 'center',
          textShadowOffset: { width: 4, height: 2 }, // Offset for shadow
          textShadowRadius: 5, // Blur radius for shadow
          textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color with transparency
        }}
      >
        Find Store
      </Text>

      <View style={{ marginTop: -10 }}>
        <View style={styles.searchContainer3}>
          <View style={styles.searchWrapper3}>
            <TextInput
              style={styles.searchInput3}
              placeholder='Where are you'
            />
          </View>
          <TouchableOpacity style={styles.searchBtn2} onPress={handleSearch}>
            {isloading ? (
              <ActivityIndicator size={'large'} color={'white'} />
            ) : (
              <Image
                source={icons.location}
                resizeMode='contain'
                style={styles.searchBtnImage}
              />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={{ color: '#f25725', marginTop: 3, fontWeight: 'bold', fontSize: 15, marginLeft: 240 }}>
            Find my location
          </Text>
        </TouchableOpacity>

        {showBox ? (
          <View>
            <Text style={{ fontSize: 24, fontWeight: '490' }}>
              Nearby stores
            </Text>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: SIZES.large,
                backgroundColor: "#fff9fd",
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 5,
                height: 160,
                width: 160,
                marginTop:10
              }}
              onPress={() => {
                router.push('/home');
              }}
            >
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: SIZES.large, // Ensures the image corners are rounded
                  resizeMode: 'cover', // Covers the entire container
                }}
                source={{ uri: 'https://etimg.etb2bimg.com/photo/72472379.cms' }}
              />
            </TouchableOpacity>
            <Text style={{ color: '#333', fontSize: 18, marginTop: 5,marginLeft:16,fontWeight:'medium' }}>Kurnool Walmart</Text>
          </View>
        ) : (
          <View />
        )}
      </View>

      <TouchableOpacity onPress={() => {
        // router.push('/home');
      }}>
      </TouchableOpacity>
    </View>
  );
};

export default loginSuccess;9