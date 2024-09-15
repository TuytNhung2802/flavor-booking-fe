import React from "react";
import RestaurantOutlet from "../RestaurantOutlet";
import { useParams } from "react-router-dom";
import { RightOutlined, PauseOutlined } from "@ant-design/icons";
import { GET_RESTAURANTDEATAI } from "../action/type";
import { useDispatch, useSelector } from "react-redux";
import { getrestaurantdetail } from "../action/restaurant";
import { useEffect, useState } from "react";

export default function ManageRestaurant1() {
  const dispatch = useDispatch();
  const restaurantDetail = useSelector(
    (state) => state.restaurant.restaurantDetail
  );
  const { rid } = useParams();

  useEffect(() => {
    async function getRestaurant() {
      const action = await getrestaurantdetail(
        rid,
        localStorage.getItem("access")
      );
      dispatch(action);
    }

    getRestaurant();
  }, []);
  return (
    <div>
      <div className="  flex gap-4 w-full px-4 py-4 mb-4 flex-row  ">
        <p className="font-medium">RESTAURANTS </p>
        <PauseOutlined />
        <a> Home</a>
        <RightOutlined />
        <a>Core</a>
        <RightOutlined />
        <a>Restaurants</a>
        <RightOutlined />
        <a>Update Restaurant</a>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 w-full">
          <RestaurantOutlet restaurant={restaurantDetail}/>
        </div>
      </div>
    </div>
  );
}
