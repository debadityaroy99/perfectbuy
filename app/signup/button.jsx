import React from 'react'
import { TouchableOpacity ,Text,StyleSheet} from 'react-native'
import { SIZES,COLORS,FONT } from '../../constants'
function Button({text,onpress,bgColor,fgColor}) {
  return (
    <TouchableOpacity style={[styles.applyBtn, { backgroundColor: bgColor }]}>
        <Text style={[styles.applyBtnText,{color:fgColor}]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles=StyleSheet.create({
    applyBtn: {
        width:"91%",
        marginLeft: SIZES.medium,
        padding:1,
        justifyContent: "center",
        alignItems: "center",
        marginTop:15
        },
      applyBtnText:{
        marginLeft:120,
        fontSize:20,marginLeft:0,color:"white",
        padding:10,fontWeight:'bold'}
})
