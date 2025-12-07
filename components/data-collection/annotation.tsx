import React from 'react'
import Item from './Item'

export const Annotation = () => {
    return (
        <>
            <div id="annotationDataBg">
                <div className="container max-w-7xl mx-auto py-12 space-y-8 pt-28">
                    <div className="text-center space-y-3">
                        <h2 className="font-sans text-xl text-white font-bold md:text-2xl ">Audio Data Collection:</h2>
                        <h2 className="max-w-lg mx-auto font-sans text-xs text-white font-bold">
                        We offer high-quality audio data collection services, capturing diverse speech patterns, accents, and dialects from various demographics. Our services include
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-white bg-[#000930] mx-6">
                        {/* <!-- Item 1 --> */}
                        <Item
                            title='Speech Data:'
                            description='Collecting natural and scripted speech for developing and improving speech recognition systems.'
                            imageUrl='collection/1.png'
                        />
                        <Item
                            title='Environmental Sounds:'
                            description='Recording ambient sounds and background noise to enhance the accuracy of audio processing applications.'
                            imageUrl='collection/2.png'
                        />
                        <Item
                            title='Speaker Diversity:'
                            description='Gathering data from speakers of different ages, genders, and cultural backgrounds to create inclusive AI models.'
                            imageUrl='collection/3.png'
                        />
                    </div>
                </div>
            </div>
            <div className="container max-w-7xl mx-auto px-6 py-12 space-y-4">
                <div className="text-center">
                    <h2 className="font-sans text-xl text-white font-bold md:text-2xl ">Data testing:</h2>
                    <h2 className="max-w-xl mx-auto font-sans text-xs text-white font-bold">
                    We provide top-notch audio data collection services that record a range of dialects, accents, and speech patterns from different groups. Among the services we offer are
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-white bg-[#2A3D95]">
                    {/* <!-- Item 1 --> */}
                    <Item
                        title='Human Activity Recognition:'
                        description='Recording videos of various human activities to train models for activity recognition and surveillance systems.'
                        imageUrl='collection/4.png'
                    />
                    <Item
                        title='Facial Expressions:'
                        description='Capturing facial expressions and movements to develop emotion detection and facial recognition technologies.'
                        imageUrl='collection/5.png'
                    />
                    <Item
                        title='Object Interaction'
                        description='Filming interactions with various objects to enhance object detection and interaction models.'
                        imageUrl='collection/6.png'
                    />
                </div>
            </div>
            <div className="container max-w-7xl mx-auto flex justify-center bg-blue-900">
                <div className="max-w-5xl space-y-3 flex flex-col items-center p-5">
                    <h3 className="font-sans font-extrabold text-xs md:text-lg text-center">
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#E9BA5F] to-[#B588FF]'>
                        We assist you in identifying current problems and offering suggestions for enhancements through our thorough testing services. We help you improve your models and systems to provide a better user experience by pointing out flaws and potential improvement areas. Join together with us to make sure your AI solutions are strong, dependable, and prepared to handle the demands of contemporary applications.
                        </span>
                    </h3>
                    <button className="bg-blue-700 text-white px-3 py-2 rounded-md mx-auto">Contact us</button>
                </div>
            </div>
        </>
    )
}
