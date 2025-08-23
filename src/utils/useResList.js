import React, { useState ,useEffect} from 'react'
// import { RES_LIST } from './constants';

const useResList = (rId) => { 
      const [resInfo,setResInfo]=useState(null);
  //somehow it fetched the data.
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{
   const data=await fetch(RES_LIST+rId);
   const json=await data.json();
   setResInfo(json.data);
   console.log(json);
  }

  return resInfo;
   
  
}

export default useResList