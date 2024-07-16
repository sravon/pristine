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
                            Our comprehensive suite of services is built upon a vast network of global resources. 
                            We rigorously select our resources through stringent screening processes to ensure that 
                            we maintain the highest standards of quality and expertise. Our network comprises both
                            part-time and full-time professionals, all of whom possess extensive experience in their 
                            respective fields.
                        </p>
                        <p className="max-w-2xl mx-auto text-sm text-left text-gray-400 lg:text-md">
                            Our resources are not just numerous; they are highly skilled individuals 
                            who bring a deep understanding of the tasks at hand. Their rich experience
                                allows them to grasp complex requirements swiftly and execute projects with 
                                exceptional precision and efficiency. Whether it&apos;s data annotation, data collection,
                                or testing services,
                                our professionals are equipped to deliver outstanding results.
                        </p>
                        <p className="max-w-2xl mx-auto text-sm text-left text-gray-400 lg:text-md">
                            We pride ourselves on our ability to leverage this diverse and talented pool 
                            of resources to meet the unique needs of each client. Our commitment to quality 
                            and excellence ensures that every project is handled with the utmost care and 
                            professionalism. Partner with us to benefit from a world-class 
                            resource network that drives innovation and success in your endeavors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services