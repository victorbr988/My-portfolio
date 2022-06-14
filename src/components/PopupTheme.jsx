import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { getLocalStorage, setLocalStorage } from '../helpers';
import { motion } from 'framer-motion';
import { Alert } from './Alert';

export const PopupTheme = () => {
  const [enabled, setEnabled] = useState(getLocalStorage() === 'dark' ? true : false)
  const [success, setSuccess] = useState(false)
  
  function preview(enable) {
  
    setEnabled(enable)
    
    if (enable) {
      setSuccess({success: true})
      setTimeout(() => {
        setSuccess({success: false})
      }, 2000)
      
      setLocalStorage('dark')
    }
    else {
      setSuccess({success: true})
      setTimeout(() => {
        setSuccess({success: false})
      }, 2000)
      setLocalStorage('light')
    }
    const taghtml = document.querySelector('html')
    taghtml.className = getLocalStorage() 
  }
  
  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={enabled}
        onChange={preview}
        className={`${enabled ? 'bg-gray-600' : 'bg-gray-600'}
          relative inline-flex h-[22px] w-[56px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg text-sm ring-0 transition duration-200 ease-in-out`}
        >
         
        </span>
      </Switch>
      <h2 className='text-gray-700 dark:text-gray-300'>Alterar tema</h2>
        <motion.div>
          {success.success === true ?(
          <motion.div 
            className="absolute top-64 lg:top-32"
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
      </motion.div>
    </div>    
  )
}
