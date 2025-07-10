import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES } from "../../constants/theme";
import { ScreenHeaderBtn } from '../../components';
import { icons } from '../../constants';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const CARD_SIZE = (width - 48 - 16) / 2; // paddingHorizontal 24 + gap 16

const products = [
  {
    id: '1',
    title: 'Classic Green Shacket',
    image: require('../../assets/male-fashion/upper.png'),
  },
  {
    id: '2',
    title: 'Slim-Fit Blue Shirt',
    image: require('../../assets/male-fashion/shirt2.webp'),
  },
  {
    id: '3',
    title: 'Striped Casual Shirt',
    image: require('../../assets/male-fashion/shirt3.webp'),
  },
  {
    id: '4',
    title: 'Elegant Pink Oxford',
    image: require('../../assets/male-fashion/shirt4.webp'),
  },
  {
    id: '5',
    title: 'Modern Yellow Tee',
    image: require('../../assets/male-fashion/shirt5.webp'),
  },
  {
    id: '6',
    title: 'Black Chino Pants',
    image: require('../../assets/male-fashion/pant1.webp'),
  },
];

const categories = ['Fashion', 'Electronics', 'Books', 'Home', 'Kids'];

const OnlineScreen = () => {
  const [activeDiscount, setActiveDiscount] = useState('Fashion');
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 1 hr flash sale
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (n) => `${n}`.padStart(2, '0');
  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;

  return (
    <LinearGradient colors={['#dfccf0', '#efe6f8','#fff9fd','#ffffff']} style={{ height: "100%",flex:1 }}>
              <Stack.Screen
        options={{
          headerShown:true,   
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "",
          headerStyle:{backgroundColor:'#dfccf0'}
        }}
      />

      {/* Top banner background */}
      {/* <View style={styles.blueShape} /> */}

      {/* Header */}
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.headerTitle}>Flash Sale</Text>
          <Text style={styles.headerSub}>Choose Category</Text>
        </View>

        {/* Timer */}
        <View style={styles.timerBox}>
          <Text style={styles.timerIcon}>⏱️</Text>
          <Text style={styles.timerText}>{format(h)} {format(m)} {format(s)}</Text>
        </View>
      </View>

      {/* Discount tabs */}
      <View style={styles.discountRow}>
        {categories.map((d) => (
          <TouchableOpacity
            key={d}
            style={[styles.discountTab, d === activeDiscount && styles.discountTabActive]}
            onPress={() => setActiveDiscount(d)}
          >
            <Text style={[styles.discountLabel, d === activeDiscount && styles.discountLabelActive]}>{d}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Product list with scrolling header */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 16, marginBottom: 16 }}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 120 }}
        ListHeaderComponent={() => (
          <>
            {/* Full-width dotted card button */}
            <TouchableOpacity style={styles.fullCard} activeOpacity={0.8}>
              <Text style={styles.fullCardText}>Custom Measure</Text>
            </TouchableOpacity>

            {/* Section title */}
            <Text style={styles.sectionTitle}>{activeDiscount === 'All' ? 'All Products' : `${activeDiscount} `}</Text>
          </>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => router.push(`/online/${item.id}`)}>
            <Image source={item.image} style={styles.cardImage} />
            <Text numberOfLines={2} style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardPrice}>$16.00 <Text style={styles.oldPrice}>₹20.00</Text></Text>
          </TouchableOpacity>
        )}
      />

      {/* Bottom navigation bar */}
      <View style={styles.bottomBar}>
        {[
          { key: 'home', icon: 'home-outline' },
          { key: 'fav', icon: 'heart-outline' },
          { key: 'list', icon: 'reorder-three-outline' },
          { key: 'box', icon: 'cube-outline' },
          { key: 'profile', icon: 'person-outline' },
        ].map((item) => (
          <TouchableOpacity key={item.key} style={styles.bottomIconBtn}>
            <Ionicons name={item.icon} size={28} color={item.key === 'home' ? '#0066FF' : '#000'} />
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  );
};

export default OnlineScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  blueShape: {
    position: 'absolute',
    top: 0,
    right: -100,
    width: 300,
    height: 220,
    backgroundColor: '#0066FF',
    borderBottomLeftRadius: 160,
    borderBottomRightRadius: 160,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  headerSub: {
    fontSize: 14,
    color: '#555',
  },
  timerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    elevation: 2,
  },
  timerIcon: {
    marginRight: 4,
  },
  timerText: {
    fontWeight: 'bold',
  },
  discountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 20,
  },
  discountTab: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  discountTabActive: {
    backgroundColor: '#0066FF',
  },
  discountLabel: {
    fontSize: 12,
    color: '#555',
  },
  discountLabelActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 24,
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  card: {
    width: CARD_SIZE,
  },
  cardImage: {
    width: '100%',
    height: CARD_SIZE,
    borderRadius: 12,
  },
  cardTitle: {
    fontSize: 12,
    color: '#333',
    marginTop: 4,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 2,
  },
  oldPrice: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  fullCard: {
    marginHorizontal: 24,
    marginTop: 16,
    height: 120,
    borderRadius: 16,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#0066FF',
    backgroundColor: '#f9fbff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullCardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066FF',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  bottomIconBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
