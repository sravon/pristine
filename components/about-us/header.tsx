import React from 'react'
import Nav from '../layout/nav'

export const Header = () => {
    return (
        <section id="aboutHero">
          <Nav/>
          <div className="container max-w-7xl mx-auto flex justify-center items-center px-6 pb-12 sm:min-h-[250px] md:min-h-[300px] lg:min-h-[400px]">
            <div className="max-w-4xl space-y-3">
              <h1 className="text-3xl font-semibold text-center text-gray-50">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9FB9FC] to-[#FFBC6C]">
                     Pristine: 
                    </span>
              </h1>
              <p className="mx-auto text-center text-gray-400">
              Pristine is committed to establishing the benchmark in data annotation, collection, testing, and survey methods, advancing artificial intelligence development with accuracy and integrity. We focus on creating high-quality, carefully annotated datasets customized to meet the unique requirements of our partners in different industries. Utilizing cutting-edge tools and techniques, Pristine guarantees that the data is thorough, precise, and pertinent, enabling AI technologies to perform optimally.
              </p>
            </div>
          </div>
        </section>
    )
}