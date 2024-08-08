import React from 'react'
import { View, Text,TouchableOpacity,FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'
import { act } from 'react'
import Specifics from '../specifics/Specifics'
import About from '../about/About'
const TabContent=({activeTab,data})=>{
  console.log("data.job_description")
  console.log(data.job_highlights)
  switch(activeTab){
    
    case "About":
      console.log(typeof(data.job_highlights))
      return <About title={activeTab} description={data.job_description}/>
    case "Qualifications":
      return <Specifics title={activeTab} points={data.job_highlights?.Qualifications??["N/A"]}/>
    case "Responsibilities":
       return <Specifics title={activeTab} points={data.job_highlights?.Responsibilities??["N/A"]}/>
    default:
      break
    }
}
const TabButton=({name,activeTab,onHandleSearch})=>(
  <View>
  <TouchableOpacity style={styles.btn(name,activeTab)} onPress={onHandleSearch}>
      <Text style={styles.btnText(name,activeTab)}>{name}</Text>
   </TouchableOpacity>
  
  </View>

)
const Tabs = ({tabs,activeTab,setActiveTab,data}) => {
  console.log(tabs)
  return (
    <View>
     <FlatList 
     style={{marginTop:20}}
     data={tabs}
     renderItem={({item})=>(
      <TabButton 
      name={item}
      activeTab={activeTab}
      onHandleSearch={()=>setActiveTab(item)}
      data={data}
      >
      </TabButton>
     )}
     horizontal
     keyExtractor={item=>item}
     />
       <TabContent activeTab={activeTab} data={data}/>
    </View>
  )
}

export default Tabs