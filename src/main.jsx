import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContainer from './screens/MainContainer.jsx'

//! App development course
import AppDevelopment from './courses/Development/AppDevelopment/AppDevelopment.jsx'
import AppOverview from './courses/Development/AppDevelopment/AppOverview.jsx'
import AppSyllabus from './courses/Development/AppDevelopment/AppSyllabus.jsx'
import AppInstructor from './courses/Development/AppDevelopment/AppInstructor.jsx'

//! Web Development course
import WebDevelopment from './courses/Development/WebDevelopment/WebDevelopment.jsx'
import WebOverview from './courses/Development/WebDevelopment/WebOverview.jsx'
import WebSyllabus from './courses/Development/WebDevelopment/WebSyllabus.jsx'
import WebInstructor from './courses/Development/WebDevelopment/WebInstructor.jsx'

//! Software Development course
import SoftwareDevelopment from './courses/Development/SoftwareDevelopment/SoftwareDevelopment.jsx'
import SoftwareOverview from './courses/Development/SoftwareDevelopment/SoftwareOverview.jsx'
import SoftwareSyllabus from './courses/Development/SoftwareDevelopment/SoftwareSyllabus.jsx'
import SoftwareInstructor from './courses/Development/SoftwareDevelopment/SoftwareInstructor.jsx'

//! Digital Marketing course
import DigitalMarketing from './courses/Development/DigitalMarketing/DigitalMarketing.jsx'
import DigitalOverview from './courses/Development/DigitalMarketing/DigitalOverview.jsx'
import DigitalInstructor from './courses/Development/DigitalMarketing/DigitalInstructor.jsx'
import DigitalSyllabus from './courses/Development/DigitalMarketing/DigitalSyllabus.jsx'

//! Advance Excel Course
import AdvanceExcel from './courses/Development/AdvanceExcel/AdvanceExcel.jsx'
import ExcelOverview from './courses/Development/AdvanceExcel/ExcelOverview.jsx'
import ExcelSyllabus from './courses/Development/AdvanceExcel/ExcelSyllabus.jsx'
import ExcelInstructor from './courses/Development/AdvanceExcel/ExcelInstructor.jsx'

//! Database Course
import Database from './courses/Development/Database/Database.jsx'
import DatabaseOverview from './courses/Development/Database/DatabaseOverview.jsx'
import DatabaseSyllabus from './courses/Development/Database/DatabaseSyllabus.jsx'
import DatabaseInstructor from './courses/Development/Database/DatabaseInstructor.jsx'


//! Programming
//! C Language
import Cprogramming from './courses/Programming/C/Cprogramming.jsx'
import COverview from './courses/Programming/C/COverview.jsx'
import CSyllabus from './courses/Programming/C/CSyllabus.jsx'
import CInstructor from './courses/Programming/C/CInstructor.jsx'

//! C++ Language 
import Cplusplus from './courses/Programming/C++/Cplusplus.jsx'
import CplusOverview from './courses/Programming/C++/CplusOverview.jsx'
import CplusSyllabus from './courses/Programming/C++/CplusSyllabus.jsx'
import CplusInstructor from './courses/Programming/C++/CplusInstructor.jsx'

//! Java Language
import Java from './courses/Programming/Java/Java.jsx'
import JavaSyllabus from './courses/Programming/Java/JavaSyllabus.jsx'
import JavaOverview from './courses/Programming/Java/JavaOverview.jsx'
import JavaInstructor from './courses/Programming/Java/JavaInstructor.jsx'

//! Python Language
import Python from './courses/Programming/Python/Python.jsx'
import PythonOverview from './courses/Programming/Python/PythonOverview.jsx'
import PythonSyllabus from './courses/Programming/Python/PythonSyllabus.jsx'
import PythonInstructor from './courses/Programming/Python/PythonInstructor.jsx'

//! Payment
import Payment from './components/Payment/Payment.jsx'
import Paypal from './components/Payment/Paypal.jsx'
import Phonepe from './components/Payment/Phonepe.jsx'
import Googlepay from './components/Payment/Googlepay.jsx'
import Paytm from './components/Payment/Paytm.jsx'
import { ErrorBoundary } from './components/ErrorBoundary.jsx'

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
        element: <AppOverview/>
      },
      {
        path: "syllabus",
        element: <AppSyllabus/>
      },
      {
        path: "instructor",
        element: <AppInstructor/>
      }
    ]
  },
  {
    path: "/development/web-development-course",
    element: <WebDevelopment/>,
    children: [
      {
        path: "",
        element: <WebOverview/>
      },
      {
        path: "syllabus",
        element: <WebSyllabus/>
      },
      {
        path: "instructor",
        element: <WebInstructor/>
      }
    ]
  },
  {
    path: "/development/software-development-course",
    element: <SoftwareDevelopment/>,
    children: [
      {
        path: "",
        element: <SoftwareOverview/>
      },
      {
        path: "syllabus",
        element: <SoftwareSyllabus/>
      },
      {
        path: "instructor",
        element: <SoftwareInstructor/>
      }
    ]
  },
  {
    path: "/development/digital-marketing-course",
    element: <DigitalMarketing/>,
    children: [
      {
        path: "",
        element: <DigitalOverview/>
      },
      {
        path: "syllabus",
        element: <DigitalSyllabus/>
      },
      {
        path: "instructor",
        element: <DigitalInstructor/>
      }
    ]
  },
  {
    path: "/development/advance-excel-course",
    element: <AdvanceExcel/>,
    children: [
      {
        path: "",
        element: <ExcelOverview/>
      },
      {
        path: "syllabus",
        element: <ExcelSyllabus/>
      },
      {
        path: "instructor",
        element: <ExcelInstructor/>
      }
    ]
  },
  {
    path: "/development/database-course",
    element: <Database/>,
    children: [
      {
        path: "",
        element: <DatabaseOverview/>
      },
      {
        path: "syllabus",
        element: <DatabaseSyllabus/>
      },
      {
        path: "instructor",
        element: <DatabaseInstructor/>
      }
    ]
  },
  {
    path: "/programming/c",
    element: <Cprogramming/>,
    children: [
      {
        path: "",
        element: <COverview/>
      },
      {
        path: "syllabus",
        element: <CSyllabus/>
      },
      {
        path: "instructor",
        element: <CInstructor/>
      }
    ]
  },
  {
    path: "/programming/java",
    element: <Java/>,
    children: [
      {
        path: "",
        element: <JavaOverview/>
      },
      {
        path: "syllabus",
        element: <JavaSyllabus/>
      },
      {
        path: "instructor",
        element: <JavaInstructor/>
      }
    ]
  },
  {
    path: "/programming/c++",
    element: <Cplusplus/>,
    children: [
      {
        path: "",
        element: <CplusOverview/>
      },
      {
        path: "syllabus",
        element: <CplusSyllabus/>
      },
      {
        path: "instructor",
        element: <CplusInstructor/>
      }
    ]
  },
  {
    path: "/programming/python",
    element: <Python/>,
    children: [
      {
        path: "",
        element: <PythonOverview/>
      },
      {
        path: "syllabus",
        element: <PythonSyllabus/>
      },
      {
        path: "instructor",
        element: <PythonInstructor/>
      }
    ]
  },
  {
    path:"/payment",
    element: <Payment/>,
    children:[
      {
        path:"paypal", 
        element:<Paypal/>
      },
      {
        path:"googlepay", 
        element:<Googlepay/>
      },
      {
        path:"phonepe", 
        element:<Phonepe/>
      },
      {
        path:"paytm", 
        element:<Paytm/>
      }
    ]
  }
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
