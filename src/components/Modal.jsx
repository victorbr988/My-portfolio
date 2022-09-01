import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import toast from 'react-hot-toast';

export const Modal = ({ isOpen, closeModal }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <div className="fixed inset-0 overflow-y-auto">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl mb-10 text-center font-medium leading-6 text-gray-900"
                  >
                    Entrar em contato
                  </Dialog.Title>
                  <form className="mt-2 md:flex-row mb-3 flex flex-col gap-3">
                    <section className='flex flex-col'>
                      <label htmlFor="name">Nome</label>
                      <input
                        placeholder='Jhon Doe'
                        className='bg-gray-100 p-2 rounded-lg'
                        type="text"
                        id="name" 
                      />
                    </section>
                    <section className='flex flex-col'>
                      <label htmlFor="name">E-mail</label>
                        <input
                          placeholder='JhonDoe@gmail.com'
                          className='bg-gray-100 p-2 rounded-lg'
                          type="email"
                          id="name" 
                        />
                    </section>
                  </form>
                  <section className='flex flex-col'>
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                      placeholder='Message'
                      className='bg-gray-100 resize-none h-24 p-2 rounded-lg'
                      id="message"></textarea>
                  </section>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="hover:bg-orange-500 bg-orange-400 transition-colors text-white text-lg w-full py-2 rounded-lg"
                      onClick={() => {
                        closeModal();
                        toast.success('E-mail enviado com sucesso')
                      }}
                    >
                      Enviar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
       </Dialog>
      </Transition> 
    </>
  )
}