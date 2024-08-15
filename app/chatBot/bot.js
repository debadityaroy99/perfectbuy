import Sheet from './botSheet'
import { View, Text } from 'react-native'
import React, { useState } from 'react'

const Bot = ({onClose}) => {
    const [state,setState]=useState(false)
  return (
      <Sheet onClose={onClose}/>
  )
}

export default Bot