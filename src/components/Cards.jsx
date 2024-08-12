/* eslint-disable react/prop-types */
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
import React from 'react';
export const CardSkill = ({ img_url, name, size }) => {
  return (
    <div className="flex flex-col  items-center text-white w-full  ">
      <img
        src={img_url}
        className={size !== '' ? size : ' size-20 object-contain max-sm:size-16'}
        alt={name}
      />
      <p className="">{name}</p>
    </div>
  );
};

export const CardProyect = ({
  imgProyect,
  nameProyect,
  abstractProyect,
  toolsProyect,
  urlCode,
  urlLive,
}) => {
  const iconTool = (item) => {
    return <img src={item} alt="Tool Icon" className="size-9" />;
  };
  const viewCard = (url, type) => {
    return (
      <a
        href={url}
        target="_blank"
        className="flex flex-row gap-2 items-center py-2 px-4 bg-ligth rounded-md hover:opacity-80"
      >
        <p className="text-xl max-sm:text-[18px]">{type}</p>
        {type === 'Code' ? <FaGithub /> : <FaLink className="icon-link" />}
      </a>
    );
  };

  return (
    <div className="w-3/4   max-lg:w-[85%]  max-[800px]:flex-col text-white flex flex-row    mt-10 rounded-md overflow-hidden min-h-[50vh] mx-auto font-Inter">
      <figure className="w-1/2 bg-ligth items-center justify-center flex  max-[800px]:w-full max-[800px]:p-10 max-sm:p-5">
        <img
          src={imgProyect}
          className="w-[85%] h-[85%] rounded-md transition-transform duration-500 ease-in-out hover:scale-110  max-[800px]:size-[100%]  "
        />
      </figure>
      <div className="w-1/2  flex flex-col bg-[#1F2937]  py-6 px-10 max-sm:px-6   items-start text-start gap-4 justify-center  max-[800px]:w-full   ">
        <p className="font-bold text-4xl  max-sm:text-2xl">{nameProyect}</p>
        <p className="opacity-75 text-[16px] max-sm:text-[12px]">{abstractProyect}</p>
        <div className="flex flex-row gap-3 max-sm:grid max-sm:grid-cols-6">
          {toolsProyect.map((item, index) => (
            <React.Fragment key={index}>{iconTool(item)}</React.Fragment>
          ))}
        </div>
        <div className="flex flex-row gap-3 ">
          {urlCode && viewCard(urlCode, 'Code')}
          {urlLive && viewCard(urlLive, 'Live')}
        </div>
      </div>
    </div>
  );
};
