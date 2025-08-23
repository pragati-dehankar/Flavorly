import { useState,useEffect } from "react";
import { RES_API } from "./constants";

const useCircleRes=(rId)=>{
  const [homeInfo,setHomeInfo]=useState([]);

useEffect(()=>{
  fetchRes();
},[]);

const fetchRes=async()=>{
const data=await fetch(RES_API+rId);
const json=await data.json();
setHomeInfo(json.data)
console.log(json)
}


return homeInfo;
}

export default useCircleRes;