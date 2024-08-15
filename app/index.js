import { View, Text, FlatList, SafeAreaView, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES } from "../constants/theme";
import { icons, images } from "../constants";
import { Image } from "react-native";
import styles from "./signup/signupStyle";
import SplashScreen from "../components/common/splashScreen";
import CustomInput from "./signup/customInput";
import Button from "./signup/button";
import Forgot from "./signup/forgot";
const SignUp = () => {
  const router = useRouter();
  const [isShowSplash,setIsShowSplash]=useState(false)
  // Prepare data for FlatList, you can use an array with each section of content
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
// useEffect(()=>{
//     setTimeout(()=>{
//         setIsShowSplash(false)
//     },3000)
// })

  return (

      <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    {isShowSplash?<SplashScreen/>:
    <View >

    <View style={styles.container}>
      <Stack.Screen
      options={{
        headerShown:true,
        headerShadowVisible:false,
        headerStyle:{backgroundColor:COLORS.lightWhite},
        headerTitle:"",
      }}
      />

      <SafeAreaView style={{marginTop:320}}>
        <Image
        source={images.logo
        }
        style={styles.logo}
        resizeMode='contain'
        />
        <Text style={{alignSelf:'center',marginTop:-70,marginBottom:0,fontSize: 18, fontWeight: 'bold',color: '#333'}}>
          ShopSync
        </Text>
        <View style={{marginBottom:190}}>
        <CustomInput placeholder={'Phone Number'} value={username} setValue={setUsername} secureTextEntry={false}/>
        <CustomInput placeholder={'password'} value={password} setValue={setPassword} secureTextEntry={true}/>
        </View>
       <View style={{padding:10,zIndex:1}}>
       <Forgot></Forgot>
       </View>
        <Button text={"Login"} bgColor={'#0867c7'} fgColor={'white'}></Button>
        <View style={{marginTop:30}}>
        <Button text={"Login with google"} bgColor={'#FAE9EA'} fgColor={'#DD4D44'}></Button>
        <Button text={"Login with facebook"} bgColor={'#E7EAF4'} fgColor={'#4765A9'}></Button>
        <Button text={"Login with apple"} bgColor={'#e3e3e3'} fgColor={'#363636'}></Button>
        </View>

      </SafeAreaView>
    </View>
    </View>}
    </View>

  );
};

export default SignUp;
