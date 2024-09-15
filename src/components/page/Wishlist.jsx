import React from "react";
import WishlistOrder from "../WishlistOrder";
import { RightOutlined, PauseOutlined } from "@ant-design/icons";
import { WISHLIST_ADD_LINKS } from '../../components/lib/constants'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getwishlist } from "../action/restaurant";

export default function Wishlist() {
  const wishlist = useSelector(state=>state.restaurant.wishlist)
  const dispatch = useDispatch();
  
  useEffect(()=>{
  
    async function gethistoryOrder(){
        const action  = await getwishlist(localStorage.getItem("access"))
        dispatch(action);
    }
    gethistoryOrder();
}, [])

  return (
    <div>
      <div className="flex">
        <div className="  flex gap-4 w-full px-4 py-4 mb-4 flex-row ">
          <p className="font-medium">WISHLISTS </p>
          <PauseOutlined />
          <p> Home</p>
          <RightOutlined />
          <p>Core</p>
          <RightOutlined />
          <p>Wislists</p>
        </div>
        <div class="flex justify-end w-auto">

            <div className="py-8 flex flex-1 flex-col gap-0.5">
              {WISHLIST_ADD_LINKS.map((link) => (
                <UserLink key={link.key} link={link} />
              ))}
            </div>

        </div>
      </div>

      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-row gap-4 w-full">
          <WishlistOrder recentOrderData={wishlist} />
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


