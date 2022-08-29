export const ButtonStatistic = ({href, children}) => {
  return (
    <a
      target="_blank"
      href={href}
      className='flex hover:scale-105 transition cursor-pointer shadow-lg text-white items-center gap-2 bg-orange-400 rounded-lg px-4 py-2 justify-evenly'
    >
      {children}
    </a>
  );
};
