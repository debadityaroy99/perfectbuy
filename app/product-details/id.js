import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../../components/jobdetails/footer/Footer';
import Sheet from '../bottom-sheet/sheet';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ProductDetails = () => {
    const [status, setStatus] = useState(false);
    const navigation = useNavigation(); // Use navigation from React Navigation
    const router=useRouter()
    const product = {
        name: "Fortune Hamesha Mini Dubar Basmati Rice, suitable for daily cooking, 5 Kg",
        price: "26.90",
        rating: 4.5,
        description: "The iPhone 15 Pro features a 6.1-inch Super Retina XDR display, A16 Bionic chip, 5G capability, Pro camera system, and iOS 16. Available in multiple colors.",
        images: [
            "https://m.media-amazon.com/images/I/718jTNHNlCL._AC_UL480_FMwebp_QL65_.jpg"
        ],
        location: "Aisle 5, Shelf 2, Near the Electronics section",
        reviews: [,
            "The best iPhone yet! The camera is incredible, and the display is gorgeous.",
            "Pricey, but worth it for the features and build quality.",
            "Battery life could be better, but overall a great phone.",
        ],
        similarProducts: [
            {
                id: '1',
                name: "Samsung Galaxy S24 Ultra 5G AI Smartphone",
                price: "$899",
                image: "https://m.media-amazon.com/images/I/4193g0Lz6aL._SX300_SY300_QL70_FMwebp_.jpg",
            },
            {
                id: '2',
                name: "Google Pixel 7 Pro",
                price: "$799",
                image: "https://example.com/pixel-7-pro.jpg",
            },
        ],
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.backButton}>Back</Text>
                    </TouchableOpacity>
                    
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
                        <TouchableOpacity onPress={()=>{
                            router.push('/product-details/scanned')
                        }}>
                            <Text style={styles.productName}>{product.name}</Text>
                        </TouchableOpacity>
                        <View style={styles.ratingContainer}>
                            <Text>{product.rating} ★</Text>
                        </View>
                        <Text style={styles.price}>${product.price}</Text>
                    </View>

                    {/* Product Location in Store */}
                    <View style={styles.locationCard}>
                        <View style={styles.locationHeader}>
                            <Ionicons name="location-outline" size={18} color="#0071ce" style={{ marginRight: 6 }} />
                            <Text style={styles.locationTitle}>Location in Store</Text>
                        </View>
                        <Text style={styles.locationDescription}>{product.location}</Text>
                    </View>
                </View>

                <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                    <Footer />
                </View>
               
            </ScrollView>
            
        </View>
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
        marginBottom:-10
    },
    imageCarousel: {
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
    },
    productImage: {
        width: 360,
        height: 286,
        resizeMode: 'contain',
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
        backgroundColor: '#eaf4ff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#0071ce',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
    },
    locationHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    locationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0071ce',
    },
    locationDescription: {
        fontSize: 15,
        color: '#333',
        fontWeight: '500',
    },
    /* Removed helpButton and helpButton2 styles as buttons were deleted */
});

export default ProductDetails;
