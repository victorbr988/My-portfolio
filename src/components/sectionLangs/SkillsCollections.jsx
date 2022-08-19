import { skills } from '../../assets/allSkillsExports'
import { ImageSkill } from './ImageSkill';
export const SkillsCollections = () => {
  return (
    <div className='sm:flex-row flex flex-col justify-around  w-full pb-10 '>
      <section className='flex flex-wrap justify-center gap-4'>
        <ImageSkill
          src={skills.html}
        />
         <ImageSkill
          src={skills.css}
        />
         <ImageSkill
          src={skills.tailwind}
        />
        <ImageSkill
          src={skills.javascript}
        />
        <ImageSkill
          src={skills.typescript}
        />
        <ImageSkill
          src={skills.react}
        />
         <ImageSkill
          src={skills.redux}
        />
        <ImageSkill
          src={skills.node}
        />
        <ImageSkill
          src={skills.docker}
        />
        <ImageSkill
          src={skills.mysql}
        />
      </section>
    </div>
  );
};
