import logo from '../assets/image/logohei.png';
function Navbar(){
    return (
        <nav className='background-primary mx-auto items-center navigation-bar flex justify-center space-x-80 py-2'>
          <img src={logo} alt="Logo" style={{ height: '110px' }} />
          <ul className='navigation-bar-items flex justify-between items-center
           space-x-8 text-white font-bold text-l'>
            <li className='hover:text-secondary'><a href="">ACCUEIL</a></li>
            <li className=' hover:text-secondary'><a href="">ACTUALITES</a></li>
            <li className=' hover:text-secondary'><a href="">BOURSES D'ETUDES</a></li>
            <li className=' hover:text-secondary'><a href="">INSCRIPTION</a></li>
          <button className='orange-button'>INTRANET</button>
          </ul>
        </nav>
      );
}
export default Navbar