import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { SIZES,COLORS } from '../../constants';
import { router, Stack, useRouter } from 'expo-router';
import { ScreenHeaderBtn } from '../../components';
// import icons from '../../constants';
import icons from '../../constants/icons'
// Sample product data
const products = [
  {
    id: '1',
    image: 'https://m.media-amazon.com/images/I/41lQuD3zXhL._SY445_SX342_QL70_FMwebp_.jpg',
    title: 'Apple iPhone 15 Pro (128 GB)',
    price: '1524.44',
    rating: '4.5',
  },
  {
    id: '2',
    image: 'https://m.media-amazon.com/images/I/4193g0Lz6aL._SX300_SY300_QL70_FMwebp_.jpg',
    title: 'Samsung Galaxy S24 Ultra 5G AI Smartphone',
    price: '1548.26',
    rating: '4.9',
  },
  {
    id: '3',
    image: 'https://m.media-amazon.com/images/I/71o8VehMHXL._SY450_.jpg',
    title: 'OnePlus 12 (Silky Black, 16GB RAM, 512GB Storage)',
    price: '775.12',
    rating: '4.8',
  },
  {
    id: '4',
    image: 'https://m.media-amazon.com/images/I/41qtPl1QeHL._SX300_SY300_QL70_FMwebp_.jpg',
    title: 'Motorola Edge 50 Pro 5G with 125W Charger (Luxe Lavender, 256 GB)',
    price: '316.84',
    rating: '4.6',
  },
  {
    id: '5',
    image: 'https://m.media-amazon.com/images/I/71aiqeP-APL._SX569_.jpg',
    title: 'Redmi Note 13 Pro (Coral Purple, 8GB RAM, 128GB Storage)',
    price: '297.84',
    rating: '4.5',
  },
  {
    id: '6',
    image: 'https://m.media-amazon.com/images/I/61Id6WJDWqL._SX569_.jpg',
    title: 'iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) ',
    price: '295.87',
    rating: '4.3',
  },
  {
    id: '7',
    image: 'https://m.media-amazon.com/images/I/61G-KeNnaFL._SX569_.jpg',
    title: 'Motorola razr 50 ultra (Spring Green, 12GB RAM, 512GB Storage)',
    price: '131.42',
    rating: '4.5',
  },
  {
    id: '8',
    image: 'https://m.media-amazon.com/images/I/61lhB3uQT3L._SX569_.jpg',
    title: 'Lava Blaze X 5G - Starlight Purple (4GB RAM | 128GB Storage)',
    price: '178.65',
    rating: '4.0',
  },
  // Add more products as needed
];

// Product Card Component
const ProductCard = ({ product }) => {
    const router=useRouter()
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={()=>router.push('/product-details/id')}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle} numberOfLines={2}>
          {product.title}
        </Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.productRating}>{product.rating} ★</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Main Component Rendering the Product List
const ProductList = () => {
    const router=useRouter()
  return (
    <View style={styles.container}>
        <Stack.Screen
        options={{
            headerBackVisible:true,
            headerShown:true,
            // headerLeft:()=>(
            //     <ScreenHeaderBtn
            //     iconUrl={icons.left}
            //     dimension="20%"
            //     handlePress={()=>router.back()}
            //     />
            //   ),
              headerStyle:{backgroundColor:'#0071ce'},
              headerTitle:"phones",
              headerTitleStyle:{
                color:'white',
                fontSize:25
              }

        }}
        />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display products in two columns
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.medium,
    backgroundColor: COLORS.lightGray,
  },
  flatListContent: {
    paddingBottom: SIZES.medium,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    margin: SIZES.small,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 150, // Adjust height as needed
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  detailsContainer: {
    padding: SIZES.small,
  },
  productTitle: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.darkGray,
  },
  productPrice: {
    marginTop: SIZES.small,
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.small,
  },
  productRating: {
    fontSize: SIZES.medium,
    color: COLORS.darkGray,
  },
});

export default ProductList;
