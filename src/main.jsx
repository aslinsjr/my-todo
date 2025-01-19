import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './pages/ErrorPage.jsx'
import WeekDashboard from './pages/WeekDashboard.jsx'
import RoutineHistory from './pages/RoutineHistory.jsx'
import TasksAndGoals from './pages/TasksAndGoals.jsx'
import EditTasks from './pages/EditTasks.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <WeekDashboard />
      },
      {
        path:"/history",
        element: <RoutineHistory />
      },
      {
        path:"/tasks",
        element: <TasksAndGoals />
      },
      {
        path:"/edit",
        element: <EditTasks />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
