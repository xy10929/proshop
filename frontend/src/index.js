//index.js is the entry of React
import React from 'react'
import ReactDOM from 'react-dom/client'
//allows to interact with document object module and broswer
import App from './App'
import reportWebVitals from './reportWebVitals'

//default bootstrap file
//import 'bootstrap/dist/css/bootstrap.min.css'

//custom bootstrap file
import './assets/styles/index.css'
import './assets/styles/bootstrap.custom.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import store from './store'
import { Provider } from 'react-redux'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingScreen from './screens/ShippingScreen'
import PrivateRoute from './components/PrivateRoute'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import ProfileScreen from './screens/ProfileScreen'

//routes of main app component
const router = createBrowserRouter(
  createRoutesFromElements(
    // parent route
    <Route path='/' element={<App />}>
      {/* children routes */}
      <Route index={true} path='/' element={<HomeScreen />} />
      {/* show HomeScreen when route is exactly / */}
      <Route path='/product/:id' element={<ProductScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />

      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingScreen />} />
        <Route path='/payment' element={<PaymentScreen />} />
        <Route path='/placeorder' element={<PlaceOrderScreen />} />
        <Route path='/order/:id' element={<OrderScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
      </Route>
    </Route>
  )
)

//put main app component into root div
const root = ReactDOM.createRoot(document.getElementById('root'))
//render main app component
root.render(
  <React.StrictMode>
    {/* wrap RouterProvider with Provider, passing in store as a prop */}
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        {/* main app */}
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
