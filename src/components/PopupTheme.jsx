import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { getLocalStorage, setLocalStorage } from '../helpers';
import { motion } from 'framer-motion';
import { Alert } from './Alert';
import { useNavigate } from 'react-router-dom'
import { ButtonPrimary, ButtonSecondary } from './Button';

export const PopupTheme = () => {
  const history = useNavigate()
  const [enabled, setEnabled] = useState(false)
  const [success, setSuccess] = useState(false)
  let theme = 'ligth'
  
  function preview() {

    if (enabled) {
      theme = 'dark'
    }

    const taghtml = document.querySelector('html')
    taghtml.className = theme 
  }

  function handleClick() {
    setSuccess({success: true})
    
    setTimeout(() => {
      setSuccess({success: false})
      history('/')
    }, 2000)

    setLocalStorage(theme)
  }
  
  return (
    <section id="preview" className="bg-white dark:bg-gray-800 h-screen">
      <motion.div
        transition={{
          duration: .7,
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        className="max-w-3xl px-6 py-16 mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Gostaria de alterar o tema ?</h1>
        <p className="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">
          A luz da tela configurada pelo padrão claro pode causar um brilho excessivo. Usar o modo escuro diminui 
          o brilho da tela, deixando a visualização mais confortável.
        </p>

        <div className="py-16">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
              relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            {preview()}
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
        <div className="flex gap-2 justify-center">
          <ButtonPrimary
            handleClick={ handleClick }
            title="salvar"
          />
          <ButtonSecondary
            className="border-2 border-gray-200 bg-white dark:bg-gray-600 dark:text-white dark:border-gray-100"
            handleClick={ handleClick }
            title="Voltar"
          />
        </div>
        
        <h2 className='mt-10 dark:text-white text-gray-800'>{`Seu tema atual é ${getLocalStorage() || 'ligth'}`}</h2>
      </motion.div>
      {success.success === true ?(
        <motion.div 
          className="absolute"
          initial={{
            right: 100,
            duration: 1,
          }}
          animate={{
            right: 0,
          }}
        >
          <Alert />
        </motion.div>
      ): ''}
      
    </section>
  )
}
