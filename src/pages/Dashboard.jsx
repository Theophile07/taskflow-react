import { Link } from "react-router-dom";
import { CalendarDays } from 'lucide-react';
import { Plus } from 'lucide-react';
import CardInfo from "../components/CardInfo";


function Dashboard(){

    return(
        <>
        <div className="space-y-6 ">
            {/* ?\Bienvenue */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900 text-white p-8 md:p-10 shadow-lg shadow-blue-500/20 dark:shadow-none">
                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <p className="text-blue-100 font-medium mb-1.5 flex items-center gap-2">
                            <CalendarDays className="w-5 h-5"/>
                            Mercredi 20 sept 2026
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Bonjour Theophile</h2>
                        <p className="text-blue-100/80 text-lg max-w-xl">Tu as des tâches qui t'attendent</p>
                    </div>

                    <div>
                        <button className="bg-white text-blue-600 hover:bg-blue-50 px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm flex items-center gap-2">
                            <Plus/>
                            Nouvelle tâche
                        </button>
                    </div>
                </div>
            </div>

            {/* CARD INFO */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                <CardInfo titre={"PROJET"}/>
                <CardInfo titre={"TOTAL TACHES"}/>
                <CardInfo titre={"EN COURS"}/>
                <CardInfo titre={"TERMINEES"}/>
            </div>
        </div>
        </>
    )
}

export default Dashboard