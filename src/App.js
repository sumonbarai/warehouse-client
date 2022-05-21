import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Blog from "./pages/Blog/Blog";
import Header from "./pages/Shared/Header/Header";
import Inventory from "./pages/Inventory/Inventory";
import Login from "./pages/Login/Login";
import Footer from "./pages/Shared/Footer/Footer";
import NotFound from "./pages/Shared/NotFound/NotFound";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Registration from "./pages/Registration/Registration";

import MyItems from "./pages/MyItems/MyItems";
import AddItem from "./pages/AddItem/AddItem";
import RequireAuth from "./pages/Shared/RequireAuth/RequireAuth";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="blog" element={<Blog></Blog>} />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login></Login>} />

        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        />
        <Route
          path="/additems"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        />
        <Route
          path="/productDetails/:id"
          element={
            <RequireAuth>
              <ProductDetails></ProductDetails>
            </RequireAuth>
          }
        />
        <Route
          path="/forgetpassword"
          element={<ForgetPassword></ForgetPassword>}
        />
        <Route path="/registration" element={<Registration></Registration>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
