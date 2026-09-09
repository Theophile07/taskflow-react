import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Projets from './pages/Projets.jsx'
import DetailProjets from './pages/DetailProjet.jsx'

const router = createBrowserRouter([
  {path:"/", element: <App/>},
  {path:"/dashboard", element: <Dashboard/>},
  {path:"/projets", element: <Projets/>},
  {path:"/taches", element: <DetailProjets/>},
  // {path:"/parametre", element: <Parametre/>}
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
