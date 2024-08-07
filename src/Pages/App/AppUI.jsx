import {useRoutes} from 'react-router-dom'
import {Home} from '../Home/index.jsx'
import {MyAccount} from '../MyAccount/index.jsx'
import {MyOrder} from '../MyOrder/index.jsx'
import {MyOrders} from '../MyOrders/index.jsx'
import {NotFound} from '../NotFound/index.jsx'
import {SignIn} from '../SignIn/index.jsx'
import { NavBar } from '../../Components/NavBar/index.jsx'
import './AppUI.css';
import React from 'react';


const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/my-account', element: <MyAccount /> },
      { path: '/my-order', element: <MyOrder /> },
      { path: '/my-orders', element: <MyOrders /> },
      { path: '/sign-in', element: <SignIn/> },
      { path: '/*', element: <NotFound /> },
    ])
  
    return routes
  }


const AppUI = () => {

    return (
        <>
            <NavBar/>
            <AppRoutes/>
        </>
        

    )

}

export {AppUI}