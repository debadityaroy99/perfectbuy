import React, { useState } from 'react';
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
    image: 'https://m.media-amazon.com/images/I/718jTNHNlCL._AC_UL480_FMwebp_QL65_.jpg',
    title: 'Fortune Hamesha Mini Dubar Basmati Rice, suitable for daily cooking, 5 KgApple iPhone 15 Pro (128 GB)',
    price: '26.90',
    rating: '4.5',
  },
  {
    id: '2',
    image: 'https://m.media-amazon.com/images/I/6199DSUZAVL._AC_UL480_FMwebp_QL65_.jpg',
    title: 'Daawat Pulav Basmati Rice 1Kg| Pearly slender Grains| Cooked Grain Upto 18mm*| Long & Fluffy Pulav RiceSamsung Galaxy S24 Ultra 5G AI Smartphone',
    price: '25.26',
    rating: '4.9',
  },
  {
    id: '3',
    image: 'https://m.media-amazon.com/images/I/71v0fCOgbjL._AC_UL480_FMwebp_QL65_.jpg',
    title: 'India Gate Basmati Rice Everyday 5 kgOnePlus 12 (Silky Black, 16GB RAM, 512GB Storage)',
    price: '29.12',
    rating: '4.8',
  },
  {
    id: '4',
    image: 'https://i5.walmartimages.com/seo/Organic-Brown-Rice-Medium-Grain-2lb-Bag_35722d65-b637-4f39-8e87-f309b3b005cb.e6c38f237ec2a067ae0ff0592e1924af.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF',
    title: 'Organic Brown Rice - Medium Grain 2lb Bag',
    price: '24.84',
    rating: '4.6',
  },
  {
    id: '5',
    image: 'https://i5.walmartimages.com/seo/Italian-Arborio-White-Rice-1-Pound-Short-Grain-White-Rice-Variety-Superfino-Vegan-Kosher_4f5a0313-ab9d-47bf-bbd3-2b3aec92dbb1.661740ba761b83e76972b01da8f69553.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFFhttps://m.media-amazon.com/images/I/71aiqeP-APL._SX569_.jpg',
    title: 'Italian Arborio White Rice, 1 Pound – Short-Grain White Rice Variety, Superfino, Vegan, KosherRedmi Note 13 Pro (Coral Purple, 8GB RAM, 128GB Storage)',
    price: '31.84',
    rating: '4.5',
  },
  {
    id: '6',
    image: 'https://i5.walmartimages.com/seo/Mahatma-Enriched-White-Rice-Extra-Long-Grain-Rice-Gluten-Free-5-lb-Bag_21752f8d-212c-4c7e-aa55-c5b5fd45cfcb.f6917083c9d982b462518f287a37630a.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFFhttps://m.media-amazon.com/images/I/61Id6WJDWqL._SX569_.jpg',
    title: 'Mahatma Enriched White Rice, Extra Long Grain Rice, Gluten Free, 5 lb BagiQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) ',
    price: '27.87',
    rating: '4.3',
  },
  {
    id: '7',
    image: 'https://i5.walmartimages.com/seo/Patak-s-Delhi-Spiced-Rice-Ready-to-Heat-and-Eat-Curry-10-05-oz-Pack-of-6_1b0f2dc4-c258-46b6-be1f-962b672bf77d.91428e6049ba161666977836c41bf51f.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF',
    title: 'Patak Delhi Spiced Rice, Ready to Heat and Eat Curry, 10.05 oz, Pack of 6',
    price: '131.42',
    rating: '4.5',
  },
  {
    id: '8',
    image: 'https://i5.walmartimages.com/seo/Lotus-Foods-Organic-White-Jasmine-Rice-30-oz-3-Pack_098a9578-02d9-4184-acac-415142ae4d1f.42851095513681a481a5f9f3dfde2af2.png?odnHeight=573&odnWidth=573&odnBg=FFFFFFhttps://m.media-amazon.com/images/I/61lhB3uQT3L._SX569_.jpg',
    title: 'Lotus Foods Organic White Jasmine Rice 30 oz, 3 PackLava Blaze X 5G - Starlight Purple (4GB RAM | 128GB Storage)',
    price: '35.65',
    rating: '4.0',
  },
  // Add more products as needed
];

// Category tabs
const categories = ['For you', 'Bestsellers', 'New Releases', 'Deals'];

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
        <Text style={styles.productPrice}>₹{product.price}</Text>
        <TouchableOpacity style={styles.addToCartBtn} activeOpacity={0.8}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
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
    const [selectedCategory, setSelectedCategory] = useState('For you');
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
              headerTitle:"Rice",
              headerTitleStyle:{
                color:'white',
                fontSize:25
              }

        }}
        />
      <View style={styles.categoryBar}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.categoryTab, selectedCategory === cat && styles.categoryTabActive]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text style={[styles.categoryTabText, selectedCategory === cat && styles.categoryTabTextActive]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

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
  addToCartBtn: {
    marginTop: SIZES.small,
    backgroundColor: '#FFD814', // Amazon-like yellow
    paddingVertical: 6,
    borderRadius: 4,
    alignItems: 'center',
  },
  addToCartText: {
    fontSize: SIZES.small,
    fontWeight: 'bold',
    color: '#111',
  },
  categoryBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.medium,
  },
  categoryTab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#eee',
    marginHorizontal: 4,
  },
  categoryTabActive: {
    backgroundColor: '#0071ce',
  },
  categoryTabText: {
    fontSize: 12,
    color: '#555',
  },
  categoryTabTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductList;
