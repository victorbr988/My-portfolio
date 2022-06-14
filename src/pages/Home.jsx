
import { Dashboard } from '../components/Dashboard'
import { Stacks } from '../components/Stacks'
import { motion } from "framer-motion";
import { Navbar } from '../components/Navbar'
import { Education } from '../components/Education';

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
      <div className="flex flex-col w-screen dark:bg-gray-900">
        <Navbar />
        <div className='flex w-screen'>
          <div className="flex flex-col mt-32 w-screen items-center">
            <div className="flex items-center w-full justify-center">
              <Dashboard/>  
            </div>
            <div>
              <Education />
            </div>
            <div className='flex flex-col'>
              <Stacks />
            </div>
            
          </div>
        </div>
        
       
      </div>
    </motion.div>
  )
}

export default Home;