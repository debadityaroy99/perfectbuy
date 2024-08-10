import {useState} from 'react'
import { View, Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS,SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router=useRouter()
  // const {data,isLoading,error}=useFetch('search',{
  //   query: 'Node.js developer in New-York,USA',
  //   page: '1',
  //   num_pages: '1',
  //   date_posted: 'all'
  // })
  const data=['https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/373926/dermdoc-brighten-up-combo-2_1_display_1707461913_cd3441f0.jpg','https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/374025/ny-bae-strobe-skin-tint-combo-medium-skin-strobe-pink-topaz-warm-cashew-foundation-skin-tint-glowy-korean-skin-medium-skin-tone-everyday-makeup-kit-1_8_display_1722600941_ef3d31dd.jpg','https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/374361/alps-goodness-rosemary-hair-growth-duo-with-rosemary-hair-spray-and-essential-oil-i-for-skin-and-hair-i-improves-scalp-health-i-fights-acne_1_display_1708676959_e31d751d.jpg']
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Offers</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
    </View>
    <View style={{
    height: 1, // Thickness of the line
    backgroundColor: COLORS.gray, // Color of the line
    width: '100%', // Full width of the screen
    marginVertical: 4, // Optional: add space around the line
    }}/>

    <View style={styles.cardsContainer}>
          <FlatList 
          data={data}
          renderItem={({item})=>(
            <PopularJobCard
            item={item}
            handleCardPress={()=>{
              router.push(`/job-details/${item.job_id}`)
            }}
            />
          )}
          keyExtractor={item=>item}
          contentContainerStyle={{columnGap:SIZES.medium}}
          horizontal
          showsHorizontalScrollIndicator={false}
          />
    </View>
    </View>
  )
}

export default Popularjobs