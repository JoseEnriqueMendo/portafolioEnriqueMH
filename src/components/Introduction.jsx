import { HiOutlineMapPin } from 'react-icons/hi2';
import { TbPointFilled } from 'react-icons/tb';

const Introduction = () => {
  return (
    <section className="flex flex-row gap-5  py-10  px-20 font-Inter items-center max-lg:flex-col-reverse min-h-[50vh] max-sm:px-10 mx-auto ">
      <div className="flex flex-col text-white w-3/4 gap-3 max-lg:w-full ">
        <div className="flex flex-row gap-2">
          <h1 className="font-bold text-5xl max-sm:text-[44px]">
            Hola, soy Jose Enrique Mendo H.
          </h1>
          <img
            src="https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f44b.gif"
            className="size-14 pb-1 max-[900px]:hidden"
          />
        </div>
        <p className="w-[90%] max-sm:w-full font-light text-gray-300">
          {
            'Soy un desarrollador junior full stack (React.js y Node.js) cuyo objetivo es crear (y ocasionalmente diseñar) experiencias digitales excepcionales que sean rápidas, accesibles, visualmente atractivas y responsivas. '
          }
        </p>
        <div className="flex flex-row gap-3 max-sm:mt-2">
          <HiOutlineMapPin className="text-gray-200" /> <p>Lima. Perú</p>
        </div>
        <div className="flex flex-row gap-2 -mt-2">
          <TbPointFilled className="text-green-600 size-6 -ml-1 " />
          <p>Disponible para nuevos proyectos</p>
        </div>
      </div>
      <figure className="w-1/4 overflow-hidden max-lg:w-full">
        <div className="w-60 overflow-hidden h-72 border-[10px]  border-gray-300  max-lg:mx-auto">
          <img src="yo.jpg" className="w-64 object-cover" />
        </div>
      </figure>
    </section>
  );
};

export default Introduction;
