import React, { useState } from 'react'
import { TouchableOpacity ,Text,StyleSheet, ActivityIndicator} from 'react-native'
import { SIZES,COLORS,FONT } from '../../constants'
import { useRouter } from 'expo-router'

function Button({text,onpress,bgColor,fgColor}) {
    const router=useRouter()
    const [loading,setLoading]=useState(false)
    const handleLogin=()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
        setTimeout(()=>{
        router.push('/loginSuccess')
        },1000)
    }
  return (
    <TouchableOpacity onPress={handleLogin}  style={[styles.applyBtn, { backgroundColor: bgColor }]}>
        {loading?(
            <ActivityIndicator size="large" color='#fff'/>
        ):(
            <Text style={[styles.applyBtnText,{color:fgColor}]}>{text}</Text>
        )}

    </TouchableOpacity>
  )
}

export default Button

const styles=StyleSheet.create({
    applyBtn: {
        width:"91%",
        height:48,
        marginLeft: SIZES.medium,
        padding:1,
        justifyContent: "center",
        alignItems: "center",
        marginTop:15
        },
      applyBtnText:{
        fontSize:20,color:"white",fontWeight:'bold'}
})
