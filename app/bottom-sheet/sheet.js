import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { useRouter } from 'expo-router';
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
                <View style={styles.sheetContent}>
                    <View style={{alignSelf:'center'}}>
                        <Text style={styles.sheetText}>Add to cart</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.sheetText}>{`Apple iPhone 15 Pro...`}</Text>
                        <Text style={{fontSize:25,left:100}}>1</Text>
                    </View>
                    
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.addToCartButton} onPress={()=>{router.push('/Cart/cart')}}>
                            <Text style={styles.buttonText}>Add to Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.plusButton}>
                            <Text style={styles.buttonText}>+</Text>
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
        height: '25%',
        width: '100%',
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    sheetContent: {
        flex: 1,
        justifyContent: 'space-between',
    },
    sheetText: {
        fontSize: 25,
        fontWeight: '400',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    addToCartButton: {
        backgroundColor: '#0071ce',
        paddingVertical: 15,
        width: '80%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusButton: {
        backgroundColor: '#333',
        paddingVertical: 15,
        width: '18%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
