import React from "react";
import { RightOutlined, PauseOutlined } from "@ant-design/icons";
import { USER_ADD_LINKS } from '../../components/lib/constants'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import UserOrder from '../UserOrder'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getuser } from "../action/restaurant";

export default function User() {
  const user= useSelector(state=>state.restaurant.user)
  const dispatch = useDispatch();
  console.log(user)
  useEffect(()=>{
  
    async function gethistoryOrder(){
        const action  = await getuser(localStorage.getItem("access"))
        dispatch(action);
        
    }
    gethistoryOrder();
}, [])
  return (
    <div>
      <div className="flex">
        <div className="  flex gap-4 w-full px-4 py-4 mb-4 flex-row ">
          <p className="font-medium">USER </p>
          <PauseOutlined />
          <p> Home</p>
          <RightOutlined />
          <p>Auths</p>
          <RightOutlined />
          <p>Users</p>
        </div>
        <div class="flex justify-end w-auto">

            <div className="py-8 flex flex-1 flex-col gap-0.5">
              {USER_ADD_LINKS.map((link) => (
                <UserLink key={link.key} link={link} />
              ))}
            </div>

        </div>
      </div>

      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-row gap-4 w-full">
          <UserOrder recentUserData={user}/>
        </div>
      </div>
    </div>
  );
}

function UserLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-green-500 text-white' : 'text-neutral-400', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}
const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-green-500 hover:no-underline active:bg-neutral-600 rounded-sm text-base'


