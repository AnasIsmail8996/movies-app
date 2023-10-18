import React, { createContext, useContext, useEffect, useState } from 'react'


export const Api_My= `http://www.omdbapi.com/?apikey=b939dadc`;

export const AppContext =createContext()




export const AppProvider =({children})=>{
 
const [isLoading, setIsLoading]=useState(true)
const [movie, setMovie]=useState([])
const [isErorr, setIsErorr] = useState({show:'false', msg: ''})
const [query, setQuery]=useState('titanic')
const getMovies=async(url)=>{
  setIsLoading(true)
    try{
const res= await fetch(url);
const data =await res.json() 
console.log(data);
if(data.Response==='True'){
  setIsLoading(false)
  setIsErorr({
    show:false,
    msg:'',

  })
  setMovie(data.Search)
}else{
  setIsErorr({
    show:true,
    msg:data.Error

  })
}

    }catch(erorr){
console.log(erorr,'something wrong');
    }

}

  useEffect(()=>{
  let timerOut =   setTimeout(()=>{
      getMovies(`${Api_My}&s=${query}`)

    },1000)
    return ()=>clearTimeout(timerOut)
  },[query])
 
  return (
  <AppContext.Provider value={{isLoading, isErorr, movie, query, setQuery,setIsErorr, setIsLoading}}>
      {children}
  </AppContext.Provider>
 )
}

export const GlobalContext=()=>{
  return useContext(AppContext)
}

