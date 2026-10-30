import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {loggedInUser} = useContext(UserContext);


    // Optional Chaning:
    const { cloudinaryImageId, name, areaName, costForTwo, cuisines, sla, avgRating } = resData?.info;

    return (
        <div className="m-4 p-4 w-60 rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{areaName}</h4>
            <h4>{costForTwo}</h4>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
            <h4>⭐{avgRating}</h4>
            <h4 className="font-bold text-lg">User: {loggedInUser}</h4>
        </div>
    )
}

// Higher Order Component (HOC) - A function which takes a component as an argument and returns a new component with additional functionality.

// input - RestaurantCard => output - RestaurantCardOpened

 export const withOpenLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-400 text-white m-2 p-2 rounded-lg">Open Now</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;