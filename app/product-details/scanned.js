import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Sheet from '../bottom-sheet/sheet';
import Footer2 from '../../components/jobdetails/footer/Footer2';
import { useState } from 'react';
import LottieView from 'lottie-react-native';
import Bot from '../chatBot/bot';
const ProductDetails = () => {
    const [status, setStatus] = useState(false);
    const [botStatus, setBotStatus] = useState(false);
  const product = {
    name: "Apple iPhone 15 Pro (128 GB)",
    price: "1524.44",
    rating: 4.5,
    description: "The iPhone 14 Pro features a 6.1-inch Super Retina XDR display, A16 Bionic chip, 5G capability, Pro camera system, and iOS 16. Available in multiple colors.",
    images: [
      "https://m.media-amazon.com/images/I/41lQuD3zXhL._SY445_SX342_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/51PpavHStIL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71lmRVkniLL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71g7dxYXiOL._SX522_.jpg"
  ],
    location: "Aisle 5, Shelf 2, Near the Electronics section",
    reviews: [
      "The best iPhone yet! The camera is incredible, and the display is gorgeous.",
      "Pricey, but worth it for the features and build quality.",
      "Battery life could be better, but overall a great phone.",
    ],
    similarProducts: [
      {
        id: '1',
        name: "Samsung Galaxy S24 Ultra",
        price: "$1548.26",
        image: "https://m.media-amazon.com/images/I/4193g0Lz6aL._SX300_SY300_QL70_FMwebp_.jpg",
      },
      {
        id: '2',
        name: "Moto Edge 50 Fusion",
        price: "$948.26",
        image: "https://m.media-amazon.com/images/I/41XfRvZvjBL._AC_UY327_FMwebp_QL65_.jpg",
      },
    ],
  };


  const renderSimilarProduct = ({ item }) => (
    <TouchableOpacity style={styles.similarProductCard}>
      <Image source={{ uri: item.image }} style={styles.similarProductImage} />
      <Text style={styles.similarProductName}>{item.name}</Text>
      <Text style={styles.similarProductPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.backButton}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{product.name}</Text>
        </View>

        {/* Product Card */}
        <View style={styles.productCard}>
          {/* Image Carousel */}
          <ScrollView horizontal pagingEnabled style={styles.imageCarousel}>
            {product.images.map((image, index) => (
              <Image key={index} source={{ uri: image }} style={styles.productImage} />
            ))}
          </ScrollView>

          {/* Product Info */}
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{product.name}</Text>
            <View style={styles.ratingContainer}>
              <Text>{product.rating} ★</Text>
            </View>
            <Text style={styles.price}>${product.price}</Text>
          </View>

          {/* Description */}
          <View style={styles.descriptionSection}>
            <Text style={styles.descriptionTitle}>Description:</Text>
            <Text style={styles.description}>{product.description}</Text>
            <TouchableOpacity><Text style={{color:'blue'}}>Read more</Text></TouchableOpacity>
          </View>

          {/* Customer Reviews */}
          <View style={styles.reviewsSection}>
            <Text style={styles.reviewsTitle}>Customer Reviews:</Text>
            {product.reviews.map((review, index) => (
              <View key={index} style={styles.review}>
                <Text style={styles.reviewText}>{review}</Text>
              </View>
            ))}
            <TouchableOpacity>
              <Text style={{color:'blue'}}>See all reviews  </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Similar Products */}
        {/* <FlatList
          data={product.similarProducts}
          renderItem={renderSimilarProduct}
          horizontal
          keyExtractor={(item) => item.id}
          style={styles.similarProductsList}
        /> */}
      </ScrollView>
      <TouchableOpacity onPress={()=>{setBotStatus(true)}} style={styles.chatbotLogo}>
          <LottieView
            loop
            autoPlay
            style={{
            width: 100,
            height: 100,
            top:-80,
            backgroundColor: 'transparent',
            }}
            source={require('../../assets/chat-bot.json')}
        />
  </TouchableOpacity>
      {/* Footer */}
      <View style={styles.footerContainer}>
        <Footer2 setStatus={setStatus}/>
      </View>
       {status && <Sheet onClose={() => setStatus(false)} />}
       {botStatus && <Bot onClose={() => setBotStatus(false)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  chatbotLogo: {

    position: 'absolute',
    bottom: -17, // Adjust this value as needed
    right: 7,  // Adjust this value as needed
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    marginTop: 40,
  },
  backButton: {
    fontSize: 16,
    color: '#007bff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  productCard: {
    backgroundColor: '#ffffff',
    margin: 16,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageCarousel: {
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
  },
  productImage: {
    width: 330,
    height: 300,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  price: {
    fontSize: 22,
    color: '#d9534f',
  },
  descriptionSection: {
    padding: 16,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#6c757d',
  },
  reviewsSection: {
    padding: 16,
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  review: {
    marginVertical: 8,
  },
  reviewText: {
    fontSize: 16,
    color: '#495057',
  },
  writeReviewButton: {
    marginTop: 8,
    padding: 12,
    backgroundColor: '#007bff',
    borderRadius: 4,
    alignItems: 'center',
  },
  similarProductsList: {
    marginTop: 16,
  },
  similarProductCard: {
    width: 120,
    padding: 8,
    marginRight: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  similarProductImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  similarProductName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  similarProductPrice: {
    fontSize: 14,
    color: '#d9534f',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 10,
    backgroundColor: 'white',
  },
});

export default ProductDetails;
