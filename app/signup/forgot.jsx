import React from 'react'
import { TouchableOpacity ,Text,View} from 'react-native'

function Forgot() {
  return (
    <TouchableOpacity onPress={()=>{alert("chutiye ho kya")}} style={{
        marginLeft:252,
        marginTop:-19,
        }}>
        <Text style={{
            color:"#0861a1",
            fontWeight:'500',
        }}>
            Forgot Password?
        </Text>
    </TouchableOpacity>
  )
}

export default Forgot