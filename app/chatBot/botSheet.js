import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback, TouchableOpacity, TextInput } from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Sheet = ({ onClose }) => {
    const slide = useRef(new Animated.Value(300)).current;
    const [showGreeting, setShowGreeting] = useState(false);
    const [greetingTime, setGreetingTime] = useState('');
    const [value, setValue] = useState("");
    const [showResponse, setShowResponse] = useState(false);
    const [responseTime, setResponseTime] = useState('');

    useEffect(() => {
        slideUp();
        const timeout = setTimeout(() => {
            const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            setGreetingTime(currentTime);
            setShowGreeting(true);
        }, 400);

        return () => clearTimeout(timeout);
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
            toValue: 700,
            duration: 400,
            useNativeDriver: true,
        }).start(() => onClose && onClose()); // Call onClose when animation is finished
    };

    const handleSend = () => {
        if (value.toLowerCase() === "screen size and resolution") {
            const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            setResponseTime(currentTime);
            setShowResponse(true);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={slideDown}>
                <View style={styles.backdrop} />
            </TouchableWithoutFeedback>
            <Animated.View style={[styles.bottomSheet, { transform: [{ translateY: slide }] }]}>
                <View style={styles.sheetContent}>
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={styles.sheetText}>ShopSync Bot</Text>
                    </View>

                    {/* Greeting Message */}
                    {showGreeting && (
                        <View style={styles.messageCard}>
                            <Text style={styles.messageText}>Hi Debaditya, How can I help?</Text>
                            <Text style={styles.timestamp}>{greetingTime}</Text>
                        </View>
                    )}
                                        {showResponse && (
                        <View style={[styles.messageCard,styles.responseCard]}>
                            <Text style={styles.messageText}>The iPhone 14 Pro has a 6.1-inch Super Retina XDR display with a resolution of 2556 x 1179 pixels.</Text>
                            <Text style={styles.timestamp}>{responseTime}</Text>
                        </View>
                    )}


                    {showGreeting && (
                        <View style={{ top: 160, flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.featureButton} onPress={() => setValue('Key Features of this phone')}>
                                <Text style={styles.featureButtonText}>Key Features of this phone</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.featureButton, { left: 10 }]} onPress={() => setValue("Screen size and resolution")}>
                                <Text style={styles.featureButtonText}>Screen size and resolution</Text>
                            </TouchableOpacity>
                        </View>
                    )}


                    <View style={styles.buttonContainer}>
                        <TextInput
                            placeholder="Ask questions about Apple Iphone 14 Pro"
                            value={value}
                            onChangeText={setValue}
                            style={styles.input}
                        />
                        <TouchableOpacity style={styles.plusButton} onPress={handleSend}>
                            <View style={styles.buttonText}>
                                <Icon name="arrow-right" size={24} color="white" />
                            </View>
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
        zIndex: 11,
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black backdrop
    },
    bottomSheet: {
        height: '70%',
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
    messageCard: {
        alignSelf: 'flex-start',
        backgroundColor: '#e1ffc7',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 260,
        top:-190,
        maxWidth: '80%',
        position:'absolute'
    },
    responseCard: {
        alignSelf: 'flex-end',
        backgroundColor: '#d1e7ff',
        top:-106
    },
    messageText: {
        fontSize: 16,
        color: '#333',
    },
    timestamp: {
        fontSize: 12,
        color: '#555',
        alignSelf: 'flex-end',
        marginTop: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    input: {
        width: '80%',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        backgroundColor: '#fff',
        fontSize: 14,
    },
    plusButton: {
        backgroundColor: '#333',
        paddingVertical: 15,
        width: '15%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    featureButton: {
        backgroundColor: '#333',
        width: "50%",
        height: 30,
        borderRadius: 20,
        bottom:-65
    },
    featureButtonText: {
        color: 'white',
        alignSelf: 'center',
        top: 4,
        fontWeight: '500',
    },
});
