import React, { useEffect, useState } from 'react';
import { useEffect } from "react";
import { CDN_URL, RES_API } from '../utils/constants';
import { FaArrowCircleLeft, FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from 'react-icons/fa6';
import { transform } from '@babel/core';
import ResList from './ResList';
import { Link } from 'react-router-dom';


const CircleRes = (props) => {

  
  
  const{res}=props;
  const [slide,setSlide]=useState(0);
  const [homeData,setHomeData]=useState([]);
  const[head,setHead]=useState("");

  const nextSlide=()=>{
    console.log(homeData.length);
    if((homeData.length)-8 ===slide) return false;
    setSlide(slide+3);
  }

  const prevSlide=()=>{
    if(slide==0) return false;
    setSlide(slide-3);
  }


  // const{action,imageId}=res?.info;


  useEffect(()=>{
    fetchData();
},[]);

const fetchData=async()=>{
  // const data= await fetch(RES_API);
  const data= await fetch(RES_API);
  const json=await data.json();
  const category=json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle;
 console.log(category.info);
//  console.log(category.info[1].action.text);
//  console.log(category.info[2].action.text);
//  console.log(category.info[0].imageId);
 setHomeData(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
 setHead(json?.data?.cards[0]?.card?.card?.header?.title);
}
//imp
 //w-96 h-16
 //res.action.text}


  return (
<div className='max-w-[1200px] mx-auto'>

<div className='flex my-3 items-center justify-between'>
<div className='pl-9 mb-5'>
       <h1 className='font-bold  text-2xl'>{head}</h1>
      </div>

      <div className='flex'>
        <div className='flex justify-center items-center w-[30px] h-[30px]  rounded-full mx-2 cursor-pointer bg-slate-300' onClick={prevSlide}>
          <FaArrowLeft/>
        </div>
        <div className='flex justify-center items-center w-[30px] h-[30px]  rounded-full mx-2 cursor-pointer  bg-slate-300'onClick={nextSlide} >
        <FaArrowRight />
        </div>

      </div>
</div>


<div className='flex overflow-hidden'>
{
homeData.map((res)=>(
  <Link 
           key={res.id}
           to={"/restaurantsList/"+res.id}>
        <div style={{ transform:`translateX(-${slide*100}% )`}} className=' w-[165px] shrink-0 duration-500'> <img   alt="res-logo" src={CDN_URL+ res.imageId}/> </div>
        </Link>))}
</div>


<hr className="my-6 border-[1px]" />


</div>
  )
}




export default CircleRes;