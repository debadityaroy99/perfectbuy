import { View, Text,Image, Touchable } from 'react-native'
import React, { useState } from 'react'
import icons from '../../constants/icons'
import styles from './signupStyle'
import { Stack } from 'expo-router'
import { COLORS } from '../../constants'
import CustomInput from './customInput'
import Button from './button'
import Forgot from './forgot'
import { SafeAreaView } from 'react-native-safe-area-context'
const SignUp = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  return (
    <View style={styles.container}>
      <Stack.Screen
      options={{
        headerShadowVisible:false,
        headerStyle:{backgroundColor:COLORS.lightWhite},
        headerTitle:"",
      }}
      />

      <View >
        <SafeAreaView>
        <Image
        source={icons.twitter}
        style={styles.logo}
        resizeMode='contain'
        />
        <Text style={{marginLeft:140,marginTop:16,marginBottom:-30,fontSize:20,fontWeight:'bold'}}>
          Walmartify
        </Text>
        <CustomInput placeholder={'user id'} value={username} setValue={setUsername} secureTextEntry={false}/>
        <CustomInput placeholder={'password'} value={password} setValue={setPassword} secureTextEntry={true}/>
        <Forgot></Forgot>
        <Button text={"Sign Up"} bgColor={'#0867c7'} fgColor={'white'}></Button>
        <View style={{marginTop:30}}>
        <Button text={"Sign Up with google"} bgColor={'#FAE9EA'} fgColor={'#DD4D44'}></Button>
        <Button text={"Sign Up with facebook"} bgColor={'#E7EAF4'} fgColor={'#4765A9'}></Button>
        <Button text={"Sign Up with apple"} bgColor={'#e3e3e3'} fgColor={'#363636'}></Button>
        </View>

        </SafeAreaView>
      </View>
    </View>
  )
}


export default SignUp