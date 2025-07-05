import logo from '../assets/image/logohei.png';

function Footer() {
    return (
        <>
        
        <div className='footer flex flex-col px-50 gap-20 h-fit pb-6' >
            <div>
                <img src={logo} alt="Logo" style={{ height: '100px' }} />
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-10'>
                    <div>
                        <p>Formation habilitée par <br />l’Etat suivant le système <br />LMD</p>
                    </div>
                    <p>Habilitation MESupRes <br />n°31309/2023</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='tittlefooter'>Adresse</h2>
                    <p>II J 161 R Ambodivoanjo </p>
                    <p>Ivandry Antananarivo</p>
                    <p>101, Madagascar</p>
                </div>
                <div className='flex flex-col text-start gap-2'>
                    <h2 className='tittlefooter'>Navigation</h2>
                    <ul className='navigation-bar-items-footer flex flex-col 
           space-x-8 text-white text-start gap-2'>
                        <li className='hover:text-secondary accueil'><a href="#">Accueil</a></li>
                        <li className=' hover:text-secondary'><a href="#">Actualités</a></li>
                        <li className=' hover:text-secondary'><a href="#">Bourse d'études</a></li>
                        <li className=' hover:text-secondary'><a href="#">Inscription</a></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='tittlefooter '>Médias sociaux</h2>
                    <div className='flex gap-2'>
                        <i class="iconsocial fa-brands fa-facebook p-3 rounded-full"></i>
                        <i class="iconsocial fa-brands fa-linkedin p-3 rounded-full"></i>
                        <i class="iconsocial fa-brands fa-instagram p-3 rounded-full"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white text-center py-2'>
            <p className='copyright'>© HEI Madagascar</p>
        </div>
        </>
    );
}

export default Footer;