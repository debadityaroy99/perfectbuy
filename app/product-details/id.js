import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ProductDetails = () => {
  const product = {
    name: "Apple iPhone 14 Pro",
    price: "999",
    rating: 4.8,
    description: "The iPhone 14 Pro features a 6.1-inch Super Retina XDR display, A16 Bionic chip, 5G capability, Pro camera system, and iOS 16. Available in multiple colors.",
    images: [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/q/n/-original-imagh2gw4zqxyzst.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/i/v/-original-imaghxcy4cwuyggd.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/i/7/-original-imaguypzzhbzm5an.jpeg?q=70&crop=false",
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
        name: "Samsung Galaxy S23",
        price: "$899",
        image: "https://example.com/galaxy-s23.jpg",
      },
      {
        id: '2',
        name: "Google Pixel 7 Pro",
        price: "$799",
        image: "https://example.com/pixel-7-pro.jpg",
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
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { /* Go back */ }}>
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

        {/* Product Location in Store */}
        <View style={styles.locationCard}>
          
          <View style={{flexDirection:'row'}}>
          <Text style={styles.locationTitle}>Available in Store:</Text>
                <TouchableOpacity>
                    <Text style={{marginLeft:120,color:'blue'}}>Need Help?</Text>
                </TouchableOpacity>
            </View>
          <Text style={styles.locationDescription}>{product.location}</Text>
        </View>

        {/* Description */}
        <View style={styles.descriptionSection}>
          <Text style={styles.descriptionTitle}>Description:</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>

        {/* Customer Reviews */}
        <View style={styles.reviewsSection}>
          <Text style={styles.reviewsTitle}>Customer Reviews:</Text>
          {product.reviews.map((review, index) => (
            <View key={index} style={styles.review}>
              <Text style={styles.reviewText}>{review}</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.writeReviewButton}>
            <Text>Write a Review</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Similar Products */}
      <FlatList
        data={product.similarProducts}
        renderItem={renderSimilarProduct}
        horizontal
        keyExtractor={(item) => item.id}
        style={styles.similarProductsList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  locationCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For Android shadow
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  locationDescription: {
    fontSize: 14,
    color: '#666',
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
});

export default ProductDetails;
