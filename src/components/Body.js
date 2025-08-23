import ReataurantCard,{withPromotedCard} from "./RestaurantCard";
import { useEffect, useState } from "react";   //Hooks
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import CircleRes from "./CircleRes";
import { RES_API } from "../utils/constants";




const Body=()=>{
   //Local state variable 
  const[listOfRestaurants,setListOfRestaurants]=useState([]);
  //console.log("rendered");
  const[filteredRestaurant,setFilteredRestaurant]=useState([]);
  const[vegList,setVegList]=useState([]);
  const[searchText,setSearchText]=useState("");

  const[heading,setHeading]=useState("");
  
 

  const RestaurantCardPromoted=withPromotedCard(ReataurantCard)

  useEffect(()=>{
      fetchData();
  },[]);

  const fetchData=async()=>{
    console.log(RES_API);
    const data= await fetch(
      RES_API
    //  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.95420&lng=79.30110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
     //"https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json=await data.json();
   

    console.log(json);

setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setVegList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setHeading(json?.data?.cards[1]?.card?.card?.header?.title);
  
//  setHomeInfo(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle)
//console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  //conditional rendering.
  // if(ListOfRestaurants.length===0){
  //   return <Shimmer/>
  // }

// normal js var.

  let listOfRestaurantsJS=[]//unused just for understand.

  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false) return (<h1>!!_Please check your Internet connection_!!</h1>)
    // listOfRestaurants.length===0 ? (): <Shimmer/>
    
    return(
    <div className="body w-3/4 m-auto">

<div >
     <CircleRes/>
    </div>

<div className="pl-9 mb-2">
  <h1 className="font-bold text-2xl">{heading}</h1>
</div>

      <div className="filter flex">
        <div>
        <div className="search m-4 p-4 ">
          <input type="searchBar" className="border border-solid border-black " placeholder="what you want to eat" value={searchText} 
          onChange={(e)=>{
            setSearchText(e.target.value);//e=>event
          }}
          />
        <button  className="px-4 py-1 bg-green-200 m-4 rounded-lg"
        onClick={()=>{
          //filter the Restaurants cards and update the UI.
          console.log(searchText);
         const filteredRestau= listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setFilteredRestaurant(filteredRestau);
        }}
          >Search</button> 
        </div></div>


        {/*  veg filter */}
         <div className="m-4 p-4 flex" >
        <button className="px-2 py-2 m-4 bg-black text-pink-500 rounded-lg"  
        onClick={()=>{
          const filteredVegList= listOfRestaurants.filter(
            (r)=> r.info.veg===true
            )
            setListOfRestaurants(filteredVegList);
          console.log(filteredVegList);
        }}>
          Veg Res
          </button>
          </div>

{/* top rated */}
          <div className="m-4 p-4 flex" >
  <button className="px-2 py-2 m-4 bg-black text-red-800 rounded-lg"  
  onClick={()=>{
    const filteredList= listOfRestaurants.filter(
      (res)=> res.info.avgRating>4
      )
      setListOfRestaurants(filteredList);
    console.log(filteredList);
  }}>
    Top 
    </button>
    </div>



    
      </div>
         <div className="res-container flex flex-wrap">
          {
            filteredRestaurant.map(restaurant=> (
           <Link 
           key={restaurant.info.id}
           to={"/restaurants/"+restaurant.info.id}>
           {
            restaurant.info.promoted ? (<RestaurantCardPromoted resData={restaurant}/>) : (<ReataurantCard resData={restaurant}/>)
           }
           
            </Link> 
            ))
          }
         </div>
    </div>
  );
};

export default Body;