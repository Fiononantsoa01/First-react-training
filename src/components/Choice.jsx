import debouche from '../assets/image/debouche.webp'

function Choice() {
    return (
        <div className='flex flex-row py-15 px-35 gap-x-10 items-center'>
            <div className='flex py-18 ps-20 w-fit'>
                <div className='flex flex-col gap-y-5 text-justify'>
                    <h2 className="tittle h2">Quelques débouchés</h2>
                    <p className='text-justify'>Formez-vous à une panoplie de métiers du numérique avec nous et venez <br />acquérir les fondements de la programmation (qui vous servira pour <br />les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des <br />métiers du futur…</p>
                    <p className='py-6 '>Développeur back end, développeur front end, développeurs mobile, chefs de <br />projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique <br />SSI, auditeur organisationnel SSI, administrateur système et réseau,<br /> développeur de sécurité…</p>
                </div>
            </div>
            <div className='flex w-1/3 items-center justify-end' >
                <img src={debouche} alt="debouche" className='size-115 object-cover' />
            </div>
        </div>
    );
}
export default Choice;