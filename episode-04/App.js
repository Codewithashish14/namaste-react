import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * --Logo
 * --Nav items
 * Body
 * --Search
 * --Restaurant Container
 * --Restaurant Card
 *    --Image
 *    --Name of Restaurant, Star Rating, Cusines, delivery time, Cost for two
 * Footer
 * --Copyright
 * --Links
 * --Address
 * --Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.pixabay.com/photo/2017/02/17/17/33/food-2074638_640.png" alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};


/** Passing props to a component is similar to passing arguments to a function.
 * Props are used to pass data from a parent component to a child component. 
 *  In this case, the RestaurantCard component is receiving a prop called resData,
 * which contains information about a restaurant. 
 * The component then uses this data to render the restaurant's details, 
 * such as its name, area, cuisines, and average rating.
 */

const RestaurantCard = (props) => {
    const { resData } = props;


    // Optional Chaning:
    const {cloudinaryImageId, name, areaName, cuisines, avgRating} = resData?.info;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            {/* Cloudinary (For Image) :- It is a service that provides image optimization and delivery. 
            CDN stands for Content Delivery Network and is used to deliver content to users quickly and efficiently. 
            CDN is used to deliver the images*/}
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{areaName}</h4>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>⭐{avgRating}</h4>
        </div>
    )
}

// Config-driven UI : The UI is driven by a configuration object that contains the data to be displayed.

