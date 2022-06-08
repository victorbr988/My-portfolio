import { NavLink } from "react-router-dom"

export const ButtonPrimary = ({ title, handleClick }) => {
  return (
    <button
      onClick={() => handleClick()}
      className="px-8 py-3 flex text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      {title}
    </button>
  )
}
export const ButtonSecondary = ({ title }) => {
  return (
    <NavLink
      to="/"
      onClick={() => handleClick()}
      className="border-[1px] py-3 flex border-gray-200 bg-white text-gray-600 dark:border-none dark:bg-gray-800 px-8 text-sm font-medium tracking-wide dark:text-white capitalize rounded-md sm:mx-2 dark:hover:bg-gray-500 focus:outline-none"
    >
      {title}
  </NavLink>
  )
  
}
export const ButtonRedirectPrimary = ({ children, href }) => {
  return (
    <a
      href={href}
      onClick={() => handleClick()}
      className="px-2 flex items-center justify-center gap-2 py-3 w-1/2 text-sm font-medium tracking-wide text-white capitalize bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      {children}
    </a>
  )
  
}

export const ButtonRedirectSecondary = ({ children, href }) => {
  return (
    <a
      href={href}
      onClick={() => handleClick()}
      className="border-[1px] w-1/2 flex items-center justify-center gap-2 py-3 px-2 border-gray-500 hover:bg-gray-600   dark:border-none bg-gray-800 text-sm font-medium tracking-wide text-white capitalize rounded-md sm:mx-2 dark:hover:bg-gray-600 focus:outline-none"
    >
      {children}
    </a>
  )
  
}