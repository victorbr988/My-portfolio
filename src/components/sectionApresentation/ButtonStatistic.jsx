export const ButtonStatistic = ({href, children}) => {
  return (
    <a
      target="_blank"
      href={href}
      className='flex cursor-pointer shadow-lg group text-white items-center gap-3 bg-orange-400 rounded-lg px-4 py-2 justify-around'
    >
      {children}
    </a>
  );
};
