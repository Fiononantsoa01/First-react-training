import Ryan from '../assets/image/Ryan.webp'
import Mirado from '../assets/image/Mirado.webp'
function Team(){
    return(
        <main className='main'>
            <h1 className='tittle h1'>L'équipe pédagogique</h1>
            <p>
            Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique,
             de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. 
             Ils sont passionnés par l’informatique et sont engagés vers l’excellence.
              Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, 
              elle a été soigneusement sélectionnée.
            </p>
            <div className='team'>
                <section className='team-section'>
                <img src={Ryan} alt="" className='team-image'/>
                <h4 className='team-h4'>Ryan ANDRIAMAHERY</h4>
                <p>Developpeur back End | cofondateur et Directeur des opération à HEI</p>
                </section>
                <section className='team-section'>
                <img src={Mirado} alt="" className='team-image' />
                <h4 className='team-h4'>Ryan ANDRIAMAHERY</h4>
                <p>Developpeur back End | cofondateur et Directeur des opération à HEI</p>
                </section>
                <section className='team-section'>
                <img src={Mirado} alt="" className='team-image' />
                <h4 className='team-h4'>Ryan ANDRIAMAHERY</h4>
                <p>Developpeur back End | cofondateur et Directeur des opération à HEI</p>
                </section>
            </div>
            
        </main>
        
    );
}
export default Team;