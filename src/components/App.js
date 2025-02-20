import Header from "./Header.js";
import SimpleSlider from "./Carousel.js"; import MyAccountpage from "./MyAccountpage.js";
import NavigationBar from "./NavigationBar.js";
import NavHeader from "./NavHeader.js";
import MadinaCardlist from "./MadinaCardlist.js";
import ProductDetail from "./ProductDetail.js";
import Component from "./component.js";
import './NavigationBar.css'


import {
    BrowserRouter,
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
} from "react-router-dom";

import ProductCard from "./Card.js";
import Addtocart from "./Addtocart.js";
import Componentaddtocart from "./Componentaddtocart.js";
import Navbar from "./Navbar.js";
import Login from "./Login.js";
import SignUp from "./SignUp.js";
import LoginFinal from "./LoginFinal.js";
import RegisterFinal from "./RegisterFinal.js";
import HomePage from "./backend/admin/HomePage.js";
import Products from "./backend/admin/Products.js";
import ProtectedRoute from "./ProtectedRoute.js";
import Checkout from './Checkout.js'
import MyOrders from "./MyOrders.js";
import AdminOrders from "./backend/admin/Orders.js";
// const router = createBrowserRouter([
//     {
//         path: "/hrahim/",
//         element:
//             <>
//                 <Component />
//             </>
//     },
//     {
//         path: "/hrahim/sukkary",
//         element:
//             <>
//                 <Header />
//                 <SimpleSlider />
//                 <NavHeader />
//                 <MadinaCardlist />
//                 <NavigationBar />
//             </>
//     },
//     {
//         path: "/hrahim/product-detail/:id",
//         element:
//             <>
//                 <Header />
//                 <ProductDetail />
//             </>
//     },
//     {
//         path: "/hrahim/my-account",
//         element:
//             <>
//                 <MyAccountpage />
//                 <NavigationBar />
//             </>
//     },
//     {
//         path: "/hrahim/addtocart",
//         element:
//             <>
//                 <Componentaddtocart />
//             </>
//     },

// ])



const App = () => {


    return (

        <BrowserRouter >
            <Routes>
                <Route path="/admin/orders" element={
                        <>
                        <AdminOrders/>
                        </>
                }/>
                <Route path="/hrahim" element={
                    <>
                        <Component />
                    </>
                } />
                <Route path="/my-orders" element={
                    <> <Header/><MyOrders/> </>
                } />

                <Route path="/checkout" element={
                    <>
                        <Checkout />
                    </>
                } />

                <Route path="/admin/product" element={
                    <>
                        <Products />
                    </>
                } />
                <Route path="/login" element={
                    <>

                        {/* <Login/> */}
                        <LoginFinal />
                    </>
                } />
                <Route path="/admin" element={
                    <>

                        <HomePage />
                    </>
                } />
                <Route path="/register" element={
                    <>

                        {/* <SignUp/> */}
                        <RegisterFinal />
                    </>
                } />
                <Route path="/sukkary" element={
                    <>
                        <Header />
                        <SimpleSlider />
                        <NavHeader />
                        <MadinaCardlist />
                        <NavigationBar />
                    </>
                } />
                <Route path="/product-detail/:id" element={
                    <>
                        <Header />
                        <ProductDetail />
                    </>
                } />
                <Route path="/my-account" element={
                    <>
                        <MyAccountpage />
                        <NavigationBar />
                    </>
                } />
                <Route path="/navbar" element={
                    <>
                        <Navbar />
                        <NavigationBar />
                    </>
                } />
                <Route path="/addtocart" element={
                    <>
                        <Componentaddtocart />
                    </>
                } />
            </Routes>
        </BrowserRouter>


    );
}

export default App;



