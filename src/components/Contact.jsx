import { copyText } from '../utils/tools';
import { MdOutlineEmail } from 'react-icons/md';
import { FiCopy } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';

const Contact = () => {
  const socialCards = (name, icon, url) => {
    return (
      <a
        className="flex flex-row gap-2 px-2 py-1 items-center hover:bg-gray-950 rounded-md min-w-32 justify-center hover:opacity-80 max-sm:px-10 mx-auto"
        href={url}
        target="_blank"
      >
        <img src={icon} className="size-8" />
        {name}
      </a>
    );
  };

  return (
    <section
      className="flex flex-col gap-5  py-10  px-20 font-Inter items-center  text-white w-full "
      id="section-contact"
    >
      <div className="bg-[#374161] py-1 px-5 rounded-xl opacity-80">Contactos</div>

      <p className="opacity-80 mx-auto  ">
        {
          '¿Qué sigue? No dudes en comunicarte conmigo si estás buscando un desarrollador, tienes alguna consulta o simplemente quieres conectarte.'
        }
      </p>
      <div className="flex flex-row gap-2">
        <MdOutlineEmail className="text-gray-200 size-6 " />
        <p id="email" className="text-2xl">
          enriquemendohuapaya@gmail.com
        </p>
        <FiCopy
          className="text-gray-200 size-6  hover:text-gray-400 cursor-pointer"
          onClick={() => {
            copyText(document.getElementById('email').textContent);
          }}
        />
      </div>
      <div className="flex flex-row gap-2">
        <IoCallOutline className="text-gray-200 size-6 " />
        <p id="telefono" className="text-2xl">
          +51 974656883
        </p>
        <FiCopy
          className="text-gray-200 size-6  hover:text-gray-400 cursor-pointer"
          onClick={() => {
            copyText(document.getElementById('telefono').textContent);
          }}
        />
      </div>
      <p className="opacity-80">¡También puedes encontrarme en estas plataformas!</p>

      <div className="flex flex-row gap-3">
        {socialCards(
          'Linkedin',
          '/src/assets/linkedin.svg',
          'https://www.linkedin.com/in/jose-enrique-mendo-huapaya-0758ab261/'
        )}
        {socialCards(
          'Github',
          '/src/assets/github.svg',
          'https://github.com/JoseEnriqueMendo'
        )}
        {socialCards('Twitter', '/src/assets/twitter.svg', '')}
      </div>
    </section>
  );
};

export default Contact;
