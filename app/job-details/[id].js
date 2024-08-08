import { Stack,useRouter,useLocalSearchParams, useGlobalSearchParams } from 'expo-router'
import { Text ,View,SafeAreaView,ScrollView,ActivityIndicator,RefreshControl} from 'react-native'
import { useCallback,useState } from 'react'
import {Company,JobAbout,JobFooter,JobTabs,ScreenHeaderBtn,Specifics} from '../../components'
import { COLORS,icons,SIZES } from '../../constants'
import useFetch from '../../hook/useFetch'
import Footer from '../../components/jobdetails/footer/Footer'

const tabs=["About","Qualifications","Responsibilities"]
const JobDetails = () => {
  const params=useGlobalSearchParams()
  const router=useRouter()
  const[refreshing,setRefreshing]=useState(false)
  const onRefresh=()=>{

  }
  const [activeTab,setActiveTab]=useState(tabs[0])
  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });
  console.log("data")
  console.log(data)
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}> 
      <Stack.Screen 
      options={{
        headerStyle:{backgroundColor:COLORS.lightWhite},
        headerShadowVisible:false,
        headerBackVisible:false,
        headerLeft:()=>(
          <ScreenHeaderBtn
          iconUrl={icons.left}
          dimension="10%"
          handlePress={()=>router.back()}
          />
        ),
        headerRight:()=>(
          <ScreenHeaderBtn
          iconUrl={icons.share}
          dimension="60%"
          handlePress={()=>router.back()}
          />
        )
      }}
      >
      </Stack.Screen>
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={
        <RefreshControl
        refreshing={refreshing} onRefresh={onRefresh}
        >
      </RefreshControl>}>
          {isLoading?<ActivityIndicator></ActivityIndicator>:
          error?(
            <Text>Something went wrong</Text>
          ):data.length===0?(
            <Text>
              No data
            </Text>
          ):(
            <View style={{padding:SIZES.medium}}>
              <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              Location={data[0].job_country}
              >

              </Company>
              <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab} 
              data={data[0]}>
              </JobTabs>
            </View>
          )}
      </ScrollView>
      <JobFooter url={data[0]?.apply_options[0].apply_link ?? 'https://careers.google.com/jobs/results/'} />
    </SafeAreaView>
  )
}

export default JobDetails