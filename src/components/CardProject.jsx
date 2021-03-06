import { ButtonRedirectPrimary, ButtonRedirectSecondary } from "./Button"
import { FiGithub, FiGlobe } from 'react-icons/fi'

export const CardProject = (props) => {
  const { title, description, image, Web, github } = props.data
  const model = props.model
  return (
    <div class="max-w-xs mx-8 my-10 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div class="px-4 py-2">
            <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">{title}</h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
        <img class="object-cover w-full h-48 mt-2" src={image} alt={`imagem ${title}`} />
        <div class={`flex items-center gap-2 ${model ? 'justify-between': 'justify-center' }  px-4 py-2 bg- dark:bg-gray-900`}>
            {model && (
              <ButtonRedirectPrimary href={Web}>
                <FiGlobe className="text-lg text-blue-900 dark:text-blue-500" />
                Ver modelo
              </ButtonRedirectPrimary>
            )}
            <ButtonRedirectSecondary href={github}>
              <FiGithub className="text-lg text-gray-900 dark:text-gray-300" />
              Ver código
            </ButtonRedirectSecondary>
        </div>
    </div>
  )
}