import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Main from './component/Leyout/Main';
import OrderRiveiw from './component/Orders/OrderRiveiw';


const router =createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
        loader: ()=> fetch('tshirt.json')
      },
      {
        path: 'review',
        element:<OrderRiveiw></OrderRiveiw>

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
