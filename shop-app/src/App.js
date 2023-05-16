import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgotpassword from "./pages/Forgotpassword";
import Resetpassword from "./pages/Resetpassword";
import SingleBlog from "./pages/SingleBlog";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermAndContions from "./pages/TermAndContions";
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wish-list" element={<WishList />} />
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<Signup />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="reset-password" element={<Resetpassword />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="privary-policy" element={<PrivacyPolicy />} />
            <Route path="term-condition" element={<TermAndContions />} />
            <Route path="product" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
