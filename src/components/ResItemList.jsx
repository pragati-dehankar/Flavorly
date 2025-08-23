import React from 'react';

const ResItemList = (list) => {
  return (
    <div>
      {list.map(item=>(
        <div key={item.card.card.info.id} className="p-2 m-2 border-gray-500 border-b-2 text-left flex justify-between">
          
          <div className="w-9/12">
           <div className="py-2">
            <span>{item.card.card.info.name}</span>
             <h4 className="font-bold">⭐⭐{avgRating}&nbsp;Stars</h4>
            <span> -₹{item.card.card.info.costForTwo}</span>
            </div>
            <div>
              <p className="text-xs">{item.card.card.info.cuisines}</p>
            </div>
            </div>
            <img src={CDN_URL+item.card.card.info.imageId} className="w-full"/>
            </div>
          ))}
          </div>

  )}


export default ResItemList;