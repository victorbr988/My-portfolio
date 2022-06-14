import { ButtonRedirectPrimary, ButtonRedirectSecondary } from "./Button"
import { FiGithub, FiGlobe } from 'react-icons/fi'
export const CardProject = () => {
  return (
    <div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div class="px-4 py-2">
            <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">NIKE AIR</h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
        </div>
        <img class="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" alt="NIKE AIR" />
        <div class="flex items-center gap-2 justify-between px-4 py-2 bg- dark:bg-gray-900">
            <ButtonRedirectPrimary href="#">
              <FiGlobe className="text-lg text-blue-900 dark:text-blue-500" />
              Ver modelo
            </ButtonRedirectPrimary>
            <ButtonRedirectSecondary href="#">
              <FiGithub className="text-lg text-gray-900 dark:text-gray-300" />
              Ver código
            </ButtonRedirectSecondary>
        </div>
    </div>
  )
}