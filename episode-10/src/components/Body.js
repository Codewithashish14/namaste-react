import RestaurantCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

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
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.684973&lng=76.72458329999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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

const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1> Looks like you are offline...Please check your internet connection.</h1>;
    };

    // conditional Rendering
    return filteredRes.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input
                        type="text"
                        className="border border-solid border-black h-6 px-2"
                        placeholder="Search for restaurants"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />

                    <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
                <div className = "search m-4 p-4 flex items-center">
                    <button
                    className="px-4 py-2 bg-gray-100 rounded-lg"
                    onClick={() => {
                        // Filter logic here
                        const filteredList = allRes.filter(
                            (res) => res.info.avgRating > 4.3
                        );

                        setFilteredRes(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
                </div>
                
            </div>

            <div className="flex flex-wrap">
                {filteredRes.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>  <RestaurantCard
                        resData={restaurant}
                    /> </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;