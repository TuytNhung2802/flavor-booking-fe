import React from "react";
import RestaurantsOrder from "../RestaurantsOrder";
import { RightOutlined, PauseOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { RESTAURANT_ADD_LINKS } from "../../components/lib/constants";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getrestaurant } from "../action/restaurant";

export default function ManageRestaurant() {
  const restaurants = useSelector((state) => state.restaurant.restaurants);
  const dispatch = useDispatch();
  console.log(restaurants);
  useEffect(() => {
    async function gethistoryOrder() {
      const action = await getrestaurant(localStorage.getItem("access"));
      dispatch(action);
    }
    gethistoryOrder();
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="  flex gap-4 w-full px-4 py-4 mb-4 flex-row  ">
          <p className="font-medium">RESTAURANTS </p>
          <PauseOutlined />
          <a> Home</a>
          <RightOutlined />
          <a>Core</a>
          <RightOutlined />
          <a>Restaurants</a>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4 ">
        <div className="flex flex-row gap-4 w-full">
          <RestaurantsOrder recentOrderData={restaurants} />
        </div>
      </div>
    </div>
  );
}
