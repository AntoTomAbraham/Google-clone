import React,{useState,useEffect} from 'react'
import API_KEYS from "./Keys"
import {useStateValue} from './StateProvider';


const CONTEXT_KEY='1a330da0b032d4f37'
const  useGoogleSearch = (term) => {
    const [data,setData]=useState(null);
    
    useEffect(()=>{
        const fetchData= async() =>{
            fetch(
                'http://www.googleapis.com/customsearch/v1?key=${API_KEYS}&cx=${CONTEXT_KEY}&q=${term}'
            ).then(response=>response.json())
            .then(result =>{
                setData(result)
            })
        }
        fetchData();
    },[term])
    return { data }
}

export default useGoogleSearch
