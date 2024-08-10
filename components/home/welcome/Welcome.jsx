import {useState} from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import { icons, SIZES, COLORS, SHADOWS, FONT } from '../../../constants';

const jobTypes = ["Grocery", "Clothing", "Electronics", "Baby-care"];

const Welcome = ({ searchTerm, setsearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-Time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Debaditya</Text>
        <Text style={styles.welcomeMessage}>What are you shopping today?</Text>

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

        <View style={styles.tabContainer}>
          <FlatList 
            data={jobTypes}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={[
                  styles.tab(activeJobType, item), 
                  { 
                    ...SHADOWS.medium, // Apply the shadow
                    shadowColor: COLORS.darkGray, // Customize shadow color
                    shadowOpacity: 0.3, // Customize shadow opacity
                  }
                ]}
                onPress={() => {
                  setActiveJobType(item);
                  // router.push(`/search/${item}`);
                }}
              >
                <Text style={{ color: 'black', fontWeight: FONT.medium }}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
            contentContainerStyle={{ columnGap: SIZES.large }}
            horizontal
            style={{ marginTop: 13 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}

export default Welcome;
