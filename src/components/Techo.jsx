import Java from '../assets/image/Java.png';
import Js from '../assets/image/Js.png';
import C from '../assets/image/C.png';
import Docker from '../assets/image/docker.png';
import Next from '../assets/image/next.png';
import Aws from '../assets/image/aws.png';
import Serverless from '../assets/image/serverless.png';
import ReactJs from '../assets/image/react.png';
import Python from '../assets/image/python.png';
import Openapi from '../assets/image/openapi.png';
import TS from '../assets/image/TS.png';
function Techno() {
    return (
        <main className='main techno'>
            <div className='partener-text'>
                <h2 className='tittle h2'>Les technos et langages utilisées
                </h2>
                <p>Nos étudiants sont formés à l’utilisation et à la maîtrise
                    des langages de programmation Java et JavaScript. Ces deux langages occupent une place de choix
                    dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse
                    appréciées par les développeurs à travers le monde.
                </p>
            </div>
            <div className='flex flex-wrap gap-7'>
                <img src={Java} alt="java" className="techno-image" />
                <img src={Python} alt="python" className="techno-image" />
                <img src={Js} alt="js" className="techno-image" />
                <img src={C} alt="c" className="techno-image" />
                <img src={TS} alt="TS" className="techno-image" />
                <img src={Docker} alt="Docker" className="techno-image2" />
                <img src={Next} alt="Next" className="techno-image2" />
                <img src={Aws} alt="aws" className="techno-image2" />
                <img src={Serverless} alt="server" className="techno-image2" />
                <img src={ReactJs} alt="react" className="techno-image2" />
                <img src={Openapi} alt="openapi" className="techno-image2" />
            </div>
        </main>
    );
}
export default Techno;