import {useState} from 'react'
import { View, Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './nearbyjobs.style'
import { COLORS,SIZES } from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'

const NearbyJobs = () => {
  const router=useRouter()
  const {data,isLoading,error}=useFetch('search',{
    query: 'Node.js developer in New-York,USA',
    page: '1',
    num_pages: '1',
    date_posted: 'all'
  })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colos={COLORS.primary}/>
        ):error?(
          <Text>Something went wrong</Text>
        ):(
          <FlatList 
          data={data}
          renderItem={({item})=>(
            <NearbyJobCard
            item={item}
            handleNavigate={()=>router.push(`/job-details/${item.job_id}`)}
            />
          )}
          keyExtractor={item=>item?.job_id}
          contentContainerStyle={{columnGap:SIZES.medium}}
          vertical
          />
        )}
    </View>
    </View>
  )
}

export default NearbyJobs