import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CHANGE_RESTAURANT } from "./action/type";
import { change_account } from "./action/restaurant";
import { useNavigate } from "react-router-dom";

export default function RestaurantOutlet(props) {
  const [img, setImg] = useState("");
  const navigator = useNavigate();

  const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        rid:"",
        title: "",
        username:"",
        email:"",
        description: "",
        phone: "",
        address: "",
        time_open: "",
        time_close: "",
        is_hot:"",
        like:""
    });

    const chooseFile = (event) => {
      const fileInput = event.target;
      if (fileInput.files && fileInput.files[0]) {
          setImg(fileInput.files[0]);
          let reader = new FileReader();
          reader.onload = function (e) {
              const imgProfile = document.querySelector('.img-profile');
              imgProfile.setAttribute('src', e.target.result);
          }
          reader.readAsDataURL(fileInput.files[0]);
      }
  }

    useEffect(()=>{
      setFormData({
          ...formData,
          rid: props.restaurant.id,
          title: props.restaurant.title,
          username: props.restaurant.account?props.restaurant.account.username:null,
          description: props.restaurant.description,
          phone: props.restaurant.phone,
          address: props.restaurant.address,
          time_open: props.restaurant.time_open,
          time_close: props.restaurant.time_close,
          like: props.restaurant.likes,
          is_hot: props.restaurant.is_hot
      })
  }, [props.restaurant])

  console.log(props.restaurant);

  const onsubmit = async(e) =>{
    e.preventDefault();
    const action = await change_account(formData, img, props.restaurant.id, localStorage.getItem("access"));
    dispatch(action);
    console.log(action);
    if(action.type === CHANGE_RESTAURANT){
        alert("Successful change.");
        navigator("/restaurants")
    }else alert(action.payload);
}

  function changeData(e){
    setFormData({...formData, [e.target.name]: e.target.value });
  }
  console.log(formData)

    return (
    <div className="flex flex-1">
      <div className="bg-white flex-col mr-8 ml-40 border flex flex-auto ">
          <form class="font-medium flex flex-col w-full  p-4 rounded-lg  ">
            {/* Rid */}
            <div class="flex mb-4">
              <label for="Rid:" class="text-gray-700 mr-2 w-1/4 ">
                Rid:
              </label>
              <input value={props.restaurant.id}
                type="text"
                id="rid"
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Title */}
            <div class="flex mb-4">
              <label for="title" class="text-gray-700 mr-2 w-1/4">
                Title:
              </label>
              <input 
              name="title" value={formData.title} onChange={(e)=>changeData(e)}
                type="text"
                id="title"
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Usename */}
            <div class="flex mb-4">
              <label for="username" class="text-gray-700 mr-2 w-1/4">
                Username:
              </label>
              <input
              name="username" value={formData.username} onChange={(e)=>changeData(e)}
                type="text"
                id="username"
                disabled
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* email */}
            <div class="flex mb-4">
              <label for="email" class="text-gray-700 mr-2 w-1/4">
                email:
              </label>
              <input
              value={props.restaurant&&props.restaurant.email} disabled
                type="text"
                id="email"
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Image */}
            <div class="flex mb-4">
              <label for="file" class="text-gray-700 mr-2 w-1/4">
                Image:
              </label>
              <input
                type="file"
                id="file"
                onChange={chooseFile}
                class="img-profile flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/*   Description */}
            <div>
            <p class="text-gray-500 text-sm mb-4 hidden" id="no-file-chosen">
              No file chosen
            </p>
            <div class="flex mb-4">
              <label for="phone" class="text-gray-700 mr-2 w-1/4">
                Description:
              </label>
              {/*  editor  */}
              <form>
                <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                  <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                    <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                      <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            class="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 12 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                            />
                          </svg>
                          <span class="sr-only">Attach file</span>
                        </button>
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            class="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 20"
                          >
                            <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                          </svg>
                          <span class="sr-only">Embed map</span>
                        </button>
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            class="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 20"
                          >
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                          </svg>
                          <span class="sr-only">Upload image</span>
                        </button>
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            class="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 20"
                          >
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                            <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                          </svg>
                          <span class="sr-only">Format code</span>
                        </button>
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            class="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                          </svg>
                          <span class="sr-only">Add emoji</span>
                        </button>
                      </div>
                      <div class="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            class="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 21 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
                            />
                          </svg>
                          <span class="sr-only">Add list</span>
                        </button>
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            class="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                          </svg>
                          <span class="sr-only">Settings</span>
                        </button>
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            class="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                            <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                          </svg>
                          <span class="sr-only">Timeline</span>
                        </button>
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            class="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                          </svg>
                          <span class="sr-only">Download</span>
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      data-tooltip-target="tooltip-fullscreen"
                      class="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        class="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 19 19"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"
                        />
                      </svg>
                      <span class="sr-only">Full screen</span>
                    </button>
                    <div
                      id="tooltip-fullscreen"
                      role="tooltip"
                      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                      Show full screen
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                  <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                    <label for="editor" class="sr-only">
                      Publish post
                    </label>
                    <textarea
                      name="description" value={formData.description} onChange={(e)=>changeData(e)}
                      id="editor"
                      rows="8"
                      class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                      placeholder="Write an article..."
                      required
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            </div>
            {/* Phone */}
            <div class="flex mb-4">
              <label for="phone" class="text-gray-700 mr-2 w-1/4">
                Phone:
              </label>
              <input
              name="phone" value={formData.phone} onChange={(e)=>changeData(e)}
                type="text"
                id="phone"
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Address */}
            <div class="flex mb-4">
              <label for="address" class="text-gray-700 mr-2 w-1/4">
                Address:
              </label>
              <input
              name="address" value={formData.address} onChange={(e)=>changeData(e)}
                type="text"
                id="address"
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Time open */}
            <div class="flex mb-4">
              <label for="time" class="text-gray-700 mr-2 w-1/4">
                Time open:
              </label>
              <input
              name="time_open" value={formData.time_open} onChange={(e)=>changeData(e)}
                type="time"
                id="time"
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Time close */}
            <div class="flex mb-4">
              <label for="time" class="text-gray-700 mr-2 w-1/4">
                Time close:
              </label>
              <input 
              name="time_close" value={formData.time_close} onChange={(e)=>changeData(e)}
                type="time"
                id="time"
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Is hot */}
            <div class="flex mb-4">
              <label for="time" class="text-gray-700 mr-2 w-1/4">
                Is hot:
              </label>
              <input
              name="is_hot" value={formData.is_hot} onChange={(e)=>changeData(e)}
                id="link-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            {/* Like */}
            <div class="flex mb-4">
              <label for="like" class="text-gray-700 mr-2 w-1/4">
                Like:
              </label>
              <input
              name="like" value={formData.like} onChange={(e)=>changeData(e)}
                type="number"
                id="like"
                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </form>
      </div>


      {/* button */}
      <div className="flex flex-col mx-9 ml-auto">
        <button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 border-green-700 text-3xl"
        onClick={onsubmit}>
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
