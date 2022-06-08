import { NavLink } from "react-router-dom"

export function LinkNavigation(props) {
  const { href, children } = props
  return (
    <NavLink className={`${href === '/' ? 'bg-gray-200 dark:bg-gray-600' : 'bg-white lg:mx-2 hover:bg-gray-200'} flex items-center px-4 py-2 rounded  text-gray-700  dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-gray-200`}  to={href} >
      {children}
    </NavLink>
  )
}