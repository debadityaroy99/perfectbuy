import {useState} from 'react'
import { View, Text,TouchableOpacity,Image,ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS,SIZES } from '../../../constants'

const Popularjobs = () => {
  const router=useRouter()
  // const {data,isLoading,error}=useFetch('search',{
  //   query: 'Node.js developer in New-York,USA',
  //   page: '1',
  //   num_pages: '1',
  //   date_posted: 'all'
  // })
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerTitle}>Offers</Text>
      <TouchableOpacity onPress={()=>router.push('/storeSide')}>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
    </View> */}
    {/* <View style={{
    height: 1, // Thickness of the line
    backgroundColor: COLORS.gray, // Color of the line
    width: '100%', // Full width of the screen
    marginVertical: 4, // Optional: add space around the line
    marginBottom:-4
    }}/> */}

    <View style={{marginTop:-25,paddingHorizontal:12,marginBottom:-36,borderRadius:26}}>
      <Image
        source={require('../../../assets/images/offer.jpg')}
        resizeMode='contain'
        style={{width:'100%',height:180,borderRadius:26}}
      />

      {/* Carousel dots */}
      <View style={{flexDirection:'row', justifyContent:'center', marginTop:-2,marginBottom:12}}>
        {[0,1,2].map((i)=>(
          <View key={i} style={{
            width:6,
            height:6,
            borderRadius:3,
            backgroundColor:i===0?'#0071ce':'#ccc',
            marginHorizontal:4,
          }} />
        ))}
      </View>
    </View>
    </View>
  )
}

export default Popularjobs