import React from "react";
import WishlistOutlet from "../WishlistOutlet";
import { RightOutlined, PauseOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addwishlistDetail, getrestaurant, getuser } from "../action/restaurant";
import { ADD_SUCCESS } from "../action/type";
import { useNavigate } from "react-router-dom";

export default function Wishlist1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const restaurants = useSelector(state=>state.restaurant.restaurants);
  const users = useSelector(state=>state.restaurant.user);
  const [uid, setUid] = useState(0);
  const [rid, setRid] = useState(0);

  useEffect(()=>{
    
    async function getRestaurant(){
        const action  = await getrestaurant()
        dispatch(action);
    }

    async function getUser(){
      const action  = await getuser(localStorage.getItem("access"))
      dispatch(action);
  }
  getUser();
  getRestaurant();
}, [])

async function handleAdd(){
  if(uid == 0 || rid ==0){
    alert("Null");
  }else{
    const action = await addwishlistDetail(uid, rid, localStorage.getItem("access"));
    console.log(action)
    if(action.type === ADD_SUCCESS){
      navigate("/wishlists");
    }else{
      alert(action.payload);
    }

  }
}

console.log(uid, rid);
  
  return (
    <div className="flex flex-col gap-4">
      <div className="  flex gap-4 w-full px-4 py-4 mb-4 flex-row ">
        <p className="font-medium">WISHLISTS </p>
        <PauseOutlined />
        <p> Home</p>
        <RightOutlined />
        <p>Core</p>
        <RightOutlined />
        <p>Wislists</p>
        <RightOutlined />
        <p>Add Wishlist</p>
      </div>

      <div className="flex flex-row gap-4 w-full">
        <WishlistOutlet users={users} restaurants={restaurants} setUid={setUid} setRid={setRid}/>
      </div>
      {/* button */}
      <div className="flex flex-col mx-9 ">
        <button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 border-green-700"
        onClick={handleAdd}>
          Save
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4  border-blue-700 mt-6 mb-6">
          Save and add another
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4  border-blue-700 ">
          Save and continue editing
        </button>
      </div>
    </div>
  );
}
