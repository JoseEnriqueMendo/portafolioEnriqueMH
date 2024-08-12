/* eslint-disable react/prop-types */
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
import React from 'react';
export const CardSkill = ({ img_url, name, size }) => {
  return (
    <div className="flex flex-col  items-center text-white w-full  ">
      <img src={img_url} className={size !== '' ? size : ' size-20 '} alt={name} />
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
        <p className="text-xl">{type}</p>
        {type === 'Code' ? <FaGithub /> : <FaLink className="icon-link" />}
      </a>
    );
  };

  return (
    <div className="w-3/4 text-white flex flex-row mt-10 rounded-md overflow-hidden min-h-[50vh] mx-auto font-Inter">
      <figure className="w-1/2 bg-ligth items-center justify-center flex">
        <img
          src={imgProyect}
          className="w-[85%] h-[85%] rounded-md transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </figure>
      <div className="w-1/2  flex flex-col bg-[#1F2937]  py-6 px-10 items-start text-start gap-4 justify-center">
        <p className="font-bold text-4xl">{nameProyect}</p>
        <p className="opacity-75 text-[16px]">{abstractProyect}</p>
        <div className="flex flex-row gap-3">
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
