import React from 'react'
import Nav from '../layout/nav'

export const Header = () => {
    return (
        <section id="aboutHero">
          <Nav/>
          <div className="container max-w-7xl mx-auto flex justify-center items-center px-6 pb-12 sm:min-h-[250px] md:min-h-[300px] lg:min-h-[400px]">
            <div className="max-w-4xl space-y-3">
              <h1 className="text-3xl font-semibold text-center text-gray-50">
              About Pristine
              </h1>
              <p className="mx-auto text-center text-gray-400">
              Pristine is dedicated to setting the standard in data annotation, collection, 
              testing, and survey methodologies, driving the development of artificial intelligence 
              with precision and integrity. We specialize in curating high-quality, meticulously annotated datasets that are tailored to the specific needs of our partners across various sectors. By harnessing advanced tools and techniques, Pristine ensures that data is not only comprehensive 
              but also accurate and relevant, empowering AI technologies to operate at their best.
              </p>
            </div>
          </div>
        </section>
    )
}