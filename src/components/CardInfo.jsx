import { FolderKanban } from 'lucide-react';

function CardInfo({titre}){
    return(
        <>
        <div >
            <div className="bg-white dark:bg-neutral-900 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all duration-300 cursor-default group overflow-hidden relative hover:scale-101">
                <div className="flex items-center gap-4 relative z-10">
                    {/* <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20">
                        <FolderKanban/>
                    </div> */}
                    <div>
                        <p className="text-sm font-medium text-neutral-500 text-slate-blue dark:text-neutral-400">{titre}</p>
                        <p className="text-2xl font-bold text-neutral-900 dark:text-white">{24}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardInfo