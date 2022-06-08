
import { Dashboard } from '../components/Dashboard'
import { Stacks } from '../components/Stacks'
import { motion } from "framer-motion";
import { Navbar } from '../components/Navbar'

function Home() {
  return (
    <motion.div
      transition={{
        duration: .7,
      }}
      className="container"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <div className="flex flex-col dark:bg-gray-900">
        <Navbar />
        <div className='flex md:w-full '>
          <div className="flex flex-col mt-32 items-center w-full">
            <div className="flex items-center ">
              <Dashboard/>  
            </div>
            <div className='md:flex md:w-[800px] dark:bg-red-900'>
              <Stacks />
            </div>
            
          </div>
        </div>
        
       
      </div>
    </motion.div>
  )
}

export default Home;