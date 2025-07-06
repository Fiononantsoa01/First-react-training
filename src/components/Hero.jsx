import { useState, useEffect } from "react";
import banner from '../assets/image/heibanner.webp';
import banner2 from '../assets/image/hei-banner-2.webp';
import banner3 from '../assets/image/hei-banner-3.webp';

const slides = [
  {
    image: banner2,
    text: "« L’éducation est l’arme la plus puissante pour changer le monde » selon Nelson Mandela. L’éducation dans l’informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar » selon HEI. C’est notre mission.",
  },
  {
    image: banner3,
    text: "Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relâche pour la montée en compétences de nos étudiants.",
  },
  {
    image: banner,
    text: "Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l’employabilité de nos étudiants.",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);  // cleanup pour éviter fuites mémoire
  }, []);
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen transition-all duration-700 px-14 text-center text-white"
      id="Accueil"
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      <div className="absolute inset-0 bg-black/50 "></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center gap-20 pt-20 ">
        <h1 className="tittle h1 text-white text-6xl font-bold">
          Haute École d'informatique
        </h1>
        <h2 className="text-white text-2xl max-w-5xl leading-relaxed px-4">
          {slides[current].text}
        </h2>
        <ul className="list flex justify-between space-x-20 mt-4">
          <li className="list-items list-items-1">
            <a href="#">Inscrivez-vous ici</a>
          </li>
          <li className="list-items list-items-2">
            <a href="#">Emploi du temps</a>
          </li>
          <li className="list-items list-items-3">
            <a href="#">Programme pédagogique</a>
          </li>
        </ul>
        <h2 className="text-white text-xl mt-10">
          Habilitation MESupRES, suivant l'arrêté n°31309/2023
        </h2>
        <div className="flex gap-4 mt-4 size-40">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${i === current ? "bg-white" : "bg-white/50"
                }`}
            ></span>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10
             rounded-full p-2
             hover:bg-white
             transition-colors duration-300"
        >
          <i className="icone fa-solid fa-arrow-left text-inherit" style={{color: "white"}}></i>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10
              rounded-full p-2
             hover:bg-white
             transition-colors duration-300"
        >
          <i className="icone fa-solid fa-arrow-right text-inherit"></i>
        </button>

      </div>
    </div>
  );
}

export default Hero;
