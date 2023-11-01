import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios"

import { checkUserSession } from "./store/user/user.action";
import { fetchCartItemsStart } from "./store/cart/cart.action";

import { selectCurrentUser } from "./store/user/user.selector";

import Navigation from "./routes/navigation/Navigation.component"
import Home from "./routes/home/Home.component";
import Shop from "./routes/shop/Shop.component";
import Checkout from "./routes/checkout/Checkout.component";
import SignIn from "./routes/sign-in/SignIn.component";
import SignUp from "./routes/sign-up/SignUp.component";

import { GlobalStyle } from "./global.styles";
import { Fragment } from "react";




const App = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser)

  axios.defaults.baseURL = 'https://dummyjson.com/products';

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  
  useEffect(() => {
    (() => {
      if (currentUser) {
        const { id } = currentUser
        dispatch(fetchCartItemsStart(id))
      }
    })()
  }, [currentUser])


  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />} >
         <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </Fragment>
  );
}

export default App;
