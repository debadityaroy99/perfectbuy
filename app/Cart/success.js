import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import LottieView from 'lottie-react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TransactionComplete = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationCompleted(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const billItems = [
    { id: '1', description: 'Apple iPhone 14 Pro', price: '$999' },
    { id: '2', description: 'Apple AirPods Pro', price: '$249' },
    { id: '3', description: 'Shipping', price: '$20' },
  ];

  const renderBillItem = ({ item }) => (
    <View style={styles.billItem}>
      <Text style={styles.billDescription}>{item.description}</Text>
      <Text style={styles.billPrice}>{item.price}</Text>
    </View>
  );

  if (!animationCompleted) {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../../assets/success.json')}
          autoPlay
          loop={false}
          onAnimationFinish={() => setAnimationCompleted(true)}
          style={styles.lottie}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={21} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transaction Complete</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.iconSection}>
          <FontAwesome name="shopping-cart" size={50} color="#007bff" />
          <Text style={styles.storeName}>Kurnool Store</Text>
          <Text style={styles.storeLocation}>15 Aug, 2024  | 09:30</Text>
        </View>
        <View style={{marginBottom:20,flexDirection:'row'}}>
            <Text style={{fontSize:22,fontWeight:600}}>Total Payment</Text>
            <Text style={{fontSize:22,fontWeight:600,left:120}}>$2797</Text>
            </View>
        <FlatList
          data={billItems}
          renderItem={renderBillItem}
          keyExtractor={(item) => item.id}
          style={styles.billList}
        />
        <View style={{alignSelf:'center',flexDirection:'row'}}>
            <FontAwesome name="barcode" size={100} color="black" />
            <FontAwesome name="barcode" size={100} color="black" />
           
        </View>
        <Text style={{alignSelf:'center',fontWeight:600,fontSize:20}}>THANK YOU!</Text>

      </View>
      <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download Bill</Text>
        </TouchableOpacity>

        <Text style={styles.ratingTitle}>Rate Our Service</Text>
        <View style={styles.starRating}>
          {[...Array(5)].map((_, index) => (
            <TouchableOpacity key={index}>
              <FontAwesome name="star" size={32} color="gold" />
            </TouchableOpacity>
          ))}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  lottie: {
    width: 400,
    height: 400,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '480',
    marginLeft: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginTop:22
  },
  iconSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  storeName: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 6,
    marginBottom: 7,
  },
  storeLocation: {
    fontSize: 14,
    fontWeight: '590',
    color: 'gray',
    top:-7
  },
  billList: {
    marginBottom: 20,
  },
  billItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  billDescription: {
    fontSize: 16,
  },
  billPrice: {
    fontSize: 16
  },
  downloadButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 22,
    alignItems: 'center',
    marginBottom: 20,
    marginTop:24
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingTitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  starRating: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default TransactionComplete;
