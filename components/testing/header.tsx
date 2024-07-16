import React from 'react'
import Nav from '../layout/nav'

export const Header = () => {
    return (
        <section id="testingHero">
          <Nav/>
          <div className="container max-w-7xl mx-auto flex justify-center">
            <div className="max-w-3xl p-4 space-y-3 flex flex-col items-center md:p-10 md:m-32 md:mx-auto">
              <h3 className="max-w-xl text-center font-sans font-extrabold text-4xl text-white md:text-5xl">
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#E9BA5F] to-[#B588FF]'>Our Comprehensive Testing Services</span>
              </h3>
              <h3 className="font-sans font-extrabold text-sm text-white">
              At our company, we offer extensive testing services encompassing data testing, 
              machine testing, and model testing. Our rigorous testing processes are designed
               to identify existing issues and provide actionable insights 
              for enhancing the performance and user experience of your models and systems.
              </h3>
            </div>
          </div>
        </section>
    )
}
