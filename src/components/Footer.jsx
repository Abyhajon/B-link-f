import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#FCD600]'>B-link.</h1>
            <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa enim excepturi sed esse nobis debitis voluptate ducimus, sunt tempore odit similique, aliquam doloribus reiciendis. Provident id quia unde nam minus.</p>
            <div className='flex justify-between md:w-[75%] my-6'> 
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaTwitterSquare size={30} />
                <FaGithubSquare size={30} />
                <FaDribbbleSquare size={30} />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-500'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>FAQs</li>
                <li className='py-2 text-sm'>Contact</li>
                <li className='py-2 text-sm'>Privacy Policy</li>
                <li className='py-2 text-sm'>Terms of Service</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-500'>Company</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer