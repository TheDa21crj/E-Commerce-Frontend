import { Helmet } from "react-helmet";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layout
import Layout from "./Pages/Layout";

// Loading
import Loading from "./Pages/Loading";

// Pages || Lazy Loading
import Home from "./Pages/Home";
const Tag = React.lazy(() => import("./Pages/Tag"));
const Error = React.lazy(() => import("./Pages/Error"));
const Gender = React.lazy(() => import("./Pages/Gender"));
const Membership = React.lazy(() => import("./Pages/Membership"));
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
      <Helmet>
        <title>Online Shopping for Men & Women: The Da</title>
        <meta
          name="description"
          content="Online Shopping for Men & Women: The Da"
        />
        <meta
          property="og:title"
          content="Online Shopping for Men & Women: The Da"
        />
        <meta
          property="og:url"
          content="https://e-commerce-frontend-nu.vercel.app/"
        />
        <meta
          property="og:description"
          content="https://e-commerce-frontend-nu.vercel.app/"
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://uploads-ssl.webflow.com/61dd733efbe56d4e2f5f701f/640d7823317316351292beeb_Frame%201.png"
        />
        <meta property="og:type" content="website" />

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:url"
          content="https://twitter.com/services_enr"
        ></meta>
        <meta
          property="twitter:title"
          content="Online Shopping for Men & Women: The Da"
        ></meta>
      </Helmet>
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
              <Route
                path="/Membership"
                element={
                  <Suspense fallback={<Loading />}>
                    <Membership />
                  </Suspense>
                }
              />
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
