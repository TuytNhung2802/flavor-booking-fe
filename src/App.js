import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/share/Layout";
import Dashboard from "./components/page/Doashboard";
import ManageRestaurant from "./components/page/ManageRestaurant";
import Wishlist from "./components/page/Wishlist";
import Wishlist1 from "./components/page/Wishlist1";
import ManageRestaurant1 from "./components/page/ManageRestaurant1";
import User from "./components/page/User";
import User1 from "./components/page/User1";
import Login from "./components/page/Login";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/restaurants" element={<ManageRestaurant />}></Route>
            <Route path="/wishlists" element={<Wishlist />}></Route>
            <Route path="/users" element={<User />}></Route>
            <Route path="/adduser" element={<User1 />}></Route>
            <Route path="/addwishlist" element={<Wishlist1 />}></Route>
            <Route path="/restaurant/:rid"element={<ManageRestaurant1 />}
            ></Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
