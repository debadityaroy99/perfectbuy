import { View, FlatList,Text } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES } from "../constants/theme";
import { icons, images } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";
import { LinearGradient } from 'expo-linear-gradient';
import Footer from "../components/jobdetails/footer/Footer";
import { Image } from "react-native";
const Home = () => {
  const router = useRouter();
  const [searchTerm, setsearchTerm] = useState("");

  // Prepare data for FlatList, you can use an array with each section of content
  const data = [
    { key: 'welcome', renderItem: () => (
      <Welcome
        searchTerm={searchTerm}
        setsearchTerm={setsearchTerm}
        handleClick={() => {
        //   if (searchTerm) {
        //     router.push(`/search/${searchTerm}`);
        //   }
        router.push('/product/product')
        }}
      />
    )},
    { key: 'popularjobs', renderItem: () => <Popularjobs /> },
    { key: 'nearbyjobs', renderItem: () => <Nearbyjobs /> },
  ];

  return (
    <LinearGradient colors={['#fe5bbe', '#fef4fa','#fff9fd','#ffffff']} style={{ height: "100%",flex:1 }}>
        <Stack.Screen
        options={{
          headerShown:true,   
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="100%" />
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
                <View><Text style={{
                    fontWeight:700,
                    fontSize:20,
                    color:'white',
                    marginRight:17,
                    marginTop:4
                }}>Kurnool</Text>
                      {/* <View style={{}}>
                      <Image source={{uri:icons.location}} style={{ width: 24,
                  height: 24,marginRight:20}}/>
                      </View> */}
                </View>

              <ScreenHeaderBtn iconUrl={images.profile} />
              
            </View>
          ),
          headerTitle: "",
          headerStyle:{backgroundColor:'#ff59bd'}
        }}
      />
      
      <FlatList
        data={data}
        renderItem={({ item }) => item.renderItem()}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: SIZES.medium }}
        // ListHeaderComponent={
        //   <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: SIZES.medium, backgroundColor: '#ff59bd' }}>
        //     <ScreenHeaderBtn iconUrl={icons.menu} dimension="100%" />
        //     <ScreenHeaderBtn iconUrl={images.profile} />
        //   </View>
        // }
      />
      <Footer url={ 'https://careers.google.com/jobs/results/'} />
    </LinearGradient>
  );
};

export default Home;
