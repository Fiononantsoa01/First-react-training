import field1 from '../assets/image/Cloud.png';
import field2 from '../assets/image/Intelligence.png';
import field3 from '../assets/image/Ingenierie.png'
function Field() {
    return (
        <main className='main field'>
            <h2 className="tittle h2">
                Domaines
            </h2>
            <p className='field-introduction'>
                Au cours de vos trois ans de formation,
                naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :
            </p>
            <div className='main-container'>
                <section className='main-section'>
                    <img src={field1} alt="cloud" className='field-image'/>
                    <div className='text'>
                    <h3 className='field-h3'>Cloud et cybersécurité</h3>
                    <p>
                        Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS).
                        Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications
                        contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.
                    </p>
                    </div>
                </section>
                <section className='main-section'>
                    <img src={field2} alt="intelligence" className='field-image'/>
                    <div  className='text'>
                    <h3 className='field-h3'>Intelligence artificielle</h3>
                    <p>
                        Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes
                        vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle
                        lors de vos cours chez HEI.
                    </p>
                    </div>
                </section>
                <section className='main-section'>
                    <img src={field3} alt="ingenerine" className='field-image'/>
                    <div  className='text'>
                    <h3 className='field-h3'>Ingénierie logicielle</h3>
                    <p>
                        Apprenez les principes de la conception ou le développement de programmes et d’applications web
                        et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à
                        proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.
                    </p>
                    </div>
                </section>
            </div>
        </main>
    );

}
export default Field;