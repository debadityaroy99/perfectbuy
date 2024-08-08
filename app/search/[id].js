import {useState} from 'react'
import { View, Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
import { useGlobalSearchParams, useRouter } from 'expo-router'
import styles from '../../components/home/nearby/nearbyjobs.style'
import { COLORS,SIZES } from '../../constants'
import { NearbyJobCard } from '../../components'
import useFetch from '../../hook/useFetch'

const NearbyJobs = () => {
  const router=useRouter()
  const params=useGlobalSearchParams()
  const {data,isLoading,error}=useFetch('search',{
    query: params.id,
    page: '1',
    num_pages: '1',
    date_posted: 'all'
  })
  return (
    <View >
      <View style={styles.header}>
        <View style={{flexDirection:'column'}}>
        <Text style={styles.title}>{params.id}</Text>
        <Text style={styles.headerTitle}>Job Oppurtunities</Text>
        </View>
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