import { CardProyect } from '../components/Cards';
import proyects from '../data/proyects.json';
// import { useState,useEffect } from 'react';

const Proyects = () => {
  return (
    <section
      className="w-full  py-10  px-20 max-xl:px-10  max-lg:px-0 text-center font-light text-white    mx-auto"
      id="section-proyects"
    >
      <div className="bg-[#374161] py-2 px-5   rounded-xl opacity-80 w-fit mx-auto mt-5  ">
        Proyectos
      </div>
      <p className=" text-xl mt-3 max-sm:w-3/4 max-sm:mx-auto">
        Algunos de los proyectos notables que he construido:
      </p>
      {proyects.map((item, index) => {
        return (
          <CardProyect
            key={index}
            imgProyect={item.imgProyect}
            nameProyect={item.nameProyect}
            abstractProyect={item.abstractProyect}
            toolsProyect={item.toolsProyect}
            urlCode={item.urlCode}
            urlLive={item.urlLive}
          ></CardProyect>
        );
      })}
    </section>
  );
};

export default Proyects;
