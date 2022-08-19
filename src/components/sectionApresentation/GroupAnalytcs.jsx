import { GroupButtonsStatistics } from './GroupButtonsStatistics';
import { Hobbies } from './Hobbies';
import { SocialMedia } from './SocialMedia';

export const GroupAnalytcs = () => {
  return (
    <section className='grid grid-cols-1 justify-center items-center gap-2 w-full'>
      <div className='sm:flex-row flex flex-col gap-2 w-full'>
        <section className='text-center sm:w-1/2 w-full p-8 shadow-xl rounded-xl'>
          <h2 className='mb-4 rounded-full text-2xl'>Redes Sociais</h2>
          <SocialMedia />
        </section>
        <section className='flex flex-col sm:w-1/2 w-full p-8 shadow-xl rounded-xl'>
          <h2 className='mb-4 text-center text-2xl'>Hobbies</h2>
          <Hobbies />
        </section>
      </div>  
      <section className='text-center w-full p-8 shadow-xl rounded-xl'>
        <h2 className='mb-4 text-2xl'>Contribuições</h2>
        <GroupButtonsStatistics />
      </section>
      
    </section>
  );
};
