import { useEffect, useState } from 'react';
import { getNumberProjectsGithub } from '../../helpers/getNumberProjectsGithub';
import { FiBookOpen, FiFlag, FiUsers } from 'react-icons/fi';
import { ButtonStatistic } from './ButtonStatistic';

export const GroupButtonsStatistics = () => {

  const [totalRepository, setTotalRepository] = useState(0);
  const [totalFollowers, setTotalFollowers] = useState(0);

  async function updateNumberRepository() {
    const numberOfRepository = await getNumberProjectsGithub()
    setTotalRepository(numberOfRepository.public_repos)
  }

  async function updateNumberFollowers() {
    const totalFollowers = await getNumberProjectsGithub()
    setTotalFollowers(totalFollowers.followers)
  }

  useEffect(() => {
    return async () => {
      updateNumberRepository(),
      updateNumberFollowers()
    }
  })

  return (
    <div className='flex justify-center gap-4'>
      <ButtonStatistic
        href='https://github.com/victorbr988?tab=repositories'
      >
        <FiFlag /> {totalRepository}
        <span className='hidden group-hover:block'>Repositórios</span>
      </ButtonStatistic>
      <ButtonStatistic
        href='#'
      >
        <FiUsers /> {totalFollowers}
        <span className='hidden group-hover:block'>Seguidores</span>
      </ButtonStatistic>
      <ButtonStatistic
        href='https://www.linkedin.com/pulse/normaliza%C3%A7%C3%A3o-de-tabelas-victor-gabriel/'
      >
        <FiBookOpen /> 1
        <span className='hidden group-hover:block'>Artigos</span>
      </ButtonStatistic>
    </div>
  );
};
