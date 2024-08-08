import { View,Text,ScrollView,SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack,useRouter } from "expo-router";
import { COLORS,SIZES } from "../constants/theme";
import { icons,images } from "../constants";
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from "../components"
import Signupbtn from "../components/common/header/signupbtn";

const Home=()=>{
    const router=useRouter()
    const [searchTerm, setsearchTerm] = useState("")
    return(
        <View style={{flex:1,backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen 
            options={{
                headerStyle:{backgroundColor:COLORS.lightWhite},
                headerShadowVisible:false,
                headerLeft:()=>(
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                ),
                headerRight:()=>(
                    <View style={{flexDirection:'row'}}>
                    <Signupbtn iconUrl={images.profile} dimension="100%"/>
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
                    </View>
                ),
                headerTitle:""
            }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1,padding:SIZES.medium}}>
                    <Welcome
                    searchTerm={searchTerm}
                    setsearchTerm={setsearchTerm}
                    handleClick={()=>{
                        if(searchTerm){
                            router.push(`/search/${searchTerm}`)
                        }
                    }}
                    />
                    <Popularjobs></Popularjobs>
                    <Nearbyjobs/>
                </View>
            </ScrollView>
        </View>
    )
}
export default Home