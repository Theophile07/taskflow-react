import React from "react"
import { LayoutDashboard, CheckSquare, FolderKanban, Settings } from "lucide-react";
import { Link, NavLink } from "react-router-dom";


function BarreLaterale(){
    const navitem = [{
        id: "dashboard",
        icon: LayoutDashboard,
        label: "Tableau de bord",
        active: true,
        path: "/dashboard",
    },
    {
        id: "project",
        icon: FolderKanban,
        label: "Mes projets",
        path: "/projets",
    },
    {
        id: "tasks",
        icon: CheckSquare,
        label: "Toutes les tâches",
        path: "/taches",
    },
    {
        id: "settings",
        icon: Settings,
        label: "Paramètre"
    }
    ]
    return(
        <>
            <div className="transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80
            backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10">
                <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl
                        flex items-center justify-center shadow-lg">
                            {/* ICONE ICI */}
                        </div>

                        <div>
                            <h1 className="text-xl font-bold text-slate-800 dark:text-white">Taskflow</h1>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Gestion de projets</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {navitem.map((item) => (
                        <NavLink key={item.id} to={item.path}
                        className="w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200
                            hover:bg-slate-100 dark:hover:bg-slate-800">
                                <div className="flex items-center space-x-3">
                                    <item.icon className="w-5 h-5 text-slate-800 dark:text-white" />
                                    <span className="text-slate-800 dark:text-white font-medium ml-2">{item.label}</span>
                                </div>
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50
                    dark:bg-slate-800/50">
                        <img src="" alt="utilisateur" className="w-10 h-10 rounded-full ring-2 ring-blue-500" />
                        <div className="flex-1 min-w-0">
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-800 dark:text-white truncate">Theophile Lumbala</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BarreLaterale