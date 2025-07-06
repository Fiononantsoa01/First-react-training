import { useState } from "react";
import field1 from '../assets/image/Ryan.webp';
import field2 from '../assets/image/jean-Aimé.jpg';
import field3 from '../assets/image/Parison.png';
import field4 from '../assets/image/Yannick.jpg';
import field5 from '../assets/image/Dre_Tahina.png';
import field6 from '../assets/image/Dr_Lou.jpg';
import field7 from '../assets/image/Mirado.webp';
import field8 from '../assets/image/Julien.webp';

const slides = [
    { image: field1, name: "Ryan ANDRIAMAHERY", text: "Développeur back end | Cofondateur et Directeur des opérations de HEI" },
    { image: field2, name: "Jean Aimé Maxa", text: "Responsable technique cybersécurité chez CES France Continental (Toulouse – France)" },
    { image: field3, name: "Parison Ravalomanda", text: "Ingénieur en informatique | Ingénieur logiciel chez Google (Londres – UK)" },
    { image: field4, name: "Yannick Raharijaona", text: "Responsable technique ML chez Rocket Science (Ottawa – Canada)" },
    { image: field5, name: "Dre Tahina Ralitera", text: "Docteure-Ingénieure, CNRS France | Prix L'Oréal-UNESCO pour les Femmes en Science (2017)" },
    { image: field6, name: "Dr Lou Maurica", text: "Docteur-Ingénieur en informatique | Fondateur et Directeur pédagogique de HEI" },
    { image: field7, name: "Mirado RAFENOMAHENINTSOA", text: "Data and Business Intelligence Specialist 5+" },
    { image: field8, name: "Julien RAJERISON", text: "Lead Développeur | Fondateur de l'association Techzara Madagascar" },
];

function Team() {
    const [current, setCurrent] = useState(0);
    const slidesToShow = 3;
    const maxIndex = slides.length - Math.ceil(slidesToShow);

    const prevSlide = () => {
        setCurrent((prev) => prev === 0 ? maxIndex : prev - 1);
    };

    const nextSlide = () => {
        setCurrent((prev) => prev >= maxIndex ? 0 : prev + 1);
    };

    return (
        <main className="main relative overflow-visible">
            <h1 className="tittle h1">L'équipe pédagogique</h1>
            <p className="px-20">
                Notre équipe pédagogique se compose d'experts nationaux et internationaux de l'informatique,
                de la cybersécurité, de l'intelligence artificielle, dont un ingénieur chez Google.
                Ils sont passionnés par l'informatique et sont engagés vers l'excellence.
                Nous sommes conscients que cette équipe est la pierre angulaire de l'employabilité de nos étudiants,
                elle a été soigneusement sélectionnée.
            </p>

            <div className="relative py-4 mx-20">
                <button
                    onClick={prevSlide}
                    className="absolute -left-20 top-1/2 p-4 text-white"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>

                <div className="w-full overflow-hidden ">
                    <div
                        className="flex transition-transform duration-700 ease-in-out py-5 px-7"
                        style={{
                            transform: `translateX(-${current * (100 / slidesToShow)}%)`,
                        }}
                    >
                        {slides.map((person, index) => (
                            <section
                                key={index}
                                className="main-section text-center"
                                style={{
                                    width: `calc(${105 / slidesToShow}% - 1rem)`,
                                    minWidth: `calc(${105 / slidesToShow}% - 1rem)`,
                                    marginRight: '1rem'
                                }}
                            >
                                <img src={person.image} alt={person.name} className="team-image mx-auto" />
                                <div className="text mt-4 px-2">
                                    <h4 className="team-h4 text-base">{person.name}</h4>
                                    <p className="text-xs leading-tight">{person.text}</p>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    className="absolute -right-20 top-1/2 text-white text-xl "
                >
                    <i className="fas fa-chevron-right"></i>
                </button>

                <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${current === index ? 'bg-white' : 'bg-white/50'
                                }`}
                            aria-label={`Aller au slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Team;
