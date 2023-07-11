import React from "react"
/*import hero from '../images/her01.png'*/
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#FCD600] font-b p-2">"Embrace Inclusivity and Empowerment: Unlock the Power of Braille with Ease"</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl pt-1">Braille Link.</h1>
                <div>
                    <h1 style={{ paddingTop: '2rem', margin: 'auto 0', fontWeight: 'normal' }}>
                    The Perfect tool for{' '}
                    <span style={{ color: '#FCD600', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                    words={['Teachers', 'Students', 'Family', '⠑⠗⠥⠝⠕⠍⠑⠝']}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    />
                    </span>
                    </h1>
                    <button className="bg-[#FCD600] text-black w-[200px] rounded-md font-medium my-6 mx-auto py-3">Get started</button>
                </div>
            </div>
            
        </div>    
    )
}

export default Hero