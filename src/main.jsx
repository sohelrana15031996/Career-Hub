import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Jobs from './Components/Jobs/Jobs';
import Applied from './Components/Applied jobs/Applied';
import Blogs from './Components/Blogs/Blogs';
import Statistics from './Components/Statistics/Statistics';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"/jobs",
        element:<Jobs/>
      },
      {
        path:"/applied",
        element:<Applied/>
      },
      {
        path:"/statistics",
        element:<Statistics/>
      },
      {
        path:"/blogs",
        element:<Blogs/>
      },
      {
        path:"/jobs/:job_id",
        element:<JobDetails></JobDetails>,
        loader:()=>fetch("../public/Data.json"),
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
