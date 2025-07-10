import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const productMap = {
  '2': {
    title: 'Slim-Fit Blue Shirt',
    price: 230,
    image: require('../../assets/male-fashion/shirt2.webp'),
    subtitle: 'Tennis sneakers for mens',
  },
  '1': {
    title: 'Classic Green Shacket',
    price: 16.00,
    image: require('../../assets/male-fashion/upper.png'),
    subtitle: 'Premium cotton ',
  },
  // include others if needed
};

const DetailScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const product = productMap[id] || productMap['2'];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const [showSizes, setShowSizes] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [measureHighlight, setMeasureHighlight] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Image section */}
      <View style={styles.imageWrapper}>
        <Image source={product.image} style={styles.image} resizeMode="contain" />

        {/* Back button */}
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color="#000" />
        </TouchableOpacity>

        {/* Right side icon column */}
        <View style={styles.rightIcons}>
          {['heart-outline', 'share-social-outline'].map((icon) => (
            <TouchableOpacity key={icon} style={styles.iconBtn}>
              <Ionicons name={icon} size={22} color="#000" />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Virtual Try-on button */}
      <TouchableOpacity style={styles.tryBtn} activeOpacity={0.9} onPress={() => router.push('/online/tryon')}>
        <Text style={styles.tryBtnText}>Virtual Try-on</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ padding: 24 }} showsVerticalScrollIndicator={false}>
        <Text style={styles.badge}>New Arrival</Text>

        <View style={styles.titleRow}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>

        <Text style={styles.subtitle}>{product.subtitle}</Text>
        <Text style={styles.importText}>Import duties included</Text>

        {/* Custom measure button */}
        <TouchableOpacity
          style={[styles.customBtn, measureHighlight && styles.customBtnActive]}
          activeOpacity={0.8}
          onPress={() => {
            setMeasureHighlight(true);
            setTimeout(() => setMeasureHighlight(false), 300);
            // simulate measurement delay then set size to M
            setTimeout(() => {
              setSelectedSize('M');
              setShowSizes(false);
            }, 1000);
          }}
        >
          <Text style={[styles.customBtnText, measureHighlight && styles.customBtnTextActive]}>Custom Measure</Text>
        </TouchableOpacity>

        {/* Size selector */}
        <TouchableOpacity
          style={styles.sizeSelector}
          activeOpacity={0.8}
          onPress={() => setShowSizes((prev) => !prev)}
        >
          <Text style={styles.sizeSelectorText}>
            {selectedSize ? `Size: ${selectedSize}` : 'Select your size'}
          </Text>
          <Ionicons
            name={showSizes ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#000"
          />
        </TouchableOpacity>

        {/* Dropdown */}
        {showSizes && (
          <View style={styles.dropdown}>
            {sizes.map((sz) => (
              <TouchableOpacity
                key={sz}
                style={styles.sizeOption}
                onPress={() => {
                  setSelectedSize(sz);
                  setShowSizes(false);
                }}
              >
                <Text style={styles.sizeOptionText}>{sz}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Add to bag */}
        <TouchableOpacity style={styles.addBtn} activeOpacity={0.9}>
          <Text style={styles.addBtnText}>Add to bag</Text>
        </TouchableOpacity>

        {/* Product details header */}
        <Text style={styles.sectionHeader}>Product Details</Text>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  imageWrapper: {
    width: '100%',
    height: 350,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },
  image: {
    width: '110%',
    height: '110%',
    marginTop:30
  },
  backBtn: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 4,
    elevation: 3,
  },
  rightIcons: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
  iconBtn: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 6,
    marginBottom: 12,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    color: '#888',
    marginBottom: 4,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  importText: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  sizeSelector: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 56,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 28,
  },
  sizeSelectorText: {
    fontSize: 16,
  },
  addBtn: {
    marginTop: 16,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionHeader: {
    marginTop: 43,
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginTop: 8,
    overflow: 'hidden',
  },
  sizeOption: {
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  sizeOptionText: {
    fontSize: 16,
    color: '#000',
  },
  customBtn: {
    marginTop: 16,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#0066FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customBtnActive: {
    backgroundColor: '#0066FF',
    borderStyle: 'solid',
  },
  customBtnText: {
    fontSize: 16,
    color: '#0066FF',
    fontWeight: 'bold',
  },
  customBtnTextActive: {
    color: '#fff',
  },
  tryBtn: {
    marginTop: 16,
    alignSelf: 'center',
    width: '60%',
    height: 56,
    borderRadius: 28,
    backgroundColor: '#0066FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 