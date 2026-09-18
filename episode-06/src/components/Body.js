import RestaurantCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    // Local State Variable - super powerful variable
    const [allRes, setAllRes] = useState([]);

    const [filteredRes, setFilteredRes] = useState([]);

    const [searchText, setSearchText] = useState("");

    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component).

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);

        // Optional Chaining - ?. - if the data is not present then it will not throw an error
        setAllRes(
            json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        setFilteredRes(
            json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };

    // conditional Rendering

    /* 
       if (filteredRes.length === 0) {
           return <Shimmer />;
       }
   */

    return filteredRes.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search for restaurants"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />

                    <button
                        className="search-btn"
                        onClick={() => {
                            // Filter the restaurent cards and update the UI
                            const filteredRestaurent = allRes.filter((res) =>
                                res.info.name
                                    .toLowerCase()
                                    .includes(searchText.trim().toLowerCase())
                            );

                            setFilteredRes(filteredRestaurent);
                        }}
                    >
                        Search
                    </button>

                    <div />
                </div>

                <button
                    className="filter-btn"
                    onClick={() => {
                        // Filter logic here
                        const filteredList = allRes.filter(
                            (res) => res.info.avgRating > 4
                        );

                        setFilteredRes(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>

            <div className="res-container">
                {filteredRes.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        resData={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;