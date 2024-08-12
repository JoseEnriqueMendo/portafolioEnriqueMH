import MyIcon from './MyIcon';
import { RiMoonClearLine } from 'react-icons/ri';
import { downloadFile } from '../utils/tools';
import { IoMenu } from 'react-icons/io5';
import SubmenuModal from './SubmenuModal';
import { useState } from 'react';
const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="w-full  flex flex-row gap-2 text-white max-h-[8vh] min-h-[8vh] h-[8vh] overflow-hidden p-1 px-10  max-sm:px-5  max-[370px]:px-3    items-center justify-between sticky top-0 z-50 bg-black ">
      <SubmenuModal isOpen={isModalOpen} onClose={closeModal}></SubmenuModal>
      <MyIcon></MyIcon>
      <div className="hidden max-lg:block " onClick={openModal}>
        <IoMenu className="size-10 cursor-pointer" />
      </div>
      <div className="h-full items-center flex flex-row w-3/4  justify-end gap-4 font-Inter max-lg:hidden">
        <a className="text-gray-200 cursor-pointer hover:text-gray-400 text-lg">Sobre mi</a>
        <a className="text-gray-200 cursor-pointer hover:text-gray-400 text-lg">Experiencia</a>
        <a
          className="text-gray-200 cursor-pointer hover:text-gray-400 text-lg"
          href="#section-proyects"
        >
          Proyectos
        </a>
        <a
          className="text-gray-200 cursor-pointer hover:text-gray-400 text-lg"
          href="#section-contact"
        >
          Contactos
        </a>
        <RiMoonClearLine className="text-gray-200 size-6  hover:text-gray-400 cursor-pointer" />
        <button
          className="bg-white p-2 px-4 text-main  font-semibold rounded-lg hover:text-gray-600  "
          onClick={downloadFile}
        >
          Descargar CV
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
