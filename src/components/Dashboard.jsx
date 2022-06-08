import profile from '../assets/images/profile.jpg'
import {FiGithub, FiLinkedin} from 'react-icons/fi'
export function Dashboard() {
  return (
    <section className="flex flex-col">
        <div className="px-6 bg-zinc-50 md:m-8 dark:bg-gray-800 py-8 mx-auto">
            <div className="items-center lg:flex">
                <div className="lg:w-1/2 flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Quem sou eu</h2>

                    <p className="mt-4 text-gray-600 dark:text-gray-400 lg:max-w-md">
                        Olá , eu sou Victor gabriel, sou desenvolvendor Full Stack.
                        Minha linguagem de programação preferida é JavaScript. Comecei a estudar programação 
                        em 2020 como autodidata e desde então sigo me aperfeiçoando.
                    </p>

                    <div className="flex items-center mt-6-mx-2">
                        <a className="mx-2" href="#" aria-label="Linkden">
                            <FiGithub className='dark:text-gray-300 text-lg' />
                        </a>
                    
                        <a className="mx-2" href="#" aria-label="Github">
                            <FiLinkedin className='dark:text-gray-300 text-lg' />
                        </a>
                    </div>
                </div>

                <div className="mt-8 lg:mt-0  lg:w-1/2">
                    <div className="flex items-center justify-center lg:justify-end">
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