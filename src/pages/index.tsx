import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-orange-800 via-orange-400 to-green-600 text-white min-h-screen flex items-center overflow-hidden relative">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center mb-6">
              <img
                src="/img/sena-logo.png"
                alt="Logo SENA"
                className="w-24 h-24 mr-4"
              />
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                <span className="inline-block animate-pulse text-white-700 ">
                  Listo
                </span>{' '}
                para dar un{' '}
                <span className="inline-block animate-bounce">giro</span> a tu futuro?
              </h1>
            </div>
            <h2 className="text-3xl font-semibold">
              Conviértete en un experto en
              <br />
              <span className="text-slate-100 text-5xl">
                Mantenimiento Electrónico e Instrumental Industrial
              </span>
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto lg:mx-0">
              Desarrolla habilidades para mantener operaciones industriales de vanguardia.
              Desde sistemas de control hasta maquinaria de última generación,
              ¡serás el maestro de la tecnología con el SENA!
            </p>
            <div className='m-3'>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSdhqsIYd4CxyRI-UZZ2ZvKHlWigmy8OdZLkm5Brh8WPi5uqfA/viewform?usp=sf_link'>
              <button className="group bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300 transform hover:-translate-y-1">
                <span className="block group-hover:hidden">Inscríbete Ya</span>
                <span className="hidden group-hover:block">¡Asegura tu futuro!</span>
              </button>
            </a>
            <a href='/docs/intro'>
              <button className="group bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300 transform hover:-translate-y-1 ml-3">
                <span className="block group-hover:hidden">Relizar Actividad</span>
                <span className="hidden group-hover:block">¡Divierte creando!</span>
              </button>
            </a>
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500 to-orange-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img
              src="/img/img1.jpg"
              alt="Mantenimiento Industrial"
              className="relative rounded-lg shadow-2xl w-full object-cover transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-white text-orange-600 p-4 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <p className="font-bold text-lg">Cupos limitados!</p>
              <p className="text-sm">Inicia: 1 de Febrero de 2025</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-green-600 to-transparent"></div>
    </div>
  );
};

export default HeroSection;