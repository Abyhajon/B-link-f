import React from "react"

const NewsLetter = () => {
    return (
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3"> 
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Empowering you with updates & educational resources.</h1>
                    <p>Stay connected and informed with our newsletter</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email"/>
                        <button className="bg-[#FCD600] text-black w-[200px] rounded-md font-medium my-6 ml-4 px-6 py-3">Notify Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter