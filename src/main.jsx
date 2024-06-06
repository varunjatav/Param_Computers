import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContainer from './screens/MainContainer.jsx'
import AppDevelopment from './courses/Development/AppDevelopment/AppDevelopment.jsx'
import Overview from './courses/Development/AppDevelopment/Overview.jsx'
import Syllabus from './courses/Development/AppDevelopment/Syllabus.jsx'
import Instructor from './courses/Development/AppDevelopment/Instructor.jsx'
import WebDevelopment from './courses/Development/WebDevelopment/WebDevelopment.jsx'
import SoftwareDevelopment from './courses/Development/SoftwareDevelopment/SoftwareDevelopment.jsx'
import DigitalMarketing from './courses/Development/DigitalMarketing/DigitalMarketing.jsx'
import AdvanceExcel from './courses/Development/AdvanceExcel/AdvanceExcel.jsx'
import Database from './courses/Development/Database/Database.jsx'
import Cprogramming from './courses/Programming/C/Cprogramming.jsx'
import Java from './courses/Programming/Java/Java.jsx'
import Cplusplus from './courses/Programming/C++/Cplusplus.jsx'
import Python from './courses/Programming/Python/Python.jsx'
const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children :[
  {
    path: "/",
    element: <MainContainer/>
  },
  {
    path: "/development/app-development-course",
    element: <AppDevelopment/>,
    children: [
      {
        path: "",
        element: <Overview/>
      },
      {
        path: "syllabus",
        element: <Syllabus/>
      },
      {
        path: "instructor",
        element: <Instructor/>
      }
    ]
  },
  {
    path: "/development/web-development-course",
    element: <WebDevelopment/>,
    children: [
      {
        path: "",
        element: <Overview/>
      },
      {
        path: "syllabus",
        element: <Syllabus/>
      },
      {
        path: "instructor",
        element: <Instructor/>
      }
    ]
  },
  {
    path: "/development/software-development-course",
    element: <SoftwareDevelopment/>,
    children: [
      {
        path: "",
        element: <Overview/>
      },
      {
        path: "syllabus",
        element: <Syllabus/>
      },
      {
        path: "instructor",
        element: <Instructor/>
      }
    ]
  },
  {
    path: "/development/digital-marketing-course",
    element: <DigitalMarketing/>,
    children: [
      {
        path: "",
        element: <Overview/>
      },
      {
        path: "syllabus",
        element: <Syllabus/>
      },
      {
        path: "instructor",
        element: <Instructor/>
      }
    ]
  },
  {
    path: "/development/advance-excel-course",
    element: <AdvanceExcel/>,
    children: [
      {
        path: "",
        element: <Overview/>
      },
      {
        path: "syllabus",
        element: <Syllabus/>
      },
      {
        path: "instructor",
        element: <Instructor/>
      }
    ]
  },
  {
    path: "/development/database-course",
    element: <Database/>,
    children: [
      {
        path: "",
        element: <Overview/>
      },
      {
        path: "syllabus",
        element: <Syllabus/>
      },
      {
        path: "instructor",
        element: <Instructor/>
      }
    ]
  },
  {
    path: "/programming/c",
    element: <Cprogramming/>,
    children: [
      {
        path: "",
        element: <Overview/>
      },
      {
        path: "syllabus",
        element: <Syllabus/>
      },
      {
        path: "instructor",
        element: <Instructor/>
      }
    ]
  },
  {
    path: "/programming/java",
    element: <Java/>,
    children: [
      {
        path: "",
        element: <Overview/>
      },
      {
        path: "syllabus",
        element: <Syllabus/>
      },
      {
        path: "instructor",
        element: <Instructor/>
      }
    ]
  },
  {
    path: "/programming/c++",
    element: <Cplusplus/>,
    children: [
      {
        path: "",
        element: <Overview/>
      },
      {
        path: "syllabus",
        element: <Syllabus/>
      },
      {
        path: "instructor",
        element: <Instructor/>
      }
    ]
  },
  {
    path: "/programming/python",
    element: <Python/>,
    children: [
      {
        path: "",
        element: <Overview/>
      },
      {
        path: "syllabus",
        element: <Syllabus/>
      },
      {
        path: "instructor",
        element: <Instructor/>
      }
    ]
  },
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
