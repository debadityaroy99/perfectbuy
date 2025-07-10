import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Share, FlatList, Dimensions } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');

const ResultScreen = () => {
  const [done, setDone] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = () => {
    router.push('/Cart/cart');
  };

  const handleUpload = () => {
    router.back(); // Navigate back to upload another image
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: 'Check out this look!',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const images = [
    require('../../assets/male-fashion/tushar-res.webp'),
    require('../../assets/male-fashion/tushar2.jpg'),
  ];

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      {done ? (
        <>
          <FlatList
            data={images}
            keyExtractor={(_, idx) => idx.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Image source={item} style={styles.carouselImage} resizeMode="contain" />
            )}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleUpload}>
              <Text style={styles.buttonText}>Upload Another</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleShare}>
              <Text style={styles.buttonText}>Share</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <LottieView
          source={require('../../assets/loading.json')}
          autoPlay
          loop
          style={styles.lottie}
        />
      )}
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  lottie: {
    width: 250,
    height: 250,
  },
  resultImage: {
    width: '100%',
    height: '70%',
    marginTop: 60,
  },
  carouselImage: {
    width: width,
    height: '70%',
    marginTop: 90,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#0066FF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
}); 