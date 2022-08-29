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
          <span>músicas</span>
        </ButtonStatistic>
      </section>
      
      <section>
        <ButtonStatistic
          href='#'
        >
          <FiFilm className='text-2xl' />
          <span>Filmes</span>
        </ButtonStatistic>
      </section>
      
      <section>
        <ButtonStatistic
          href='#'
        >
          <BiFootball className='text-2xl'  />
          <span>Esportes</span>
        </ButtonStatistic>
      </section>
      <section>
        <ButtonStatistic
          href='#'
        >
          <BiGame className='text-2xl'  />
          <span>Jogos</span>
        </ButtonStatistic>
      </section>
    </div>
  );
};
