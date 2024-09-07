import { NavLink } from "react-router-dom"

const Navlink_btn = ({to='/' , text='NavLink'}) => {
  return (
    <NavLink to={to} className='px-12 py-4 rounded-xl font-bold text-xl bg-gradient-to-r from-[#C9FC76] to-[#26FFCC] hover:bg-gradient-to-l hover:scale-[.9] transition'>
            {text}
        </NavLink>
  )
}

export default Navlink_btn
