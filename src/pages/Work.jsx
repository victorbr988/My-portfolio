import { Navbar } from '../components/Navbar'
import { CardProject } from '../components/CardProject'
import { githubProjects } from '../helpers/githubProjects'
export function Work() {
  return (
    <main className='dark:bg-gray-800 min-h-screen'>
      <div className='h-32'>
        <Navbar />
      </div>
      <div className="flex flex-wrap justify-center">
      {
        githubProjects.map((project) => (
          <CardProject data={project} model={project.Web.includes('https')} />
        ))
      }
      </div>
    </main>
  )
}