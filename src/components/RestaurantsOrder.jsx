import React, { useEffect } from "react";
import { Checkbox } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStatusRes } from "./action/restaurant";
import { useParams } from "react-router-dom";

export default function RecentOrders(props) {
  const [checked, setChecked] = useState([]);
  const dispatch = useDispatch();
  const {rid} = useParams();

  const handleCheck = async(e, index) => {
    setChecked({...checked, [index]: e.target.checked});
    const action = await updateStatusRes(e.target.getAttribute("rid"), e.target.checked, localStorage.getItem("access"));
    console.log(action)
    dispatch(action);
  };

  useEffect(()=>{
    let data = []
    if(props.recentOrderData.length>0){
      props.recentOrderData.map((a)=>{
        data.push(a.isActive);
      });
    }
    setChecked(data);
  }, [props.recentOrderData])

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              {/* <th>
                <></>
              </th> */}
              <th>Rid</th>
              <th>Title</th>
              <th>Restaurant image</th>
              <th>Phone</th>
              <th>Time open</th>
              <th>Time close</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {props.recentOrderData.length>0?props.recentOrderData.map((order, index) => (
              <tr key={order.id}>
                {/* <td>
                  <Checkbox id="ripple-on" ripple={true} />
                </td> */}
                <td><a href={`/restaurant/${order.id}`}>{order.id}</a></td>
                <td>{order.title}</td>
                <td className="w-10 h-f"><img src={order.image}></img></td>
                <td>{order.phone}</td>
                <td>{order.time_open}</td>
                <td>{order.time_close}</td>
                <td>
                  <Checkbox id="ripple-on" rid={order.id} checked={checked[index]} onChange={(e)=>handleCheck(e, index)}/>
                </td>
              </tr>
            )):""}
          </tbody>
        </table>
      </div>
    </div>
  );
}
