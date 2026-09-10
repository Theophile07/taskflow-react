import { useState, useContext } from "react"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Connexion(){

const navigate = useNavigate();
const { login } = useContext(AuthContext);
const [erreur, setErreur] = useState("");

const [identifiant, setIdentifiant] = useState({
    email: "",
    motDePasse: ""
})

const handleChange = (e) => {
    setIdentifiant({
        ...identifiant, 
        [e.target.name]: e.target.value,
    })
}
const handleSubmit = async (e) =>{
    e.preventDefault()
    

    try{

        const reponse = await fetch(`http://localhost:3000/utilisateurs?email=${identifiant.email}`)
    
        const utilisateurs = await reponse.json()
        console.log("Utilisateurs reçus :", utilisateurs);
        console.log("Mot de passe saisi :", identifiant.motDePasse);

        const utilisateur = utilisateurs.find(
            user => user.motDePasse === identifiant.motDePasse
        )
        if(utilisateur){
            login(utilisateur)
            navigate("/dashboard")
        }else{
            setErreur("Email ou mot de passe incorrect.")
        }
    }catch (error){
        console.error(error)
        setErreur("Impossible de contacter le serveur.")
    }
}

    return(
        <>
            <div className="flex justify-between items-center w-full h-screen bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900 text-white p-8 md:p-10 shadow-lg shadow-blue-500/20 dark:shadow-none">
                <div className="flex w-full h-full rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                
                <div className="w-1/2 flex gap-15 flex-col justify-center pl-20">
                    <div>
                        <h1 className="font-bold text-4xl">TaskFlow</h1>
                        <p className="max-w-80">Organisez vos projets, suivez vos tâches et gardez le controle de votre avancement</p>
                    </div>
                    <div className="border-l-3 border-purple-500 pl-5">
                        <p className="max-w-96">Creez autant de projets que necessaire
                            Suivez chaque tache de bout en bout
                            Visualisez votre progression en un coup d'oeil</p>
                    </div>
                </div>

                <div className="w-1/2 bg-white h-full flex justify-center items-center">
                    <div className="space-y-5">
                        <div>
                            <h2 className="text-slate-900">Connexion</h2>
                            <p className="text-slate-900">Entrez vos identifiants pour continuer</p>
                        </div>
                        
                        <form onSubmit={handleSubmit} >
                            <div>
                                <label className="text-slate-900">
                                    Adresse e-mail
                                </label>
                            </div>
                            <div>
                                <input 
                                type="email"
                                name="email"
                                value={identifiant.email}
                                onChange={handleChange}
                                required
                                placeholder="votreadress@email.com"
                                className="w-90  p-5 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100 border h-10 border-slate-700 rounded-xl"
                                />
                            </div>

                            <div>
                                <label className="text-slate-900">
                                    Mot de passe
                                </label>
                            </div>
                            <div>
                                <input 
                                type="password"
                                name="motDePasse"
                                value={identifiant.motDePasse}
                                required
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-90 p-5  text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100 border h-10 border-slate-700 rounded-xl"
                                />
                            </div>

                            {
                            erreur && (
                                <p className="text-red-500 text-sm">{erreur}</p>
                            )}

                            <button type="submit" className="w-90 bg-blue-600 hover:bg-blue-700">
                                Se connecter
                            </button>
                        </form>

                        
                        <p className="text-center text-slate-400 text-sm mt-6">
                            Pas encore de compte ?{" "}
                            <NavLink to="/inscription" className="text-blue-400 cursor-pointer hover:underline">
                                Créer un compte
                            </NavLink>
                        </p>
                    </div>
                </div>

                </div>
            </div>
        </>
    )
}

export default Connexion