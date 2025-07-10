import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useRouter } from 'expo-router';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Boya ByM1 Auxiliary Omnidirectional Lavalier Condenser Microphone with 20ft Audio Cable (Black)',
      price: 122.44,
      quantity: 1,
      image: 'https://m.media-amazon.com/images/I/311998jIRGL._SX300_SY300_QL70_FMwebp_.jpg',
    },
  ]);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const router=useRouter()

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const applyPromo = () => {
    if (promoCode.trim()) {
      // Flat ₹20 discount demo
      setDiscount(20);
    }
  };

  const subtotal = parseFloat(calculateTotal());
  const toPay = (subtotal - discount).toFixed(2);

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>₹{item.price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      {/* Cart Items List */}
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cartItemsList}
      />

      {/* Summary & Payment */}
      <View style={styles.footer}>
        <View style={styles.summaryRow}>
          <Text style={styles.labelText}>Amount</Text>
          <Text style={styles.valueText}>₹{subtotal}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.labelText}>Discount</Text>
          <Text style={[styles.valueText, { color: '#d9534f' }]}>- ₹{discount}</Text>
        </View>

        {/* Promo code */}
        <View style={styles.promoRow}>
          <TextInput
            placeholder="Promo code"
            value={promoCode}
            onChangeText={setPromoCode}
            style={styles.promoInput}
          />
          <TouchableOpacity style={styles.applyBtn} onPress={applyPromo}>
            <Text style={styles.applyBtnText}>✓</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.summaryRow, { marginTop: 4 }]}>
          <Text style={styles.toPayLabel}>To pay</Text>
          <Text style={styles.toPayValue}>₹{toPay}</Text>
        </View>

        <Text style={styles.pointsNote}>You will be awarded {Math.floor(toPay)} points for your purchase</Text>

        <TouchableOpacity style={styles.checkoutButton} onPress={() => router.push('/Cart/checkOut')}>
          <Text style={styles.checkoutButtonText}>Proceed to payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#0071ce',
    elevation: 4,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  backButton: {
    fontSize: 16,
    color: '#fff',
    fontWeight:'bold'
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  cartItemsList: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
    resizeMode:'cover'
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#0071ce',
    marginVertical: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#e0e7ff',
  },
  quantityButtonText: {
    fontSize: 18,
    color: '#0071ce',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  removeButton: {
    marginTop: 8,
  },
  removeButtonText: {
    fontSize: 14,
    color: '#d9534f',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  labelText: {
    fontSize: 16,
    color: '#666',
  },
  valueText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  promoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  promoInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    backgroundColor: '#f5f7fa',
  },
  applyBtn: {
    marginLeft: 8,
    backgroundColor: '#00a3ff',
    width: 48,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyBtnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  toPayLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  toPayValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  pointsNote: {
    fontSize: 12,
    color: '#777',
    marginTop: 8,
  },
  checkoutButton: {
    marginTop: 16,
    paddingVertical: 14,
    backgroundColor: '#0071ce',
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});

export default CartPage;
