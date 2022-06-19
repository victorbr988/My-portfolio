export const ButtonRedirectPrimary = ({ children, href }) => {
  return (
    <a
      target="_blank"
      href={href}
      className="px-2 flex items-center cursor-pointer text-gray-800 justify-center border-[1px] border-gray-700 gap-2 py-3 w-1/2 text-sm font-medium tracking-wide capitalize rounded-md sm:mx-2 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 focus:outline-none "
    >
      {children}
    </a>
  )
  
}

export const ButtonRedirectSecondary = ({ children, href }) => {
  return (
    <a
      target="_blank"
      href={href}
      className="border-[1px] w-1/2 text-gray-800 dark:border-gray-700 flex items-center justify-center gap-2 py-3 px- hover:bg-gray-200 border-gray-700 text-sm font-medium tracking-wide dark:text-white capitalize rounded-md sm:mx-2 dark:hover:bg-gray-600 focus:outline-none"
    >
      {children}
    </a>
  )
  
}