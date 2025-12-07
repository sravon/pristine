import React from 'react'

const Services = () => {
    return (
        <div className="container mx-auto">
            {/* <!--Section 1--> */}
            <div className="flex flex-col justify-between items-center space-y-8 p-6 xl:flex-row">
                {/* <!-- Image --> */}
                <div className="bg-[#60F9DD] sm:w-[500px] h-auto">
                    <div className="origin-top-bottom -rotate-3">
                        <img src="global-cover.png" className="object-cover " />
                    </div>
                </div>
                {/* <!-- Content --> */}
                <div className="flex flex-col xl:max-w-xl">
                    <div className='max-w-4xl space-y-3'>
                        <h1 className="max-w-md text-3xl font-semibold text-center text-gray-50 xl:text-4xl xl:text-left">
                            Our Global Resource Network
                        </h1>
                        <p className="max-w-2xl mx-auto text-sm text-left text-gray-400 lg:text-md">
                            Our extensive global resource network serves as the foundation for our whole range of services. To guarantee that we uphold the highest standards of quality and expertise, we carefully choose our resources through rigorous screening procedures. Both full-time and part-time experts with a wealth of knowledge in their respective professions make up our network.
                        </p>
                        <p className="max-w-2xl mx-auto text-sm text-left text-gray-400 lg:text-md">
                            Not only do we have a large number of resources, but they are also highly qualified personnel with a thorough understanding of the job at hand. Because of their extensive experience, they are able to quickly understand complex needs and carry out projects with remarkable accuracy and efficiency. Whether it is data annotation, data collecting, or testing services, our experts are prepared to produce exceptional outcomes.
                        </p>
                        <p className="max-w-2xl mx-auto text-sm text-left text-gray-400 lg:text-md">
                            We take great satisfaction in our capacity to use this talented and varied pool of resources to address each client's particular demands. Every project is managed with the highest care and professionalism thanks to our dedication to quality and excellence. Join forces with us to gain access to a top-notch resource network that fosters creativity and success in your pursuits.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services