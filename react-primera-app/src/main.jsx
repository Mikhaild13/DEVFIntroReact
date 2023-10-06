import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Home from './components/home/Home.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Productos from './components/productos/Productos.jsx'
import VistaDetalle from './components/vistaDetalle/VistaDetalle'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <h1>404 Not Found - Error</h1>,
    children: [
      {
        path: '/',
        element: <Productos/>
      },
      {
        path: '/celulares',
        element: <Productos/>
      },
      {
        path: '/celulares/:title',
        element: <VistaDetalle/>
      },
      {
        path: '/pantallas',
        element: <h1>Pantallas =D</h1>
      },
      {
        path: '/detalle',
        element: <h1>este es el detalle</h1>
      }
    ]
  },
  {
    path: '/about',
    element: <h1>About Us</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)