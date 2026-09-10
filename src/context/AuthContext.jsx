import { createContext, useState, useEffect } from "react";


export const AuthContext = createContext();

export function AuthProvider({children}){
    const [utilisateur, setUtilisateur] = useState(null)
    const [chargement, setChargement] = useState(true)

    useEffect(() => {
        const sauvegarde = localStorage.getItem("utilisateur-taskflow")

        if(sauvegarde){
            setUtilisateur(JSON.parse(sauvegarde));
        }
        setChargement(false)
    }, [])

    const login = (utiliSateur) =>{
            setUtilisateur(utiliSateur)
            localStorage.setItem("utilisateur-taskflow",
                JSON.stringify(utiliSateur)
            )
    }

    return(
        <AuthContext.Provider value={{utilisateur, login, chargement}}>
            {children}
        </AuthContext.Provider>
    )
}