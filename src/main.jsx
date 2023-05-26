import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import HomePage from './components/HomePage/HomePage';
import Statistics from './components/Statistics/Statistics';
import MainBlog from './components/MainBlog/MainBlog';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import JobDetails from './components/JobDetails/JobDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: '/',
        element: <HomePage></HomePage>,
        loader: () => fetch('jobOpenings.json')
      },
      {
        path: '/blog',
        element: <MainBlog></MainBlog>
      },
      {
        path: '/jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('jobOpenings.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/details',
        element: <JobDetails></JobDetails>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
