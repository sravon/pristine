import React from 'react'

export const Header = () => {
    return (
        <section id="hero">
          <div className="container max-w-7xl mx-auto px-6 py-12">
            {/* <!-- Nav/logo --> */}
            <nav className="flex items-center justify-between font-bold text-white">
              {/* <!-- logo --> */}
              <img src="logo.svg" alt=""/>
              {/* <!-- Menu --> */}
              <div className="hidden h-10 font-alata md:flex md:space-x-8 items-center">
                <div className="group">
                  <a href="">Home</a>
                  <div className="mx-2 group-hover:border-b 
                    group-hover:border-blue-50"></div>
                </div>
                <div className="group">
                  <a href="">About Us</a>
                  <div className="mx-2 group-hover:border-b 
                    group-hover:border-blue-50"></div>
                </div>
                <div className="group">
                  <a href="">Data security</a>
                  <div className="mx-2 group-hover:border-b 
                    group-hover:border-blue-50"></div>
                </div>
                <div className="group">
                  <a href="">Data annotation</a>
                  <div className="mx-2 group-hover:border-b 
                    group-hover:border-blue-50"></div>
                </div>
                <div className="group">
                  <a href="">Data collection</a>
                  <div className="mx-2 group-hover:border-b 
                    group-hover:border-blue-50"></div>
                </div>
                <div className="group">
                  <a href="">Testing</a>
                  <div className="mx-2 group-hover:border-b 
                    group-hover:border-blue-50"></div>
                </div>
                <div className="group">
                  <a href="">Global sourcing</a>
                  <div className="mx-2 group-hover:border-b 
                    group-hover:border-blue-50"></div>
                </div>
              </div>
              <button className="w-32 border border-white text-white px-3 py-2 rounded-md">Contact us</button>
              {/* <!-- Todo Hamburger Button --> */}
              <div className="md:hidden">
                <button id="menu_btn" type="button" className=" z-40 block hamburger md:hidden focus:ouline-none">
                  <span className="hamburger-top"></span>
                  <span className="hamburger-middle"></span>
                  <span className="hamburger-bottom"></span>
                </button>
              </div>
            </nav>
            {/* <!-- Todo Mobile Menu --> */}
            <div id="menu" className="absolute top-0 bottom-0 left-0 hidden flex-col
              self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3
              text-lg text-white uppercase bg-black">
              <a href="" className="hover:text-pink-500">Home</a>
              <a href="" className="hover:text-pink-500">About</a>
              <a href="" className="hover:text-pink-500">Contact</a>
              <a href="" className="hover:text-pink-500">Product</a>
              <a href="" className="hover:text-pink-500">Supports</a>
            </div>
            <div className="max-w-3xl mt-32 mb-32 p-4 space-y-3 flex flex-col items-center md:p-10 md:m-32 md:mx-auto">
                <h3 className="font-sans font-extrabold text-4xl text-white md:text-5xl">
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#E9BA5F] to-[#B588FF]'>Safeguarding</span> Your Data
                </h3>
                <h3 className="font-sans font-extrabold text-4xl text-white md:text-5xl">
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#E9BA5F] to-[#B588FF]'>Securing</span> Your Future
                </h3>
                <button className="bg-blue-700 text-white px-3 py-2 rounded-md mx-auto">Learn More</button>
            </div>
          </div>
        </section>
    )
}
