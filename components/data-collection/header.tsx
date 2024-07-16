import React from 'react'
import Nav from '../layout/nav'

export const Header = () => {
    return (
        <section>
          <Nav/>
          <div className="container max-w-7xl mx-auto min-h-[400px]">
            {/* <!--Section 4--> */}
            <div className="flex flex-col justify-around mt-20 items-center px-6 space-y-8 pb-6 md:flex-row">
              {/* <!-- Content --> */}
              <div className="flex flex-col max-w-sm ">
                  <div className="max-w-xl space-y-4">
                      <h1 className="max-w-md text-xl font-semibold text-gray-50 lg:text-2xl lg:text-left">
                      Our Data Collection Services
                      </h1>
                      <p className="mx-auto text-gray-400 text-sm text-left
                      lg:mt-0 lg:mx-0 sm:max-w-md">
                      Our company specializes in comprehensive data collection services, focusing on
                       audio and video data acquisition. These services are essential for training 
                       advanced artificial intelligence systems, 
                      enabling machines to serve humanity more intelligently and efficiently.
                      </p>
                  </div>
              </div>
              {/* <!-- Image --> */}
              <div className="sm:w-[400px]">
                <img src="people_voice.png" className="object-cover " />
              </div>
            </div>
          </div>
        </section>
    )
}
