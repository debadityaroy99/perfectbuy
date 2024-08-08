import { View, Text ,TextInput,StyleSheet} from 'react-native'
import React from 'react'
import { FONT,SIZES } from '../../constants'
import styles from '../../components/home/welcome/welcome.style'
const CustomInput = ({placeholder,value,setValue,secureTextEntry}) => {
  return (
    <View style={{marginTop:-10}}>
        <View style={styles.searchWrapper2}>
            <View>
            <TextInput style={styles.searchInput2} 
            placeholder={placeholder}
            value={value}
            onChangeText={(item)=>setValue(item)}
            secureTextEntry={secureTextEntry}
            />
            </View>
        </View>
    </View>
  )
}

export default CustomInput

