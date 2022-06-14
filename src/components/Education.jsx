import { CardSchool } from "./CardSchool"
import trybe from '../assets/images/trybe.png'
import favip from '../assets/images/favip.png'

export const Education = () => {
  return (
    
    <section class="bg-white dark:bg-gray-900">
      <div class=" px-6 py-10">
        <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Minhas <span class="text-blue-500">Formações</span></h1>
        
        <p class="max-w-2xl mx-auto my-6 text-center text-gray-600 dark:text-gray-300">
            Conheça todo o meu histórico acadêmico neste presente momento
        </p>
        <div className="flex flex-wrap justify-center gap-8" >
          <CardSchool
            image={trybe}
            title={'Trybe'}
            name={'desenvolvimento de software'}
            description={'A trybe é uma escola de desenvolvimento de software alinhada com o mercado, focada em desenvolvimento Front-end, Back-end e Soft Skils.'}
            href={'https://www.betrybe.com/'}
          />
          <CardSchool
            image={favip}
            title={'Unifavip'}
            name={'Universidade do vale do ipojuca'}
            description={'Graduação em ciência de dados incompleta, cursando um total de 6 meses'}
            href={'https://www.wyden.com.br/'}
          />
        </div>
         
      </div>
    </section>
  )
}