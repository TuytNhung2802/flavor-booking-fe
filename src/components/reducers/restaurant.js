import {
  GET_ERROR,
  STATISTICS,
  ORDER_HISTORY,
  GET_RESTAURANT,
  GET_WISHLIST,
  GET_USER,
  GET_WISHLIST_DETAIL,
  GET_RESTAURANTDEATAIL,
  CHANGE_RESTAURANT
} from "../action/type";
const initialState = {
  statistics: {},
  orders: [],
  restaurants:{},
  wishlist:{},
  wishlistDetail:{},
  user:{},
  restaurantDetail:{},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case STATISTICS:
      return {
        ...state,
        statistics: payload,
      };
    case ORDER_HISTORY:
      return {
        ...state,
        orders: payload,
      };
    case GET_ERROR:
    case GET_RESTAURANT:
      return {
        ...state,
        restaurants: payload,
      };
      case GET_WISHLIST:
        return {
          ...state,
          wishlist: payload,
        };
      case GET_USER:
        return {
          ...state,
          user: payload,
        };
      case GET_WISHLIST_DETAIL:
        return {
          ...state,
          wishlistDetail: payload,
        };
        case GET_RESTAURANTDEATAIL:
        return {
          ...state,
          restaurantDetail: payload,
        };
        case CHANGE_RESTAURANT:
          return {
              ...state,
              restaurantDetail : payload
          }
    default:
      return state;
  }
}
