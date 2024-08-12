import { CardProyect } from '../components/Cards';
import proyects from '../data/proyects.json';
// import { useState,useEffect } from 'react';

const Proyects = () => {
  return (
    <section
      className="w-full  py-10  px-20   text-center font-light text-white  max-sm:px-10 mx-auto"
      id="section-proyects"
    >
      <div className="bg-[#374161] py-1 px-5 rounded-xl opacity-80 w-fit mx-auto mt-5">
        Proyectos
      </div>
      <p className=" text-xl mt-3">Algunos de los proyectos notables que he construido:</p>
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
