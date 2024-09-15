import {
	HiOutlineViewGrid,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

import { IoChatbubblesSharp } from "react-icons/io5";
import { SlUser } from "react-icons/sl";
import { AiTwotoneLike } from "react-icons/ai";
import { MdOutlineRestaurant } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'users',
		label: 'Users',
		path: '/users',
		icon: <SlUser />
	},
	// {
	// 	key: 'restaurant Reviews',
	// 	label: 'Restaurant Reviews',
	// 	path: '/restaurant',
	// 	icon: <IoChatbubblesSharp />
	// },
	{
		key: 'restaurants',
		label: 'Restaurants',
		path: '/restaurants',
		icon: <MdOutlineRestaurant />
	},
	{
		key: 'wishlists',
		label: 'Wishlists',
		path: '/wishlists',
		icon: <AiTwotoneLike />
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]

export const WISHLIST_ADD_LINKS=[
	{
		key: 'Add wishlist',
		label: 'Add Wishlist',
		path: '/addwishlist',
		icon: <IoMdAdd />
	},
]

// export const RESTAURANT_ADD_LINKS=[
// 	{
// 		key: 'Add restaurant',
// 		label: 'Add Restaurant',
// 		path: '/addrestaurant',
// 		icon: <IoMdAdd />
// 	},
// ]

export const USER_ADD_LINKS=[
	{
		key: 'Add user',
		label: 'Add User',
		path: '/adduser',
		icon: <IoMdAdd />
	},
]
