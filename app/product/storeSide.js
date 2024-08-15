import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const circleDiameter = width * 0.6; // Adjust the size of the circle
const strokeWidth = 29;
const radius = (circleDiameter - strokeWidth) / 2;
const circumference = 2 * Math.PI * radius;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const PartnerPage = () => {
  const progress = useSharedValue(0);
  const router=useRouter()
  useEffect(() => {
    progress.value = withTiming(1, {
      duration: 10000, // 5 seconds for full circle
      easing: Easing.linear,
    });
  }, []);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circumference * (1 - progress.value),
  }));

  return (
    <View style={styles.container}>
      {/* Deny Button */}
      <TouchableOpacity style={styles.denyButton}>
        <Text style={{ color: 'white' }}>Deny</Text>
      </TouchableOpacity>

      {/* Circular Timer */}
      <View style={styles.circleContainer}>
        <Svg width={circleDiameter} height={circleDiameter} style={styles.svg}>
          <Circle
            cx={circleDiameter / 2}
            cy={circleDiameter / 2}
            r={radius}
            stroke="lightgray"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <AnimatedCircle
            cx={circleDiameter / 2}
            cy={circleDiameter / 2}
            r={radius}
            stroke="green"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            animatedProps={animatedProps}
          />
        </Svg>
        <Image
          source={{ uri: 'https://media.istockphoto.com/id/1194339283/vector/floor-map-of-a-shopping-center-illustration.jpg?s=612x612&w=0&k=20&c=g-rcKQ3PCNEsl9aU62SBS5yZ5Ra-oOvC6fWsZT1EhvY=' }}
          style={styles.image}
        />
      </View>

      {/* New Order Text */}
      <Text style={styles.newOrderText}>New Checkout Request!</Text>

      {/* Customer Details */}
      <View style={styles.customerCard}>
        <Text style={styles.cardText}>Customer Location:</Text>
        <Text style={styles.cardText2}>Mall, Aisle 5</Text>
        <Text style={styles.cardText}>Phone: </Text>
        <View style={{flexDirection:'row'}}>
          <View>
            <Text style={styles.cardText2}> +91 878 780 5570</Text>
          </View>
          <View>
            <TouchableOpacity style={{left:90,}}><Text style={{color:'blue',fontSize:15}}>Call customer</Text></TouchableOpacity>
          </View>
        </View>
        
      </View>

      {/* Accept Order Button */}
      <TouchableOpacity style={styles.acceptButton} onPress={()=>{router.push('/product/otppage')}}>
        <Text style={styles.acceptButtonText}>Accept Request</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PartnerPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  denyButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 20,
    zIndex: 1,
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 140,
  },
  svg: {
    position: 'absolute',
    
  },
  image: {
    width: circleDiameter - strokeWidth,
    height: circleDiameter - strokeWidth,
    borderRadius: (circleDiameter - strokeWidth) ,
  },
  newOrderText: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -60,
  },
  customerCard: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    top:-70,
  },
  cardText: {
    fontSize: 18,
    marginBottom: 10,
  },
  cardText2: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight:'bold'
  },
  acceptButton: {
    backgroundColor: 'green',
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    borderRadius:35
  },
  acceptButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',

  },
});
