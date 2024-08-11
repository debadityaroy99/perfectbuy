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
    image: 'https://m.media-amazon.com/images/I/61S-emDWj9L._AC_UL480_FMwebp_QL65_.jpg',
    title: 'Sample Product 1',
    price: '29.99',
    rating: '4.5',
  },
  {
    id: '2',
    image: 'https://m.media-amazon.com/images/I/510WNJ0CxTL._AC_UL480_FMwebp_QL65_.jpg',
    title: 'Sample Product 2',
    price: '19.99',
    rating: '4.2',
  },
  {
    id: '3',
    image: 'https://m.media-amazon.com/images/I/718GVZSwS5L._AC_UL480_FMwebp_QL65_.jpg',
    title: 'Sample Product 3',
    price: '49.99',
    rating: '4.8',
  },
  {
    id: '4',
    image: 'https://m.media-amazon.com/images/I/718GVZSwS5L._AC_UL480_FMwebp_QL65_.jpg',
    title: 'Sample Product 3',
    price: '49.99',
    rating: '4.8',
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
              headerStyle:{backgroundColor:'#fe5bbe'},
              headerTitle:"soap",
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
