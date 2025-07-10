import React from 'react'
import { View, Text,TouchableOpacity,Image,Linking } from 'react-native'

import styles from './footer.style'
import { icons } from '../../../constants'
import { useRouter } from 'expo-router'
const Footer2 = () => {
  const router=useRouter()
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heart}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity> */}
      <TouchableOpacity 
      style={styles.applyBtn}
      onPress={()=>router.push('/Cart/cart')}
      >
      <Text style={styles.applyBtnText}>
        Add To Cart
      </Text>
      </TouchableOpacity>
     
    </View>
  )
}

export default Footer2