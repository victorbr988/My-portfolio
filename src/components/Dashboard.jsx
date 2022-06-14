import profile from '../assets/images/profile.jpg'
import {FiGithub, FiLinkedin} from 'react-icons/fi'
import { ButtonRedirectPrimary, ButtonRedirectSecondary } from './Button'
export function Dashboard() {
  return (
    <section className="flex flex-col">
        <div className="px-6 bg-zinc-50 rounded dark:bg-gray-800 py-8">
            <div className="items-center md:flex">
                <div className="md:w-1/2 flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Quem sou eu</h2>

                    <p className="mt-4 text-gray-600 dark:text-gray-400 lg:max-w-md">
                        Olá , eu sou Victor Gabriel, sou desenvolvendor Full Stack.
                        Minha linguagem de programação preferida é JavaScript. Comecei a estudar programação 
                        em 2020 como autodidata e desde então sigo me aperfeiçoando.
                    </p>

                    <div className="flex items-center gap-3 mt-6-mx-2">
                        <ButtonRedirectSecondary href="https://github.com/victorbr988" >
                            <FiGithub className='dark:text-gray-300 text-lg' />
                        </ButtonRedirectSecondary>
                    
                        <ButtonRedirectPrimary href="https://www.linkedin.com/in/victor-gabriel-2543241b8/" >
                            <FiLinkedin className='dark:text-gray-300 text-lg' />
                        </ButtonRedirectPrimary>
                    </div>
                </div>

                <div className="mt-8 md:mt-0  md:w-1/2">
                    <div className="flex items-center justify-center md:justify-end">
                        <div className="max-w-lg rounded-full">
                            <img className="object-cover object-center w-full h-64 rounded-3xl shadow" src={profile} alt="foto de perfil"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}