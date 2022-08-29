import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
export const SocialMedia = () => {
  return (
    <div className="flex gap-3 flex-col mt-10">
      <section className="">
        <a 
          className="flex shadow-lg group w-10 hover:w-full hover:scale-105 transition-all gap-2 border-2 justify-center items-center border-orange-400 p-2 rounded-full"
          href="https://github.com/victorbr988"
        >
          <FiGithub className="text-xl" />
          <p className="hidden group-hover:block">Github</p>
        </a>
      </section>
      <section>
        <a 
          className="flex group w-10 hover:w-full hover:scale-105 transition-all shadow-lg gap-2  border-2 justify-center items-center border-orange-400 p-2 rounded-full"
          href="https://www.instagram.com/gab_ulquiorrasbtn/"
        >
          <FiInstagram className="text-lg" />
          <p className="hidden group-hover:block">Instagram</p>
        </a>
      </section>
      <section>
        <a 
          className="flex group w-10 hover:w-full hover:scale-105 transition-all shadow-lg gap-2  border-2 justify-center items-center border-orange-400 p-2 rounded-full"
          href="https://www.linkedin.com/in/victor-gabriel-dev"
        >
          <FiLinkedin className="text-xl" />
          <p className="hidden group-hover:block">LinkedIn</p>
        </a>
      </section>  
    </div>
  );
};
