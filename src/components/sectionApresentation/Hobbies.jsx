import { ButtonStatistic } from './ButtonStatistic';
import { FiMusic, FiFilm } from 'react-icons/fi';
import { BiFootball, BiGame } from 'react-icons/bi'
export const Hobbies = () => {
  return (
    <div className='flex flex-col gap-3'>
      <section>
        <ButtonStatistic
          href='#'
        >
          <FiMusic className='text-2xl' />
          <span className='hidden group-hover:block'>músicas</span>
        </ButtonStatistic>
      </section>
      
      <section>
        <ButtonStatistic
          href='#'
        >
          <FiFilm className='text-2xl' />
          <span className='hidden group-hover:block'>Filmes</span>
        </ButtonStatistic>
      </section>
      
      <section>
        <ButtonStatistic
          href='#'
        >
          <BiFootball className='text-2xl'  />
          <span className='hidden group-hover:block'>Esportes</span>
        </ButtonStatistic>
      </section>
      <section>
        <ButtonStatistic
          href='#'
        >
          <BiGame className='text-2xl'  />
          <span className='hidden group-hover:block'>Jogos</span>
        </ButtonStatistic>
      </section>
    </div>
  );
};
