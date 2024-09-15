import React from "react";

export default function UserOutlet() {
  return (
    <div className="flex flex-1">
      <div className="bg-white flex-col mr-8 ml-40 border flex flex-auto ">
          <form class="font-medium flex flex-col w-full  p-4 rounded-lg  ">
            {/* password */}
          <div class="flex mb-4">
              <label for="password" class="text-gray-700 mr-2 w-1/4">
                Password:
              </label>
              <input
                type="text"
                id="password"
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
        
            {/* User name */}
            <div class="flex mb-4">
              <label for="username" class="text-gray-700 mr-2 w-1/4">
                Username:
              </label>
              <input
                type="text"
                id="username"
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
          
              {/* Active*/}
              <div class="flex mb-4">
              <label for="time" class="text-gray-700 mr-2 w-1/4">
              Active:
              </label>
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            
            {/* id */}
            <div class="flex mb-4">
              <label for="id" class="text-gray-700 mr-2 w-1/4">
                id:
              </label>
              <input
                type="text"
                id="id"
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* email */}
            <div class="flex mb-4">
              <label for="email" class="text-gray-700 mr-2 w-1/4">
                Email:
              </label>
              <input
                type="text"
                id="email"
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* image */}
            <div class="flex mb-4">
              <label for="file" class="text-gray-700 mr-2 w-1/4">
                Image:
              </label>
              <input
                type="file"
                id="file"
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Full name */}
            <div class="flex mb-4">
              <label for="fullname" class="text-gray-700 mr-2 w-1/4">
                Fullname:
              </label>
              <input
                type="text"
                id="fullname"
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Phone */}
            <div class="flex mb-4">
              <label for="phone" class="text-gray-700 mr-2 w-1/4">
                Phone:
              </label>
              <input
                type="number"
                id="phone"
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Provider */}
            <div class="flex mb-4">
              <label for="email" class="text-gray-700 mr-2 w-1/4">
              Provider:
              </label>
              <input
                type="text"
                id="email"
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
           {/* Address */}
            <div class="flex mb-4">
              <label for="address" class="text-gray-700 mr-2 w-1/4">
                Address:
              </label>
              <input
                type="text"
                id="address"
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </form>
      </div>

      {/* button */}
      <div className="flex flex-col mx-9 ml-auto">
        <button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 border-green-700 text-3xl">
          Save
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4  border-blue-700 text-3xl mt-6 mb-6">
          Save and add another
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4  border-blue-700 text-3xl ">
          Save and continue editing
        </button>
      </div>
    </div>
  );
}
