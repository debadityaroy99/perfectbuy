import React from 'react'
import { View, Text ,Image} from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'

const Company = ({companyLogo,jobTitle,companyName,Location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
        source={{
          uri:companyLogo
        }}
        style={styles.logoImage}
        />
        <View>
          <Text style={styles.jobTitle} numberOfLines={2}>
            {jobTitle}
          </Text>
        </View>
        <View style={styles.companyInfoBox}>
          <Text style={styles.companyName}>
              {companyName}
          </Text>
          <View style={styles.locationBox}>
            <Image source={icons.location} 
            resizeMode='repeat'
            style={styles.locationImage}></Image>
            <Text style={styles.locationName}>
              {Location}
            </Text>
          </View>
        </View>
      </View>

    </View>
  )
}

export default Company