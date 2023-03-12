import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

// Layout
import Layout from "./Pages/Layout";

// Loading
import Loading from "./Pages/Loading";

// Pages || Lazy Loading
import Home from "./Pages/Home";
const Error = React.lazy(() => import("./Pages/Error"));
const Tag = React.lazy(() => import("./Pages/Tag"));
const Gender = React.lazy(() => import("./Pages/Gender"));
const MerchandiseLink = React.lazy(() => import("./Pages/MerchandiseLink"));
const ProductsDeatils = React.lazy(() => import("./Pages/ProductsDeatils"));

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
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Layout>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/products/:id"
                element={
                  <Suspense fallback={<Loading />}>
                    <ProductsDeatils />
                  </Suspense>
                }
              />
              {/* <Route path="/Membership" element={<Membership />} /> */}
              <Route
                path="/MERCHANDISE/:link"
                element={
                  <Suspense fallback={<Loading />}>
                    <MerchandiseLink />
                  </Suspense>
                }
              />
              <Route
                path="/categories/:gender/:tag"
                element={
                  <Suspense fallback={<Loading />}>
                    <Tag />
                  </Suspense>
                }
              />
              <Route
                path="/categories/:gender"
                element={
                  <Suspense fallback={<Loading />}>
                    <Gender />
                  </Suspense>
                }
              />
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
              {/* <Route path="/checkout-success" element={<CheckoutSuccess />} /> */}
              <Route
                path="*"
                element={
                  <Suspense fallback={<Loading />}>
                    <Error />
                  </Suspense>
                }
              />
            </Routes>
            <Footer />
          </Layout>
        </Provider>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
