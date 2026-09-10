import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Projets from './pages/Projets.jsx'
import DetailProjets from './pages/DetailProjet.jsx'
import Connexion from './pages/Connexion.jsx'
import Inscription from './pages/Inscription.jsx'
import ProtectedRoute from './components/ RoutePrivee.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: (<ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>)
      },
      {
        path: "projets",
        element: (
          <ProtectedRoute>
            <Projets />
          </ProtectedRoute>
        )
      },
      {
        path: "taches",
        element: (
          <ProtectedRoute>
            <DetailProjets />
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path:"/connexion",
    element:<Connexion/>
  },
  {
    path:"/inscription",
    element:<Inscription/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)