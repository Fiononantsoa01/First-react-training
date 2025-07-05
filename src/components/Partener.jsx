import Nexta from '../assets/image/LOGONEXTA.webp';
import PNM from '../assets/image/PN.png';
import Numer from '../assets/image/Numer.png';
import Etech from '../assets/image/logo.png';
import Kanteco from '../assets/image/kantecompany.png';
import YF from '../assets/image/YF.webp';
import Yooz from '../assets/image/Yooz.webp';
import Bp from '../assets/image/bp.webp';
import emit from '../assets/image/emit.png';
function Partener() {
    return (
        <main className='main partener'>
            <div className='partener-text'>
                <h2 className='tittle h2'>Nos partenaires</h2>
                <p>L’employabilité de nos étudiants se base sur la pertinence  de notre programme pédagogique et
                    de la composition de notre corps enseignant mais aussi du soutien et la collaboration des entreprises
                    partenaires
                </p>
            </div>
            <div className='flex flex-wrap gap-7'>
                <img src={Nexta} alt="nexta"className="partener-image" />
                <img src={PNM} alt="pnm"className="partener-image" />
                <img src={Yooz} alt="yooz"className="partener-image" />
                <img src={Etech} alt="etech"className="partener-image" />
                <img src={emit} alt="emit"className="partener-image" />
                <img src={Numer} alt="numer"className="partener-image" />
                <img src={Bp} alt="bp" className="partener-image"/>
                <img src={YF} alt="yf" className="partener-image"/>
                <img src={Kanteco} alt="kanteco" className="partener-image" />
            </div>
        </main>
    );
}
export default Partener