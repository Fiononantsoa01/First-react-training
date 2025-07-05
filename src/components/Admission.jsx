function Admission() {
    return (
        <>
            <div className="main flex flex-col items-center justify-center gap-y-8 py-7">
                <div className="flex flex-col text-center gap-8.5">
                    <h2 className="tittleBlanc text-white ">Admission</h2>
                    <p>Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau : <br />une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D. </p>
                </div>
                <div className="flex flex-row">
                    <div className="w-1/3 flex flex-row bg-[#FCDFB5] ps-4 pe-8 items-start gap-6">
                        <div>
                            <h2 className="tittle text-start pb-6 pt-4">01</h2>
                            <p className="paragraph text-justify"><span>Dépôt de dossiers : </span>pour les bacheliers de toutes séries sans limite d’âge</p>
                        </div>
                        <i class="icon fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="w-1/3 flex flex-row bg-[#F7D090] ps-4 pe-8 gap-6">
                        <div>
                            <h2 className="tittle text-start pb-6 pt-4">02</h2>
                            <p className="paragraph text-justify"><span>Test de niveau :</span> composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D</p>
                        </div>
                        <i class="icon fa-solid fa-arrow-right"></i>

                    </div>
                    <div className="w-1/3 flex flex-row bg-[#F1C16B] h-65 ps-4">
                        <div className="flex flex-col">
                            <h2 className="tittle text-start pb-6 pt-4">03</h2>
                            <p className="paragraph text-justify"><span>Inscription définitive</span> (si test réussi)</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5">
                    <button className="admission-btn-inscription rounded bg-transparent border-2 p-3">Inscrivez-vous ici</button>
                    <button className="admission-btn-result rounded p-3.5">Résultat concours</button>
                </div>
            </div>
        </>
    )
}
export default Admission;