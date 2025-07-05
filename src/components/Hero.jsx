import banner from '../assets/image/heibanner.webp';
function Hero() {
    return (
        <div className="relative bg-cover px-14 h-screen"
            style={{ backgroundImage: `URL(${banner})` }}>
            <div className='absolute z-1 inset-0 bg-black/50'></div>
            <div className='relative z-10 h-full Hero flex justify-center items-center mr-auto flex-col  space-y-25'>
                <h1 className='tittle text-white'>Haute Ecole d'informatique</h1>
                <h2 className='text-white text-2xl text-center mx-25'>
                    Une infrastricture de qualité et un programme pédagogique qui répond au besoin du marché pour l'employabilité
                    de nos étudiants
                </h2>
                <ul className="list flex justify-between  space-x-38 flex-row mt-8">
                    <li className='list-items list-items-1'>
                        <a href="">Inscrivez-vous ici</a></li>
                    <li className=' list-items list-items-2'>
                        <a href="">Emploi du temps</a></li>
                    <li className='list-items-3 list-items'>
                        <a href="">Programme pédagogique</a></li>
                </ul>
                <h2 className='text-white text-2xl text-center mx-25'>
                    habilitation MESupRES, suivant l'arrêté n°31309/2023
                </h2>
            </div>
        </div>
    );
}
export default Hero