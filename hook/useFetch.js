import { useState,useEffect } from "react";
import axios from "axios";
// import {RAPID_API_KEY} from '@env'
// const rapidApiKey=RAPID_API_KEY
const useFetch=(endpoint,query)=>{
    const [data,setData]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)

const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
   headers: {
    'x-rapidapi-key': '65d590d101mshe99c3ff21ef4113p1b6d43jsnac06b85675dc',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  },
   params: {...query},

};

const fetchData=async()=>{
    setIsLoading(true)

    try{
        const response=await axios.request(options)
        setData(response.data.data)
    } catch(error){
            setError(error)
            // alert("There is an error")
    }finally{
        setIsLoading(false)
    }
}

useEffect(()=>{
    fetchData()
},[])

const refetch=()=>{
    setIsLoading(true)
    fetchData()
}
return {data,isLoading,error,refetch}
}
export default useFetch 