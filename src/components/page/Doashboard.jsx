import React from "react";
import DashboardStatsGrid from "../DashboardStatsGrid";
import TransactionChart from "../TransactionChart";
import RecentOrders from "../RecentOrders";
import BuyerProfilePieChart from "../BuyerProfilePieChart";
import { RightOutlined, PauseOutlined } from "@ant-design/icons";
import { statistics, getHistoryOrder } from "../action/restaurant";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

export default function Dashboard() {
  const dispatch = useDispatch();
  const {top_user, num_top_user, num_order} = useSelector(state=>state.restaurant.statistics)
  const orders = useSelector(state=>state.restaurant.orders);

useEffect(()=>{
  
    async function gethistoryOrder(){
        const action  = await getHistoryOrder(localStorage.getItem("access"))
        dispatch(action);
        console.log(action)
    }
    async function Fstatistics(){
        const action  = await statistics(localStorage.getItem('rid'), localStorage.getItem('access'))
        dispatch(action);
    }
    gethistoryOrder();
    Fstatistics();
}, [])

  return (
    <div>
      <div className="  flex gap-4 w-full px-4 py-4 mb-4 flex-row ">
        <p className="font-medium">DOASHBOARD </p>
        <PauseOutlined />
        <p> Home</p>
        <RightOutlined />
        <p>Doashboard</p>{" "}
      </div>

      <div className="flex flex-col gap-4 p-4">
        <DashboardStatsGrid />
        <div className="flex flex-row gap-4 w-full">
          <TransactionChart num_order={num_order}/>
          <BuyerProfilePieChart top_user={top_user} num_top_user={num_top_user}/>
        </div>
        <div className="flex flex-row gap-4 w-full">
          <RecentOrders orders={orders?orders:null}/>
        </div>
      </div>
    </div>
  );
}
