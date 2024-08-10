import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity,Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl,handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image 
      source={iconUrl}
      resizeMode='cover'
      style={{width:35,height:35,tintColor:'white'}}
      />
      
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn