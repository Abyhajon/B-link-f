import React from "react"
import louis from '../images/louis_braille-circle.png'

const Louis = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[200px] mx-auto my-4" src={louis} alt="Luois Braille" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#FCD600] font-bold">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <h1 className="md:tex-4xl sm:text-3xl text-2xl font-bold py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                    <p>"Access to communication in its broadest form is access to knowledge, which holds tremendous importance for us. It ensures that we are not subjected to disdain or condescension from well-intentioned sighted individuals."<br/> ~ Louis Braille</p>
                    <button className="bg-black text-[#FCD600] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Louis