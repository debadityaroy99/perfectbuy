import {useState} from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import { icons, SIZES, COLORS, SHADOWS, FONT } from '../../../constants';
import Footer from "../../jobdetails/footer/Footer";
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { label: 'Fashion', icon: 'shirt-outline' },
  { label: 'Fitness', icon: 'barbell-outline' },
  { label: 'Living', icon: 'tv-outline' },
  { label: 'Games', icon: 'game-controller-outline' },
  { label: 'Stationery', icon: 'pencil-outline' },
];

const Welcome = ({ searchTerm, setsearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeCat, setActiveCat] = useState('');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Hello Tushar</Text>
        {/* <Text style={styles.welcomeMessage}>What are you shopping today?</Text> */}

        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput 
              style={styles.searchInput}
              value={searchTerm}
              onChangeText={(item) => setsearchTerm(item)} 
              placeholder='what are you looking for'
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
            <Image 
              source={icons.search}
              resizeMode='contain'
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop:10,marginLeft:5}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Categories</Text>
        </View>
        <View style={{ marginTop: 15 ,marginLeft:10}}>
          <FlatList
            data={categories}
            horizontal
            keyExtractor={(item) => item.label}
            contentContainerStyle={{ columnGap: 16 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ alignItems: 'center' }}
                onPress={() => setActiveCat(item.label)}
              >
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 12,
                    backgroundColor: '#ffffff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: activeCat === item.label ? 2 : 0,
                    borderColor: '#0066FF',
                  }}
                >
                  <Ionicons
                    name={item.icon}
                    size={24}
                    color={activeCat === item.label ? '#0066FF' : '#4F4F4F'}
                  />
                </View>
                <Text style={{ marginTop: 6, fontSize: 12, color: '#333' }}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <Footer />
      </View>
    </View>
  );
}

export default Welcome;
