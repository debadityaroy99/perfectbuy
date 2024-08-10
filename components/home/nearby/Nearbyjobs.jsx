import {useState} from 'react'
import { View, Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './nearbyjobs.style'
import { COLORS,SIZES } from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'

const NearbyJobs = () => {
  const router=useRouter()
  const data=['https://images-eu.ssl-images-amazon.com/images/I/61jBnY6paeL._AC_UL165_SR165,165_.jpg','https://images-eu.ssl-images-amazon.com/images/I/71XRgDNXulL._AC_UL100_SR100,100_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/I/81uJyMRONOL._AC_UL100_SR100,100_.jpg','https://m.media-amazon.com/images/I/71BsckBgy3L._AC_SY200_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/I/71D3hzqn5rL._AC_UL100_SR100,100_.jpg','https://images-eu.ssl-images-amazon.com/images/I/51rgGjt-lnL._AC_UL100_SR100,100_.jpg',
  'https://m.media-amazon.com/images/I/51ebZJ+DR4L._AC_UL480_FMwebp_QL65_.jpg','https://m.media-amazon.com/images/I/61fOvDZeE3S._AC_UL480_FMwebp_QL65_.jpg','https://m.media-amazon.com/images/I/719N9z702GL._AC_SY200_.jpg']
  // const {data,isLoading,error}=useFetch('search',{
  //   query: 'Node.js developer in New-York,USA',
  //   page: '1',
  //   num_pages: '1',
  //   date_posted: 'all'
  // })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Store favourites</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
    </View>
            <View style={{
        height: 1, // Thickness of the line
        backgroundColor: COLORS.gray, // Color of the line
        width: '100%', // Full width of the screen
        marginVertical: 3, // Optional: add space around the line
        }}/>
    <View style={styles.cardsContainer}>

          <FlatList 
          data={data}
          renderItem={({item})=>(
            <NearbyJobCard
            item={item}
            handleNavigate={()=>{}}
            />
          )}
          keyExtractor={item=>item}
          contentContainerStyle={{columnGap:SIZES.medium}}
          numColumns={3}
          />
    </View>
    {/* <View style={{
    height: 1, // Thickness of the line
    backgroundColor: COLORS.gray, // Color of the line
    width: '100%', // Full width of the screen
    marginVertical: -7, // Optional: add space around the line
    }}/> */}
    </View>
  )
}

export default NearbyJobs