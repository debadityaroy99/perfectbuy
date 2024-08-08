import { TouchableOpacity } from "react-native";
import { View,Text } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react'
import { SIZES ,COLORS,FONT} from "../../../constants";
import { useRouter } from "expo-router";

export default function Signupbtn() {
    const router=useRouter()
  return (
<TouchableOpacity style={styles.applyBtn} onPress={()=>router.push(`/signup/signup`)}>
    <Text style={styles.applyBtnText}> SignUp</Text>
</TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    applyBtn: {
        flex: 1,
        backgroundColor: "#FE7654",
        height: "100%",
        width:"80px",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: SIZES.large,
        marginRight: SIZES.medium,
        borderRadius: SIZES.large,
      },
      applyBtnText: {
        fontSize: SIZES.medium,
        color: COLORS.primary,
        fontFamily: FONT.bold,
      }
})