import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import { FontAwesome } from '@expo/vector-icons';

const LoginSuccess = () => {
  const router = useRouter();
  const [showLocationInput, setShowLocationInput] = useState(false);
  const [location, setLocation] = useState('');

  const handlePress = () => {
    setShowLocationInput(true);
  };
  const handlePress2 = () => {
    router.push('/online');
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Lottie animation */}
      <LottieView
        loop
        autoPlay
        style={{
          width: 450,
          height: 450,
          marginBottom: -20,
          backgroundColor: 'transparent',
        }}
        source={require('../assets/ladyshopping.json')}
      />

        <Text style={styles.title}>Select Shopping Mode</Text>

        <TouchableOpacity style={styles.card} onPress={handlePress}>
          <Text style={styles.cardText}>Continue With Size M</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.card} onPress={handlePress}>
          <Text style={styles.cardText}>Shop Offline</Text>
        </TouchableOpacity> */}

        {showLocationInput && (
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Enter your location"
              value={location}
              onChangeText={setLocation}
              style={styles.locationInput}
            />
            <TouchableOpacity
              style={styles.goBtn}
              onPress={() => router.push('/home')}
            >
              <FontAwesome name="arrow-right" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  card: {
    width: 230,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0071ce',
    borderRadius: 12,
    marginVertical: 10,
    elevation: 3,
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    width:'80%'
  },
  locationInput: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
  },
  goBtn: {
    marginLeft: 8,
    backgroundColor: '#0071ce',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginSuccess;

// import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
// import React, { useState } from 'react';
// import { Stack, useRouter } from 'expo-router';
// import { icons, SIZES } from '../constants';
// import styles from '../components/home/welcome/welcome.style';
// import { TextInput } from 'react-native';

// const loginSuccess = () => {
//   const router = useRouter();
//   const [isloading, setIsLoading] = useState(false);
//   const [showBox, setShowBox] = useState(false);

//   const handleSearch = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       setShowBox(true);
//     }, 1000);
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -90 }}>
//       <Stack.Screen
//         options={{
//           headerShown: false,
//           headerBackVisible: false,
//         }}
//       />

//       <View
//         style={{
//           width: '100%',
//           height: '50%', // Makes the image container cover half the screen height
//           borderRadius: 45, // Rounded edges
//           overflow: 'hidden', // Ensures the image respects the border radius
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginTop: '-100%',
//         }}
//       >
//         <Image
//           source={icons.background}
//           style={{
//             width: '100%',
//             height: '100%',
//             resizeMode: 'cover', // Ensures the image covers the entire container
//           }}
//           blurRadius={3.5}
//         />
//       </View>

//       <Text
//         style={{
//           marginTop: -43,
//           fontSize: 67,
//           fontWeight: 800,
//           color: '#0071ce',
//           textAlign: 'center',
//           textShadowOffset: { width: 4, height: 2 }, // Offset for shadow
//           textShadowRadius: 5, // Blur radius for shadow
//           textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color with transparency
//         }}
//       >
//         Find Store
//       </Text>

//       <View style={{ marginTop: -10 }}>
//         <View style={styles.searchContainer3}>
//           <View style={styles.searchWrapper3}>
//             <TextInput
//               style={styles.searchInput3}
//               placeholder='Where are you'
//             />
//           </View>
//           <TouchableOpacity style={styles.searchBtn2} onPress={handleSearch}>
//             {isloading ? (
//               <ActivityIndicator size={'large'} color={'white'} />
//             ) : (
//               <Image
//                 source={icons.location}
//                 resizeMode='contain'
//                 style={styles.searchBtnImage}
//               />
//             )}
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity>
//           <Text style={{ color: '#0071ce', marginTop: 3, fontWeight: 'bold', fontSize: 15, marginLeft: 240 }}>
//             Find my location
//           </Text>
//         </TouchableOpacity>

//         {showBox ? (
//           <View>
//             <Text style={{ fontSize: 24, fontWeight: '490' }}>
//               Nearby stores
//             </Text>
//             <TouchableOpacity
//               style={{
//                 justifyContent: "center",
//                 alignItems: "center",
//                 padding: 10,
//                 borderRadius: SIZES.large,
//                 backgroundColor: "#fff9fd",
//                 shadowColor: 'black',
//                 shadowOffset: { width: 0, height: 2 },
//                 shadowOpacity: 0.3,
//                 shadowRadius: 5,
//                 elevation: 5,
//                 height: 160,
//                 width: 160,
//                 marginTop:10
//               }}
//               onPress={() => {
//                 router.push('/home');
//               }}
//             >
//               <Image
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   borderRadius: SIZES.large, // Ensures the image corners are rounded
//                   resizeMode: 'cover', // Covers the entire container
//                 }}
//                 source={{ uri: 'https://etimg.etb2bimg.com/photo/72472379.cms' }}
//               />
//             </TouchableOpacity>
//             <Text style={{ color: '#333', fontSize: 18, marginTop: 5,marginLeft:16,fontWeight:'medium' }}>Kurnool Store</Text>
//           </View>
//         ) : (
//           <View />
//         )}
//       </View>

//       <TouchableOpacity onPress={() => {
//         // router.push('/home');
//       }}>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default loginSuccess;