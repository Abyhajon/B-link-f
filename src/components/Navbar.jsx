import React, {useState} from "react"
import logo from '../images/logo4.png'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#FCD600]'>
                <img src={logo} alt="Logo" />
                <ul className="hidden md:flex">
                    <li className="p-4">Home</li>
                    <li className="p-4">Resources</li>
                    <li className="p-4">About</li>
                    <li className="p-4">Contact</li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
                </div>
                <div className= {nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <img src={logo} alt="Logo" />
                <ul className='uppercase p-4'>
                    <li className="p-4 m-4 border-b border-grey-600">Home</li>
                    <li className="p-4 m-4 border-b border-grey-600">Resources</li>
                    <li className="p-4 m-4 border-b border-grey-600">About</li>
                    <li className="p-4 m-4">Contact</li>
                </ul>
                </div>
            </div>
            
    )
}

export default Navbar