import React from "react"
import { Outlet } from "react-router-dom";
import BarreLaterale from "./components/BarreLaterale"


function App() {
  

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50
      dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
        <div className="flex h-screen overflow-hidden">
          <BarreLaterale/>
          <main className="flex-1 overflow-y-auto bg-transparent">
            <div className="p-6 space-y-6 ">
              <Outlet/>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
