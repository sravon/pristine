import React from 'react'

const Services = () => {
    return (
        <div id="services" className="space-y-12 mb-6">
            <img src="rectangle.png" alt="" />
            <div className="container mx-auto space-y-28">
                {/* <!--Section 1--> */}
                <div className="flex flex-row justify-between items-center">
                    {/* <!-- Content --> */}
                    <div className="flex flex-col space-y-3 lg:mt-16 lg:w-1/2">
                        <h1 className="max-w-xs text-3xl font-semibold text-center text-gray-50 lg:text-4xl lg:text-left">
                            Comprehensive Data Annotation Services
                        </h1>
                        <p className="max-w-2xl mx-auto text-center text-gray-400 lg:text-md lg:text-left
                        lg:mt-0 lg:mx-0">
                        We offer precise and high-quality data annotation across various 
                        domains, including image, text, speech, video, and survey annotations.
                        Our expert team ensures accurate bounding boxes, semantic and instance
                        segmentation, keypoint marking, NER, sentiment analysis, transcriptions
                        , speaker labeling, object tracking, and more. Partner with us for reliable 
                        and efficient data solutions.
                        </p>
                        {/* <!-- Button contaner --> */}
                        <div className="pt-3 flex items-center justify-center w-full space-x-4
                        lg:justify-start">
                            <a href="#" className="p-4 text-sm font-semibold text-white bg-softBlue
                            rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">
                            Learn more</a>
                        </div>
                    </div>
                    {/* <!-- Image --> */}
                    <div className="bg-gradient-to-r from-[#000930] via-[#000930] to-[#607DF9] w-[600px] h-auto">
                        <div className="mr-8 mt-8">
                            <img src="internet.png" className="object-cover " />
                        </div>
                    </div>
                </div>
                {/* <!--Section 2--> */}
                <div className="flex flex-row justify-between items-center">
                    {/* <!-- Image --> */}
                    <div className="bg-gradient-to-r from-[rgba(155,119,86,0.2)] via-[#F8B16F] to-[#000930] w-[600px] h-auto">
                        <div className="ml-8 mb-8">
                            <img src="rectangle-2.png" className="object-cover " />
                        </div>
                    </div>
                    {/* <!-- Content --> */}
                    <div className="flex flex-col items-end lg:w-1/2">
                        <div className="max-w-xl space-y-3">
                            <h1 className="max-w-xs text-3xl font-semibold text-center text-gray-50 lg:text-4xl lg:text-left">
                                Top-Notch Audio and Video Data Collection
                            </h1>
                            <p className="max-w-xl mx-auto text-center text-gray-400 lg:text-xl lg:text-left
                            lg:mt-0 lg:mx-0">
                            Our company excels in collecting top-notch audio and video data,
                            crucial for training advanced AI systems. We gather diverse speech patterns, 
                            environmental sounds, human activities, facial expressions, and object interactions.
                            Our data boosts AI accuracy and inclusivity.
                            Partner with us to drive the future of intelligent AI solutions.
                            </p>
                            {/* <!-- Button contaner --> */}
                            <div className="pt-3 flex items-center justify-center w-full space-x-4
                            lg:justify-start">
                                <a href="#" className="p-4 text-sm font-semibold text-white bg-softBlue
                                rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">
                                Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--Section 3--> */}
                <div className="flex flex-row justify-between items-center">
                    {/* <!-- Content --> */}
                    <div className="flex flex-col space-y-3 lg:mt-16 lg:w-1/2">
                        <h1 className="max-w-xs text-3xl font-semibold text-center text-gray-50 lg:text-4xl lg:text-left">
                            Comprehensive Testing Services
                        </h1>
                        <p className="max-w-2xl mx-auto text-center text-gray-400 lg:text-2xl lg:text-left
                        lg:mt-0 lg:mx-0">
                        Our company provides comprehensive testing services for data, machines, 
                        and AI models. We ensure data integrity, optimize hardware and software
                         performance, and validate AI models. Our services include data validation, 
                         hardware stress testing, system compatibility, and model performance evaluation. 
                         Partner with us to enhance the reliability 
                        and efficiency of your systems and deliver a superior user experience.
                        </p>
                        {/* <!-- Button contaner --> */}
                        <div className="pt-3 flex items-center justify-center w-full space-x-4
                        lg:justify-start">
                            <a href="#" className="p-4 text-sm font-semibold text-white bg-softBlue
                            rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">
                            Learn more</a>
                        </div>
                    </div>
                    {/* <!-- Image --> */}
                    <div className="bg-gradient-to-r from-[#000930] via-[#000930] to-[#2EB9CC] w-[600px] h-auto">
                        <div className="mr-8 mt-8">
                            <img src="rectangle-3.png" className="object-cover " />
                        </div>
                    </div>
                </div>
                {/* <!--Section 4--> */}
                <div className="flex flex-row justify-between items-center">
                    {/* <!-- Image --> */}
                    <div className="bg-gradient-to-r from-[#E977AE] via-[#E977AE] to-[#000930] w-[600px] h-auto">
                        <div className="ml-8 mb-8">
                            <img src="internet.png" className="object-cover " />
                        </div>
                    </div>
                    {/* <!-- Content --> */}
                    <div className="flex flex-col items-end lg:w-1/2">
                        <div className="max-w-xl space-y-3">
                            <h1 className="max-w-xs text-3xl font-semibold text-center text-gray-50 lg:text-4xl lg:text-left">
                            Exceptional global skilled professionals
                            </h1>
                            <p className="max-w-xl mx-auto text-center text-gray-400 lg:text-xl lg:text-left
                            lg:mt-0 lg:mx-0">
                            Our company provides exceptional services through a global network of highly 
                        skilled professionals. We ensure top-quality results in data annotation, collection,
                         and testing. Our experienced team meets diverse client needs with precision and efficiency. 
                        Partner with us for world-class expertise and success.
                            </p>
                            {/* <!-- Button contaner --> */}
                            <div className="pt-3 flex items-center justify-center w-full space-x-4
                            lg:justify-start">
                                <a href="#" className="p-4 text-sm font-semibold text-white bg-softBlue
                                rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">
                                Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="max-w-5xl mx-auto font-sans text-3xl text-white font-bold md:text-5xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9FB9FC] to-[#FFBC6C]">
                    We excel by dedicating ourselves to one thing and doing it to perfection.
                </span>
            </h2>
        </div>
    )
}

export default Services