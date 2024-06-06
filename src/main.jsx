import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import MainContainer from './screens/MainContainer.jsx'
import AppDevelopment from './courses/AppDevelopment.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children :[
  {
    path: "/",
    element: <MainContainer/>
  },
  {
    path: "/app-development-course",
    element: <AppDevelopment/>
  }
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
