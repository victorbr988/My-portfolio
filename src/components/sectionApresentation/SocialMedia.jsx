import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
export const SocialMedia = () => {
  return (
    <div className="flex gap-3 flex-col mt-10">
      <section className="flex group items-center gap-2">
        <a 
          className="flex shadow-lg group-hover:w-full lg:w-10 w-full hover:w-full hover:scale-105 transition-all gap-2 border-2 justify-center items-center border-orange-400 p-2 rounded-full"
          href="https://github.com/victorbr988"
        >
          <FiGithub className="text-xl" />
          <p className="lg:hidden group-hover:block">Github</p>
        </a>
        <p className="group-hover:hidden">Github</p>
      </section>
      <section className="flex group items-center gap-2">
        <a 
          className="flex group-hover:w-full lg:w-10 w-full hover:w-full hover:scale-105 transition-all shadow-lg gap-2  border-2 justify-center items-center border-orange-400 p-2 rounded-full"
          href="https://www.instagram.com/gab_ulquiorrasbtn/"
        >
          <FiInstagram className="text-lg" />
          <p className="lg:hidden group-hover:block">Instagram</p>
        </a>
        <p className="group-hover:hidden">Instagram</p>
      </section>
      <section className="flex items-center group gap-2">
        <a 
          className="flex group-hover:w-full lg:w-10 w-full hover:w-full hover:scale-105 transition-all shadow-lg gap-2  border-2 justify-center items-center border-orange-400 p-2 rounded-full"
          href="https://www.linkedin.com/in/victor-gabriel-dev"
        >
          <FiLinkedin className="text-xl" />
          <p className="lg:hidden group-hover:block">LinkedIn</p>
        </a>
        <p className="group-hover:hidden">LinkedIn</p>
      </section>  
    </div>
  );
};
