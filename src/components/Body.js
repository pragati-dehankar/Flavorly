import ReataurantCard, { withPromotedCard } from "./RestaurantCard";
import { useEffect, useState } from "react";   //Hooks
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import CircleRes from "./CircleRes";
import { RES_API } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [heading, setHeading] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const RestaurantCardPromoted = withPromotedCard(ReataurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();

    const resList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurants(resList);
    setFilteredRestaurant(resList);
    setHeading(json?.data?.cards[1]?.card?.card?.header?.title);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>🚫 Please check your Internet connection</h1>;

  // reusable filter handler
  const applyFilter = (filterType) => {
    setActiveFilter(filterType);

    if (filterType === "Veg") {
      setFilteredRestaurant(listOfRestaurants.filter(r => r.info.veg === true));
    } else if (filterType === "Top") {
      setFilteredRestaurant(listOfRestaurants.filter(r => r.info.avgRating > 4));
    } else {
      setFilteredRestaurant(listOfRestaurants);
    }
  };

  // handle search (by name + cuisines)
  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) => {
      const nameMatch = res.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const cuisineMatch = res.info.cuisines?.some((cuisine) =>
        cuisine.toLowerCase().includes(searchText.toLowerCase())
      );

      return nameMatch || cuisineMatch;
    });

    setFilteredRestaurant(filtered);
    setActiveFilter("All"); // reset filter when searching
  };

  return (
    <div className="body w-3/4 m-auto">
      <div>
        <CircleRes />
      </div>

      <div className="pl-9 mb-2">
        <h1 className="font-bold text-2xl">{heading}</h1>
      </div>

      {/* Search + Filters */}
      <div className="filter flex flex-col sm:flex-row justify-between items-center gap-4 m-4">
        
        {/* Search Box */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="border rounded-full px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="🍔 What do you want to eat?"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          {searchText && (
            <button
              className="text-gray-500 hover:text-red-500"
              onClick={() => {
                setSearchText("");
                setFilteredRestaurant(listOfRestaurants);
              }}
            >
              ✖
            </button>
          )}
          <button
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition"
            onClick={handleSearch}
          >
            🔍 Search
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3">
          {["All", "Veg", "Top"].map((filter) => (
            <button
              key={filter}
              onClick={() => applyFilter(filter)}
              className={`px-4 py-2 rounded-lg shadow-md transition ${
                activeFilter === filter
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter === "Top"
                ? "⭐ Top Rated"
                : filter === "Veg"
                ? "🥗 Veg Only"
                : "🍽 All"}
            </button>
          ))}
        </div>
      </div>

      {/* Restaurant List */}
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.length === 0 ? (
          <p className="text-center text-red-500 font-semibold w-full mt-5">
            🚫 No restaurants match your search/filter!
          </p>
        ) : (
          filteredRestaurant.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <ReataurantCard resData={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
