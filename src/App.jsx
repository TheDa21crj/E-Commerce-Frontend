import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

// Layout
import Layout from "./Pages/Layout";

// Pages
import Home from "./Pages/Home";
import Error from "./Pages/Error";

// Components
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Analytics
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/Membership" element={<Membership />} /> */}
            {/* <Route path="/products/:id" element={<ProductsDeatils />} /> */}
            {/* <Route path="/wishlist" element={<Cart />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}
            {/* <Route path="/logout" element={<Logout />} /> */}
            {/* <Route exact path="/my-account" element={<PrivateRoute />}> */}
            {/* <Route exact path="/my-account" element={<MyAccount />} /> */}
            {/* </Route> */}
            {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
            {/* <Route path="/admin/post-content" element={<PostContent />} /> */}
            {/* <Route path="/ShopCart" element={<ShopCart />} /> */}
            {/* <Route path="/categories/:gender/:tag" element={<Tag />} /> */}
            {/* <Route path="/categories/:gender" element={<Gender />} /> */}
            {/* <Route path="/MERCHANDISE/:link" element={<MerchandiseLink />} /> */}
            {/* <Route path="/checkout-success" element={<CheckoutSuccess />} /> */}
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
