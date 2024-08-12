/* eslint-disable react/prop-types */
import { IoCloseSharp } from 'react-icons/io5';
import { downloadFile } from '../utils/tools';
import { RiMoonClearLine } from 'react-icons/ri';
import MyIcon from './MyIcon';
import { useState, useEffect } from 'react';

const SubmenuModal = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, 500); // Espera que la animación de salida termine antes de cerrar
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-700 bg-opacity-60">
      <div
        className={`bg-main w-3/4 max-sm:w-[85%] h-full transform ${
          isOpen ? 'animate-slideInFromLeft' : 'animate-slideOutToLeft'
        }`}
      >
        <div className="flex justify-between items-center max-h-[8vh] min-h-[8vh] h-[8vh] p-1 px-5">
          <MyIcon />
          <IoCloseSharp onClick={handleClose} className="size-10 opacity-75" />
        </div>
        <div className="flex flex-col w-full mt-2">
          <a className="text-gray-200 cursor-pointer hover:bg-[#282727]  text-lg py-2 px-4">
            Sobre mi
          </a>
          <a className="text-gray-200 cursor-pointer hover:bg-[#282727]  text-lg py-2 px-4">
            Experiencia
          </a>
          <a
            className="text-gray-200 cursor-pointer hover:bg-[#282727]  text-lg py-2 px-4"
            href="#section-proyects"
          >
            Proyectos
          </a>
          <a
            className="text-gray-200 cursor-pointer hover:bg-[#282727] text-lg py-2 px-4"
            href="#section-contact"
          >
            Contactos
          </a>
          <div className="text-gray-200 cursor-pointer hover:bg-[#282727] text-lg py-2 px-4 flex flex-row justify-between">
            <p>Cambiar tema</p>
            <RiMoonClearLine className="text-gray-200 size-6  hover:text-gray-400 cursor-pointer" />
          </div>

          <button
            className="bg-white p-2 w-3/4 text-main font-semibold rounded-lg hover:text-gray-600 mx-auto mt-5"
            onClick={downloadFile}
          >
            Descargar CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmenuModal;
