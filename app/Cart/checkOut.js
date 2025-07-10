import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const paymentMethods = [
  {
    key: 'visa',
    label: 'Visa or MasterCard',
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
  },
  {
    key: 'amex',
    label: 'American Express',
    img: 'https://logos-world.net/wp-content/uploads/2020/11/American-Express-Logo.png',
    tag: 'Cashback',
  },
  {
    key: 'cashapp',
    label: 'Cash App',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO0_qSVhIwwI-d70gdXeIq8Nh3fU1IdMG0_brhZkXEXax3C2lt2BSL9xYVnvDFaJuVmY4&usqp=CAU',
    tag: 'The best payment system',
  },
  {
    key: 'paypal',
    label: 'PayPal',
    img: 'https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png',
  },
];

const topUpOptions = [25, 50, 100, 200];

const CheckoutScreen = () => {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState('paypal');
  const [amount, setAmount] = useState(100);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
      </View>

      {/* Content */}
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Choose a payment method</Text>

        {/* Payment methods grid */}
        <View style={styles.methodGrid}>
          {paymentMethods.map((m) => (
            <TouchableOpacity
              key={m.key}
              style={[styles.methodCard, selectedMethod === m.key && styles.methodSelected]}
              onPress={() => setSelectedMethod(m.key)}
            >
              {m.tag && (
                <View style={styles.tagBadge}>
                  <Text style={styles.tagText}>{m.tag}</Text>
                </View>
              )}
              <Image
                source={{ uri: m.img }}
                style={[styles.methodLogo, m.key === 'paypal' && styles.paypalLogo]}
                resizeMode="contain"
              />
              <Text style={styles.methodLabel}>{m.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Amount */}
        <View style={styles.amountBox}>
          <Text style={styles.amountText}>{amount}</Text>
          <Text style={styles.pointsText}>
            You will be awarded <Text style={{ color: '#00a3ff' }}>{amount}</Text> points for your purchase
          </Text>
        </View>

        {/* Top-up options */}
        <Text style={styles.topUpTitle}>Top-up amount</Text>
        <View style={styles.topUpRow}>
          {topUpOptions.map((val) => (
            <TouchableOpacity
              key={val}
              style={[styles.topUpBtn, amount === val && styles.topUpSelected]}
              onPress={() => setAmount(val)}
            >
              <Text style={styles.topUpText}>₹ {val}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Pay */}
        <TouchableOpacity style={styles.payBtn} onPress={() => router.push('/Cart/success')}>
          <Text style={styles.payBtnText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentWrapper: {
    flex: 1,
    padding: 20,
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
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000',
  },
  methodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  methodCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eaeaea',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
    alignItems: 'center',
  },
  methodSelected: {
    borderColor: '#00a3ff',
    borderWidth: 2,
  },
  methodLogo: {
    width: 60,
    height: 40,
    marginBottom: 6,
  },
  paypalLogo: {
    width: 80,
    height: 55,
    marginTop: -9,
    marginBottom: -6,
  },
  methodLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  tagBadge: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: '#00a3ff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  tagText: {
    fontSize: 10,
    color: '#fff',
  },
  amountBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 24,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  amountText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
  },
  pointsText: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  topUpTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  topUpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  topUpBtn: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  topUpSelected: {
    backgroundColor: '#00a3ff20',
    borderWidth: 1,
    borderColor: '#00a3ff',
  },
  topUpText: {
    fontSize: 14,
    fontWeight: '600',
  },
  payBtn: {
    backgroundColor: '#0071ce',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  payBtnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
