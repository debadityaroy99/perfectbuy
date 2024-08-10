import React from 'react'
import { View, Text,TouchableOpacity,Image } from 'react-native'

import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../utils'
const PopularJobCard = ({item,selectedJob,handleCardPress}) => {
  // console.log("helloo")        
  // console.log("value of"+item.employer_logo)
  // console.log("hi")
  return (
    
    <TouchableOpacity  onPress={()=>handleCardPress(item)}>
      <TouchableOpacity style={styles.logoContainer(selectedJob,item)} >

      <Image
          source={{
            uri:item
          }}
          
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.job_title} numberOfLines={2}>
        {item.job_title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard