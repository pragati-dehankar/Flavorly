import {CDN_URL} from "../utils/constants"

const ReataurantCard=(props)=>{
  //console.log(props);
  const {resData}=props;

  const{
cloudinaryImageId,
    name,
    avgRating,
    sla,
    cuisines,
    costForTwo,    
    aggregatedDiscountInfoV3
  }=resData?.info;

  const styleCard={
    backgroundColor:"#f0f0f0",
  };

  return(
    <div className="m-5 p-5 w-[290px] shadow-xl bg-gray-50 hover:bg-white  hover:w-[295px]  rounded-xl h-[350px]">
      <img
       className="res-img rounded-lg w-[230px] h-[150px]"
      alt="res-logo"
      src={CDN_URL+ cloudinaryImageId}
      />
      <div className=""></div>
      
     <h3  className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="font-bold">⭐⭐{avgRating}&nbsp;Stars&nbsp;&nbsp;&nbsp;&nbsp;{sla.deliveryTime}mins</h4>
    <div className="overflow-x-hidden scrroll-0">{cuisines.join(",")}</div>{costForTwo}
   
   
    </div>
  
  )
};


//Higher order Components

export const withPromotedCard=(ReataurantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <ReataurantCard {...props}/>
      </div>
    )
  }
}

export default ReataurantCard;