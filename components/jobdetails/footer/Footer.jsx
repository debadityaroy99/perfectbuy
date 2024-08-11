import React from 'react'
import { View, Text,TouchableOpacity,Image,Linking } from 'react-native'

import styles from './footer.style'
import { icons } from '../../../constants'
import { useRouter } from 'expo-router'
const Footer = ({url}) => {
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
      onPress={()=>router.push('/barcode-scanner/scanner')}
      >
      <Text style={styles.applyBtnText}>
        Scan Product
      </Text>
      </TouchableOpacity>
     
    </View>
  )
}

export default Footer