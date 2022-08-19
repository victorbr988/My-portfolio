import { FiNavigation } from "react-icons/fi";

export const Certified = ({src, description, title, link}) => {
  return (
    <div className="max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="flex justify-end -mt-16 ">
          <img className="object-cover w-24 h-24 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="cerficated" src={src}/>
      </div>

      <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-2xl">{title}</h2>

      <p className="mt-2 text-gray-600 dark:text-gray-200">{description}</p>
      
      <div className="flex justify-end mt-4">
        <a href={link} target='_blank' className="text-xl flex gap-2 items-center font-semibold text-orange-400 dark:text-blue-300">Ver certificado <FiNavigation /></a>
      </div>
    </div>
  );
};
