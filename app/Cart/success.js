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
    { id: '1', description: 'Boya ByM1 Auxiliary  Microphone', price: 120.44 },
  ];

  const subtotal = 120.44;
  const tax = 2.0; // US market taxes
  const total = 122.44;

  const renderBillItem = ({ item }) => (
    <View style={styles.billItem}>
      <Text style={styles.billDescription}>{item.description}</Text>
      <Text style={styles.billPrice}>${item.price.toFixed(2)}</Text>
    </View>
  );

  if (!animationCompleted) {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../../assets/success1.json')}
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
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Receipt</Text>
        {/* empty view to balance flex and keep title centered */}
        <View style={{ width: 20 }} />
      </View>

      {/* Receipt Card */}
      <View style={styles.card}>
        <Text style={styles.storeName}>Walmart Store</Text>
        <Text style={styles.storeLocation}>12 July 2025 | 09:30</Text>

        <FlatList
          data={billItems}
          renderItem={renderBillItem}
          keyExtractor={(item) => item.id}
          style={styles.billList}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />

        <View style={styles.separator} />

        <View style={styles.summaryRow}>
          <Text style={styles.labelText}>Subtotal</Text>
          <Text style={styles.valueText}>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.labelText}>Tax</Text>
          <Text style={styles.valueText}>${tax.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={[styles.labelText, { fontWeight: '700' }]}>Total</Text>
          <Text style={[styles.valueText, { fontWeight: '700' }]}>${total.toFixed(2)}</Text>
        </View>

        <Text style={styles.thankYou}>Thank you for shopping!</Text>
      </View>

      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>Download Receipt</Text>
      </TouchableOpacity>
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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#0071ce',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    flex: 1,
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
  storeName: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  storeLocation: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 12,
  },
  billList: {
    marginBottom: 20,
  },
  billItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  separator: {
    height: 1,
    backgroundColor: '#eaeaea',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  labelText: {
    fontSize: 14,
    color: '#555',
  },
  valueText: {
    fontSize: 14,
    color: '#000',
  },
  billPrice: {
    fontSize: 14,
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
  thankYou: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default TransactionComplete;
