import { Navbar } from '../components/Navbar'
import { CardProject } from '../components/CardProject'
export function Work() {
  return (
    <main>
      <div className='h-32'>
        <Navbar />
      </div>
      <div className="flex flex-wrap gap-6">
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
    </main>
  )
}