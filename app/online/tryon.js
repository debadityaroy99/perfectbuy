import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const images = [
  require('../../assets/male-fashion/tushar.jpg'),
  require('../../assets/male-fashion/tushar2.jpg'),
  require('../../assets/male-fashion/tushar3.jpg'),
  require('../../assets/male-fashion/tushar4.jpg'),
  require('../../assets/male-fashion/tushar5.jpg'),
  require('../../assets/male-fashion/shirt3.webp'),
  require('../../assets/male-fashion/shirt4.webp'),
];

const TryOnScreen = () => {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState(null);

  const data = images.map((img, idx) => ({ img, key: `img-${idx}` }));

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.photoWrapper,
        selectedKey === item.key && styles.photoWrapperActive,
      ]}
      onPress={() => setSelectedKey(item.key)}
      activeOpacity={0.9}
    >
      <Image source={item.img} style={styles.thumbnail} />
      <Ionicons
        name={selectedKey === item.key ? 'checkmark-circle' : 'ellipse-outline'}
        size={18}
        color={selectedKey === item.key ? '#0066FF' : '#bbb'}
        style={styles.checkIcon}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select photos</Text>
      </View>

      {/* Label row */}
      <View style={styles.labelRow}>
        <Text style={styles.sectionLabel}>Yesterday</Text>
        <TouchableOpacity onPress={() => setSelectedKey('album')}> 
          <Ionicons
            name={selectedKey === 'album' ? 'checkmark-circle' : 'ellipse-outline'}
            size={24}
            color={selectedKey === 'album' ? '#4CAF50' : '#bbb'}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 12 ,marginTop:16}}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 120 }}
      />


      {selectedKey && (
        <TouchableOpacity style={styles.uploadBtn} activeOpacity={0.9} onPress={() => router.push('/online/result')}>
          <Text style={styles.uploadBtnText}>Upload this Image</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TryOnScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#1a1a1a',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  sectionLabel: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 8,
  },
  labelRow: {
    marginTop: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  photoWrapper: {
    position: 'relative',
    marginBottom: 4,
    borderRadius: 4,
  },
  photoWrapperActive: {
    borderWidth: 2,
    borderColor: '#0066FF',
  },
  thumbnail: {
    width: (Dimensions.get('window').width - 16 * 2 - 8 * 2) / 3,
    height: (Dimensions.get('window').width - 16 * 2 - 8 * 2) / 3,
    borderRadius: 4,
  },
  checkIcon: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
  checkIconTouchable: {
    display: 'none',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  uploadBtn: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 20,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0066FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 