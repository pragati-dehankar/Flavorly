
import { useState } from "react";
import ResItemList from "./ResItemList";


const ResItemCategory=({data,showResIndex,setShowResIndex})=>{

  return <div>

      <span className="font-bold text-lg">{data.title} </span>
     
      </div>
    { showResIndex &&<ResItemList items={data.cards}/>}
   

   


}

export default ResItemCategory;