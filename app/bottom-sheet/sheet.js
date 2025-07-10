import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const Sheet = ({ onClose }) => {
    const slide = useRef(new Animated.Value(300)).current;
    const router=useRouter()
    useEffect(() => {
        slideUp();
    }, []);

    const slideUp = () => {
        Animated.timing(slide, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
        }).start();
    };

    const slideDown = () => {
        Animated.timing(slide, {
            toValue: 300,
            duration: 400,
            useNativeDriver: true,
        }).start(() => onClose && onClose()); // Call onClose when animation is finished
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={slideDown}>
                <View style={styles.backdrop} />
            </TouchableWithoutFeedback>
            <Animated.View style={[styles.bottomSheet, { transform: [{ translateY: slide }] }]}>
                {/* Grab handle */}
                <View style={styles.handle} />

                <View style={styles.sheetContent}>
                    <View style={{alignSelf:'center'}}>
                        <Text style={styles.sheetTitle}>Add to Cart</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
                        <Text style={styles.productText}>{`Boya ByM1 Auxiliary..`}</Text>
                        <Text style={styles.quantityText}>1</Text>
                    </View>
                    
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.addToCartButton} onPress={()=>{router.push('/Cart/cart')}}>
                            <Text style={styles.addToCartText}>Add to Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.plusButton}>
                            <Ionicons name="add" size={24} color="#0071ce" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Animated.View>
        </View>
    );
};

export default Sheet;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        zIndex:11,
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black backdrop
    },
    bottomSheet: {
        height: '28%',
        width: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        paddingHorizontal: 20,
        paddingTop: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 10,
    },
    handle: {
        width: 40,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#ccc',
        alignSelf: 'center',
        marginBottom: 12,
    },
    sheetContent: {
        flex: 1,
        justifyContent: 'space-between',
    },
    sheetTitle: {
        fontSize: 22,
        fontWeight: '700',
    },
    productText: {
        fontSize: 18,
        fontWeight: '500',
    },
    quantityText: {
        fontSize: 22,
        fontWeight: '600',
        marginLeft: 'auto',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 1,
        marginBottom: 10,
    },
    addToCartButton: {
        backgroundColor: '#0071ce',
        paddingVertical: 14,
        width: '75%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    addToCartText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    plusButton: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        width: '20%',
        borderWidth: 2,
        borderColor: '#0071ce',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
    },
});
