import RestaurantCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
     const [filteredRes, setFilteredRes] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                //   Filter logic here
                const filteredList = filteredRes.filter((res) => res.info.avgRating > 4);

                setFilteredRes(filteredList);
                }}>Top Rated Restaurants</button>
                </div>
            <div className="res-container">
                {filteredRes.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;