import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Logo } from '../../assets';
import { IoClose, IoMenu } from 'react-icons/io5'
import Button from '../Common/Button';

const Navbar = () => {
    const [MenuIsOpen, setMenuIsOpen] = useState(false)
    return (
        <nav className=' absolute top-0 w-full px-7 py-5 flex justify-between items-center bg-transparent '>
            <NavLink to='/' className='z-[999]'>
                <img src={Logo} alt="logo" className=' h-8' />
            </NavLink>
            <div className={`links-wapper ${!MenuIsOpen ? 'hidden' : ''} lg:flex`}>
                <ul className={`links justify-center items-center gap-7 z-[998] ${MenuIsOpen ? 'py-[10rem] absolute top-0 right-0 h-full w-full flex flex-col bg-lime-800' : 'flex'}`}>
                    {
                        ["about", "features", "pricing", "services", "contact"].map(
                            (item, index) => {
                                return <NavLink to={`/${item}`} className={`uppercase font-bold ${!MenuIsOpen ? 'text-lg' : 'text-3xl'} text-gray-500 hover:text-black`} key={index}>{item}</NavLink>
                            }
                        )
                    }
                </ul>
            </div>
            <div className="other-buttons flex gap-3 justify-center items-center z-[999]">
                <button onClick={() => setMenuIsOpen(!MenuIsOpen)} className="Nav-menu-btn text-4xl flex lg:hidden">
                    {!MenuIsOpen ? <IoMenu /> : <IoClose />}
                </button>
                <div className={`nav-buttons ${!MenuIsOpen ? 'hidden' : 'flex absolute top-[10vh] right-[4vw]'} sm:flex gap-3 justify-center`}>
                    <Button herf='/' text='Try Free' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