const resList = [
    {
        "info": {
            "id": "202844",
            "name": "Diana IceCream",
            "cloudinaryImageId": "xfscdoisq4pwosyzvaib",
            "locality": "Khera Road",
            "areaName": "Phagwara Central",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Chinese",
                "Mughlai"
            ],
            "avgRating": 4.1,
            "parentId": "192150",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 2.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 22:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/spice-n-cool-ridzee-icecream-khera-road-phagwara-central-phagwara-202844",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "785441",
            "name": "Muscleholics",
            "cloudinaryImageId": "87d7877e4ca8634bcf01b01ca4445061",
            "locality": "Hargobind Nagar",
            "areaName": "Phagwara Central",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "Salads",
                "Healthy Food"
            ],
            "avgRating": 4.5,
            "parentId": "142137",
            "avgRatingString": "4.5",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/muscleholics-hargobind-nagar-phagwara-central-phagwara-785441",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "524229",
            "name": "Shama Chicken Corner",
            "cloudinaryImageId": "mbdrjxyklv646hnsiirj",
            "locality": "Singla Market",
            "areaName": "Phagwara Central",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Biryani",
                "Hyderabadi",
                "Mughlai"
            ],
            "avgRating": 4.4,
            "parentId": "13769",
            "avgRatingString": "4.4",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 23:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                        "description": "OnlyOnSwiggy"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "OnlyOnSwiggy",
                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/shama-chicken-corner-singla-market-phagwara-central-phagwara-524229",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "550574",
            "name": "Hungry Point",
            "cloudinaryImageId": "cpvhd5vcrac9d5ai0vta",
            "locality": "Hargobind Nagar",
            "areaName": "Phagwara Central",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Italian",
                "Pizzas",
                "Burgers",
                "Beverages"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "5290",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/hungry-point-hargobind-nagar-phagwara-central-phagwara-550574",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "196185",
            "name": "Pizza Country",
            "cloudinaryImageId": "qz5a5ieamhqgiwygrnrl",
            "locality": "Guru Hargobind Nagar",
            "areaName": "Phagwara Central",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Pizzas",
                "Italian"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "158473",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-country-guru-hargobind-nagar-phagwara-central-phagwara-196185",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "567246",
            "name": "Baba Chicken",
            "cloudinaryImageId": "uvhcgg7i2lkfrnmgtzsd",
            "locality": "Model Town",
            "areaName": "Phagwara Central",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Tandoor",
                "Punjabi"
            ],
            "avgRating": 4.3,
            "parentId": "5285",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/baba-chicken-model-town-phagwara-central-phagwara-567246",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "196700",
            "name": "Pizza World",
            "cloudinaryImageId": "ypmz0ffpkqwqbeshm5q4",
            "locality": "Daddal Mohalla",
            "areaName": "Phagwara Central",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "9468",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 22:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-world-daddal-mohalla-phagwara-central-phagwara-196700",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "395763",
            "name": "Saini Veg Dhaba",
            "cloudinaryImageId": "j1gpleuypqjdpc3i1w76",
            "locality": "Hoshiarpur Road",
            "areaName": "Phagwara Central",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "254291",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 41,
                "lastMileTravel": 0.8,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "0.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/saini-veg-dhaba-hoshiarpur-road-phagwara-central-phagwara-395763",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "153922",
            "name": "Roll Express",
            "cloudinaryImageId": "cyqpvzbgzgupvvqa1vkt",
            "locality": "Nanak Nagari \n",
            "areaName": "Law gate",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Rolls & Wraps",
                "Kebabs",
                "Chinese",
                "Italian"
            ],
            "avgRating": 4.6,
            "parentId": "16561",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 9.4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "9.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/roll-express-nanak-nagari-law-gate-phagwara-153922",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "490968",
            "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/d86aa020-faad-4863-820d-a2d759c7a7a3_490968.JPG",
            "locality": "Udham Singh Nagar",
            "areaName": "Phagwara Law Gate",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Ice Cream Cakes"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "582",
            "avgRatingString": "4.6",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 9.3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "9.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-udham-singh-nagar-phagwara-law-gate-phagwara-490968",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "506879",
            "name": "PB 36 Rolls",
            "cloudinaryImageId": "jcp2rchsvftyjcxznl3e",
            "locality": "Guru Hargobind Nagar",
            "areaName": "Phagwara Central",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Rolls & Wraps",
                "Pizzas",
                "Burgers",
                "Chinese"
            ],
            "avgRating": 4.3,
            "parentId": "303517",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 22:15:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pb-36-rolls-guru-hargobind-nagar-phagwara-central-phagwara-506879",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "214083",
            "name": "Big 7 Food Plaza",
            "cloudinaryImageId": "hmkfi1mryrmmgtw93beg",
            "locality": "Hargobind Nagar",
            "areaName": "Phagwara Central",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Pizzas"
            ],
            "avgRating": 4.2,
            "parentId": "45424",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹120 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/big-7-food-plaza-hargobind-nagar-phagwara-central-phagwara-214083",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "200777",
            "name": "PiZZA ViRUS -Hunger is a Deadly Virus",
            "cloudinaryImageId": "prn6ssay5dfmbjhs6wjn",
            "locality": "Law Gate Road",
            "areaName": "Phagwara",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.2,
            "parentId": "159035",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 45,
                "lastMileTravel": 10.9,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "10.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-virus-hunger-is-a-deadly-virus-law-gate-road-phagwara-phagwara-200777",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "674242",
            "name": "Saini Vaishno Dhaba",
            "cloudinaryImageId": "3e958364749c3013e178c7472110fc93",
            "locality": "Patel Nagar",
            "areaName": "Phagwara Central",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Punjabi"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "319518",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 22:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/saini-vaishno-dhaba-patel-nagar-phagwara-central-phagwara-674242",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "207405",
            "name": "Master Chef Fast Food",
            "cloudinaryImageId": "bzl9r76teclhpjdkse84",
            "locality": "Guru Hargobind Nagar",
            "areaName": "Phagwara Central",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Chinese",
                "Snacks"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "133310",
            "avgRatingString": "4.2",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/master-chef-fast-food-guru-hargobind-nagar-phagwara-central-phagwara-207405",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "476625",
            "name": "Get Together",
            "cloudinaryImageId": "k4utyk6mzlupvsa5tdda",
            "locality": "G T Road",
            "areaName": "Phagwara Law Gate",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Biryani"
            ],
            "avgRating": 4.1,
            "parentId": "87036",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 40,
                "lastMileTravel": 9.3,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "9.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/get-together-g-t-road-phagwara-law-gate-phagwara-476625",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "474995",
            "name": "GCF The Chaap Hub",
            "cloudinaryImageId": "how1rebycziowrruz4xd",
            "locality": "Banga Road ",
            "areaName": "Phagwara Central",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Punjabi",
                "Tandoor"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "86841",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 16,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/gcf-the-chaap-hub-banga-road-phagwara-central-phagwara-474995",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "168618",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
            "locality": "Guru Hargobind Nagar",
            "areaName": "Phagwara Central",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "2456",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 2.6,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-guru-hargobind-nagar-phagwara-central-phagwara-168618",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "159516",
            "name": "King Malai Champ",
            "cloudinaryImageId": "fv1uiq7uoe5r0dlkbt0l",
            "locality": "Post office Road",
            "areaName": "Phagwara Central",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "North Indian"
            ],
            "avgRating": 4.5,
            "parentId": "118367",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/king-malai-champ-post-office-road-phagwara-central-phagwara-159516",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "207839",
            "name": "ASF (American Style Fried)",
            "cloudinaryImageId": "l3tbbqdj073ucuwioles",
            "locality": "Mandi Road",
            "areaName": "Phagwara Central",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "American",
                "Snacks",
                "Fast Food",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "36699",
            "avgRatingString": "4.2",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-08-13 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/asf-american-style-fried-mandi-road-phagwara-central-phagwara-207839",
            "type": "WEBLINK"
        }
    }
];


// not using key (not acceptable) <<<<<<<<< Index as key <<<<<<<<< Unique id (best practice)

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}


const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);