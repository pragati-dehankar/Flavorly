import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useResList from '../utils/useResList';
import Shimmer from './Shimmer';
import { CDN_URL } from '../utils/constants';
import ResItemCategory from './ResItemCategory';
import ResItemList from './ResItemList';

const ResList = () => {
  const {rId}=useParams();

  const resList=useResList(rId);

if(resList===null) return <Shimmer/>

// const {name,cuisines,
//   cloudinaryImageId,
//   costForTwoMessage}=resList?.cards[3]?.card?.card?.info;

  const categories=resList?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.Restaurant");

   console.log(categories);


  return (
    <div className='flex m-5 px-5 w-4/5 flex-wrap shadow-xl'>
    <div className='flex flex-wrap shadow-xl bg-gray-50 hover:bg-white  hover:w-[295px]  rounded-xl '>
{categories.map(item=>(
   <div key={item.card.card.info.id}>
<img
       className="res-img rounded-lg w-[230px] h-[150px]"
      alt="res-logo"
      src={CDN_URL+ item.card.card.info.cloudinaryImageId}
      />
      <div className=""></div>
      
     <h3  className="font-bold py-4 text-lg"> <span>{item.card.card.info.name}</span></h3>
      <h4 className="font-bold">⭐⭐⭐⭐{item.card.card.info.avgRating}&nbsp;Stars&nbsp;&nbsp;&nbsp;&nbsp;{item.card.card.info.sla.deliveryTime}mins</h4>
    <div className="overflow-x-hidden scrroll-0">{item.card.card.info.cuisines.join(",")}</div>-₹{item.card.card.info.costForTwo}
      </div>
))}
</div>
</div>
  )
}

export default ResList