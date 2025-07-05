import Student from '../assets/image/student.webp';
import Maskgroup1 from '../assets/image/Maskgroup1.webp';
import Maskgroup2 from '../assets/image/Maskgroup2.webp';
import Maskgroup3 from '../assets/image/Maskgroup3.webp';
function Program() {
    return (
        <main className='Program'>
            <div className='Program-item'>
                <section className='w-full sm:w-full'>
                    <img src={Student} alt=""  className='w-full'/>
                </section>
                <section className='text-section'>
                    <h2 className='tittle h2'>Le programme pédagogique</h2>
                    <p>
                        Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme
                        pédagogique conçu en adéquation avec les attentes du marché. La formation est
                        sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.
                    </p>
                    <button className='Program-button'>Notre Programme</button>
                </section>
            </div>
            <div className='Program-item '>
                <section className='division'>
                    <h3>25%</h3>
                    <p>Apprentissage théoriques en présentiel</p>
                </section>
                <section className='division'>
                    <h3>25%</h3>
                    <p>Apprentissage sur supports numériques</p>
                </section>
                <section className='division'>
                    <h3>25%</h3>
                    <p>Travaux individuels de l’étudiant</p>
                </section>
                <section className='division'>
                    <h3>25%</h3>
                    <p>Apprentissage en entreprise</p>
                </section>
            </div>
            <div className='Program-item'>
                <section>
                    <img src={Maskgroup1} alt="" />
                </section>
                <section>
                    <img src={Maskgroup2} alt="" />
                </section>
                <section>
                    <img src={Maskgroup3} alt="" />
                </section>
            </div>
        </main>
    );
}
export default Program