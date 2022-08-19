import { githubProjects } from "../helpers/githubProjects";
import { FiChevronRight } from "react-icons/fi";

export const ProjectsMostBeRelevants = () => {
  return (
   githubProjects.map((details) => (
    <div className="flex flex-col gap-12">
      <div className="drop-shadow-2xl shadow-2xl shadow-gray-900/75 bg-white rounded-3xl">
        <div className="flex p-4 gap-2">
          <div className="bg-red-600 h-3 w-3 rounded-full"></div>
          <div className="bg-yellow-300 h-3 w-3 rounded-full"></div>
          <div className="bg-green-600 h-3 w-3 rounded-full"></div>
        </div>
        <img src={details.image} className='rounded-b-3xl' alt={details.title} />
      </div>

      <div className="flex flex-col mb-10 mx-4 md:mx-0 gap-2">
        <h1 className="text-3xl text-gray-900">{details.title}</h1>
        <h2 className="text-gray-100">Criado em - {details.date}</h2>
        <a target="_blank" className="flex gap-1 text-lg items-center" href={details.Web}>Ver no Browser <FiChevronRight className="text-lg" /></a>
      </div>
    </div>
   )) 
  );
};
