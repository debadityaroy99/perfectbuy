import {useState} from 'react'
import { View, Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './nearbyjobs.style'
import { COLORS,SIZES } from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'

const NearbyJobs = () => {
  const router=useRouter()
  const data=['https://media.about.nike.com/img/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?m=eyJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfSwiZXh0cmFjdCI6eyJsZWZ0IjowLCJ0b3AiOjAsIndpZHRoIjo1MDAwLCJoZWlnaHQiOjI4MTN9LCJyZXNpemUiOnsid2lkdGgiOjY0MH19fQ%3D%3D&s=cc94b2cc61c9c80ba68eb593e20d3bd8345d1ce8817f826c1c3126aae59e7933', 
  'https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg',
  'https://images.samsung.com/is/image/samsung/assets/us/about-us/brand/logo/pc/720_600_1.png?$720_N_PNG$https://m.media-amazon.com/images/I/711R5bfqkHL._SX569_.jpg',
  'https://i.pinimg.com/736x/1e/c1/d2/1ec1d2ce366d1f603b1bde70ae508063.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBwKt-XUzapr_D64qMdOT5L5zD26qmjv5PA&s','https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/GreatValue_logo.jpg/375px-GreatValue_logo.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZIFAtaF2WS-GABJBupblU5maW27peajd8w&s','https://cdn.dribbble.com/userupload/42180759/file/original-de10636ea89f602e3c64b9a96b2d7815.png?resize=400x300','https://media.designrush.com/inspirations/758970/conversions/1-preview.jpg']
  // const {data,isLoading,error}=useFetch('search',{
  //   query: 'Node.js developer in New-York,USA',
  //   page: '1',
  //   num_pages: '1',
  //   date_posted: 'all'
  // })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Top Brand</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
    </View>
            {/* <View style={{
        height: 1, // Thickness of the line
        backgroundColor: COLORS.gray, // Color of the line
        width: '100%', // Full width of the screen
        marginVertical: 3, // Optional: add space around the line
        }}/> */}
    <View style={styles.cardsContainer}>

          <FlatList 
          data={data}
          renderItem={({item})=>(
            <NearbyJobCard
            item={item}
            handleNavigate={()=>{}}
            />
          )}
          keyExtractor={item=>item}
          contentContainerStyle={{columnGap:SIZES.medium}}
          numColumns={3}
          />
    </View>
    {/* <View style={{
    height: 1, // Thickness of the line
    backgroundColor: COLORS.gray, // Color of the line
    width: '100%', // Full width of the screen
    marginVertical: -7, // Optional: add space around the line
    }}/> */}
    </View>
  )
}

export default NearbyJobs