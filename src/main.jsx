import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import MainContainer from './screens/MainContainer.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children :[
  {
    path: "/",
    element: <MainContainer/>
  }
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
