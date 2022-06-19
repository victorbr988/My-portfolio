import { FiArrowRight } from "react-icons/fi"

export const CardSchool = (props) => {
  const {image, title, name, description, href} = props
  return (
    <a class="px-12 lg:w-[400px] w-80 mt-10 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-700 dark:hover:border-transparent"
      target="_blank"
      href={href}>
      <div class="flex flex-col sm:-mx-4 sm:flex-row">
        <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={image} alt="imagem education" />

        <div class="mt-4 sm:mx-4 sm:mt-0">
          <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">{title}</h1>
                
          <p class="mt-2 text-gray-500 capitalize dark:text-gray-600 ">{name}</p>
        </div>
      </div>

      <p class="mt-4 text-gray-600 capitalize dark:text-gray-300  h-36 flex items-center">{description}</p>
      <FiArrowRight className="text-gray-800 mt-4 text-2xl dark:text-gray-600"/>
    </a>
  )
}