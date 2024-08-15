import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../../components/jobdetails/footer/Footer';
import Sheet from '../bottom-sheet/sheet';
import { useRouter } from 'expo-router';

const ProductDetails = () => {
    const [status, setStatus] = useState(false);
    const navigation = useNavigation(); // Use navigation from React Navigation
    const router=useRouter()
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
                        <Text style={styles.locationTitle}>Available in Store:</Text>
                        <Text style={styles.locationDescription}>{product.location}</Text>
                    </View>
                </View>

                <View style={{  marginRight: 20 }}>
                    <View style={{flexDirection:'row',marginTop:50}}>
                        <TouchableOpacity
                            style={styles.helpButton}
                            onPress={() => setStatus(true)}
                        >
                            <View style={styles.helpButtonTextWrapper}>
                                <Text style={styles.helpButtonText}>Store Map</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.helpButton2}
                            onPress={() => router.push('/help')}
                        >
                            <View style={styles.helpButtonTextWrapper}>
                                <Text style={styles.helpButtonText}>Need Help?</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                   
                    <View style={{marginTop:130}}><Footer /></View>
                </View>
            </ScrollView>
            {status && <Sheet onClose={() => setStatus(false)} />}
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
        elevation: 3,
    },
    locationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    locationDescription: {
        fontSize: 17,
        color: '#666',
        fontWeight: 'bold',
    },
    helpButton: {
        alignSelf: 'flex-end',
        marginTop: -190,
        left:20,
        backgroundColor: '#0071ce',
        width: '26%',
        height: 33,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 17,
        elevation: 10,
        top:10
    },
    helpButton2: {
        alignSelf: 'flex-end',
        marginTop: -190,
        left:190,
        backgroundColor: '#0071ce',
        width: '26%',
        height: 33,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 17,
        elevation: 10,
        top:10
    },
    helpButtonTextWrapper: {
        alignSelf: 'center',
        marginTop: 6,
    },
    helpButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ProductDetails;
