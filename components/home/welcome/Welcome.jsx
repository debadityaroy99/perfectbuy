import {useState} from 'react'
import { View, Text,TextInput,Image,TouchableOpacity,FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons,SIZES } from '../../../constants'

const jobTypes=["Full-Time","Part-Time","Contractor"]
const Welcome = ({searchTerm,setsearchTerm,handleClick}) => {
  const router=useRouter()
  const [activeJobType,setActiveJobType]=useState("Full-Time")
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Debaditya</Text>
        <Text style={styles.welcomeMessage}>Find your dream job</Text>
          <View style={styles.searchContainer}>
              <View style={styles.searchWrapper}>
              <TextInput style={styles.searchInput}
               value={searchTerm}
                onChangeText={(item)=>{setsearchTerm(item)}} 
                placeholder='what are you looking for'></TextInput>
              </View>
              <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
              <Image 
              source={icons.search}
              resizeMode='contain'
              style={styles.searchBtnImage}/>
              </TouchableOpacity>
          </View>
          <View style={styles.tabContainer}>
            <FlatList 
            data={jobTypes}
            renderItem={({item})=>(
              <TouchableOpacity style={styles.tab(activeJobType,item)} onPress={()=>{
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item=>item}
            contentContainerStyle={{columnGap:SIZES.large}}
            horizontal
            >
            </FlatList>
          </View>
      </View>
    </View>
  )
}

export default Welcome