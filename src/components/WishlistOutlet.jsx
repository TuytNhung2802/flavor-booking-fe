import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FaPenAlt, FaEye } from "react-icons/fa";

export default function WishlistOutlet(props) {
  function handleChangeRes(e) {
    props.setRid(e.target.value);
  }

  function handleChangeUid(e) {
    props.setUid(e.target.value);
  }

  return (
    <div className="flex ">
      <div className="bg-white flex-col mx-36 ">
        {/* User */}
        <div className="flex my-4 mx-3">
          <p className="ml-2 mr-4 w-20">User</p>
          <div class="flex items-center justify-end w-80">
            <div className="font-medium flex-1">
              <form>
                <select
                  onChange={handleChangeUid}
                  id="countries"
                  class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option className="w-16" value="0" selected>
                    -------
                  </option>
                  {props.users && props.users.length > 0
                    ? props.users.map((user, index) => {
                        return <option value={user.id}>{user.username}</option>;
                      })
                    : ""}
                </select>
              </form>
            </div>
          </div>
        </div>
        {/* Restaurant */}
        <div className="flex my-4 mx-3">
          <p className="ml-2 mr-4 w-20">Restaurant </p>
          <div className="flex items-center justify-end w-80">
            <div className="font-medium flex-1">
              <form>
                <select
                  onChange={handleChangeRes}
                  id="countries"
                  class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected value="0">
                    -------
                  </option>
                  {props.restaurants && props.restaurants.length > 0
                    ? props.restaurants.map((restaurant, index) => {
                        return (
                          <option value={restaurant.id}>
                            {restaurant.title}
                          </option>
                        );
                      })
                    : ""}
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
