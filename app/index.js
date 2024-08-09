import { View, Text, FlatList, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES } from "../constants/theme";
import { icons, images } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";
import Signupbtn from "../components/common/header/signupbtn";
import SplashScreen from "../components/common/splashScreen";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setsearchTerm] = useState("");
  const [isShowSplash,setIsShowSplash]=useState(true)
  // Prepare data for FlatList, you can use an array with each section of content
  const data = [
    { key: 'welcome', renderItem: () => (
      <Welcome
        searchTerm={searchTerm}
        setsearchTerm={setsearchTerm}
        handleClick={() => {
          if (searchTerm) {
            router.push(`/search/${searchTerm}`);
          }
        }}
      />
    )},
    { key: 'popularjobs', renderItem: () => <Popularjobs /> },
    { key: 'nearbyjobs', renderItem: () => <Nearbyjobs /> },
  ];
useEffect(()=>{
    setTimeout(()=>{
        setIsShowSplash(false)
    },3000)
})

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    {isShowSplash?<SplashScreen/>:
    <View >
      <Stack.Screen
        options={{
          headerShown:!isShowSplash,   
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="100%" />
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Signupbtn iconUrl={images.profile}  />
              <ScreenHeaderBtn iconUrl={images.profile} />
            </View>
          ),
          headerTitle: "",
        }}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => item.renderItem()}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: SIZES.medium }}
      />
    </View>}
    </View>
  );
};

export default Home;
