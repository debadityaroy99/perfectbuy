import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const loginSuccess = () => {
  return (
    <View>
        <Stack.Screen 
        options={{
            headerShown:true,
            headerTitle:" "
        }}/>
      <Text>loginSuccess</Text>
    </View>
  )
}

export default loginSuccess