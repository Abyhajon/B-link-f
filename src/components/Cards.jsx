import React from 'react'
import Text from '../images/txtb.png'
import Record from '../images/mic.png'
import Upload from '../images/cloudb.png'
import { Link } from 'react-router-dom'


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
         {/* Card 1 */}
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Record} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Audio to Braille</h2>
              <p className='text-center text-2xl'>Translate Audio</p>
              <button className='bg-[#FCD600] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
          </div>
           {/* Card 2 */}
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Text} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Text to Braille</h2>
              <p className='text-center text-2xl'>Translate Text</p>
              <Link to="/text" className='bg-[#FCD600] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-center'>Start</Link> 
          </div>
           {/* Card 3 */}
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Upload} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Doc to Braille</h2>
              <p className='text-center text-2xl'>Upload text</p>
              <button className='bg-[#FCD600] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start</button>
          </div>
      </div>
    </div>
  )
}

export default Cards