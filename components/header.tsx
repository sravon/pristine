import React from 'react'
import Nav from './layout/nav'

export const Header = () => {
    return (
        <section id="hero" className="">
          <Nav/>
          <div className="max-w-7xl mx-auto flex justify-center items-center sm:min-h-[300px] lg:min-h-[400px]">
            <div className="flex flex-col items-center space-y-3">
            <h3 className="font-sans font-extrabold text-3xl text-white lg:text-5xl">
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#E9BA5F] to-[#B588FF]'>Safeguarding</span> Your Data
              </h3>
              <h3 className="font-sans font-extrabold text-3xl text-white lg:text-5xl">
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#E9BA5F] to-[#B588FF]'>Securing</span> Your Future
              </h3>
              <button className="bg-blue-700 text-white px-3 py-2 rounded-md mx-auto">Learn More</button>
            </div>
          </div>
        </section>
    )
}
