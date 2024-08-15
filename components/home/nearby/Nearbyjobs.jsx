import {useState} from 'react'
import { View, Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './nearbyjobs.style'
import { COLORS,SIZES } from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'

const NearbyJobs = () => {
  const router=useRouter()
  const data=['https://m.media-amazon.com/images/I/51waOv47fqL._SL1000_.jpg', 'https://m.media-amazon.com/images/I/51EOXCdx+mL._SY575_.jpg','https://m.media-amazon.com/images/I/711R5bfqkHL._SX569_.jpg','https://m.media-amazon.com/images/I/41gsvUhd5XL._SL1000_.jpg','https://m.media-amazon.com/images/I/71657TiFeHL._SX679_.jpg','https://m.media-amazon.com/images/I/51BPKDZpJzL._SX425_.jpg','https://m.media-amazon.com/images/I/6160m6Vo1PL._SX522_.jpg','https://m.media-amazon.com/images/I/41fCDR6pjpL._SX300_SY300_QL70_FMwebp_.jpg','https://m.media-amazon.com/images/I/61MQfvYxpiL._SX425_.jpg','https://m.media-amazon.com/images/I/617WKc6k04L._SX569_.jpg','https://m.media-amazon.com/images/I/31cvz9g0EPL.jpg','https://m.media-amazon.com/images/I/41KwKTpO9EL._SX569_.jpg','https://m.media-amazon.com/images/I/51kyY5T0nKL._SX679_.jpg','https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg','https://m.media-amazon.com/images/I/71uGU7evScL._SX522_.jpg']
  // const {data,isLoading,error}=useFetch('search',{
  //   query: 'Node.js developer in New-York,USA',
  //   page: '1',
  //   num_pages: '1',
  //   date_posted: 'all'
  // })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Based previous purchases</Text>
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