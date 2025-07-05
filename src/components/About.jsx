import about from '../assets/image/about.webp'
function About() {
    return (
        <div className='h-screen flex mx-45 my-20 space-x-12'>
            <div className='w-1/2 flex items-center justify-center'>
                <img src={about} alt="about" className='h-5/5 object-contain' />
            </div>
            <div className='about w-1/2 text-primary'>
                <h2 className='tittle h2'>A propos de nous</h2>
                <h3 className='h3'><i className="fa-solid fa-graduation-cap"></i> +3ans</h3>
                <p>Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique.
                    Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique
                    de Madagascar et du monde entier.
                </p>
                <h3 className='h3'><i className="fa-solid fa-user-group"></i>+ 250 étudiants</h3>
                <p>
                    Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre
                    formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.
                </p>
                <h3 className='h3'><i className="fa-solid fa-medal"></i> Notre mission</h3>
                <p>
                    Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle,
                    la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.
                </p>
            </div>

        </div>
    );
}
export default About