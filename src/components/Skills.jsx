import skills from '../data/skillsIcon';
import { CardSkill } from '../components/Cards';
const Skills = () => {
  return (
    <section className="w-full  py-10  px-20   text-center font-light text-white max-sm:px-10 mx-auto">
      <div className="bg-[#374161] py-1 px-5 rounded-xl opacity-80 w-fit mx-auto">
        Habilidades
      </div>
      <p className=" text-xl mt-3">
        Las habilidades, herramientas y tecnologías en las que soy bueno:
      </p>
      <div className="grid grid-cols-8 mt-10 gap-8 max-[900px]:grid-cols-6 max-md:grid-cols-4 max-sm:grid-cols-3">
        {skills.map((item, index) => {
          return (
            <CardSkill key={index} name={item.name} img_url={item.img_url} size={item.size} />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
