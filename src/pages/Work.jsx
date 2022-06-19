import { Navbar } from '../components/Navbar'
import { CardProject } from '../components/CardProject'
import { githubProjects } from '../helpers/githubProjects'
export function Work() {
  return (
    <main className='dark:bg-gray-800 min-h-screen'>
      <div className='h-32'>
        <Navbar />
      </div>
      <div className="flex flex-wrap gap-6">
      {
        githubProjects.map((project) => (
          <CardProject 
            title={project.title}
            description={project.description}
            image={project.image}
            web={project.Web}
            github={project.github}
            id={project.id}
          />
        ))
      }
        
      </div>
    </main>
  )
}