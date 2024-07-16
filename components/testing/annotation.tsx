import React from 'react'
import Item from './Item'

export const Annotation = () => {
    return (
        <>
            <div className="container max-w-7xl mx-auto px-6 py-12 space-y-4">
                <div className="flex flex-col justify-between space-y-2 sm:flex-row">
                    <h2 className="font-sans text-xl text-white font-bold md:text-2xl ">Data testing:</h2>
                    <h2 className="max-w-xs font-sans text-white font-bold text-xs">
                        Our data testing services ensure the integrity, 
                        accuracy, and quality of your data. We perform
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-white">
                    {/* <!-- Item 1 --> */}
                    <Item
                        title='Data Annotation'
                        description='Data annotation encompasses a range of tasks including labeling images, tagging text, transcribing audio, and annotating video frames to train machine learning models effectively.'
                        imageUrl='testing/1.png'
                    />
                    <Item
                        title='Image Annotation'
                        description='Image annotation involves labeling objects, regions, or attributes within images, such as drawing bounding boxes, creating segmentation masks, and identifying key points to train computer vision models accurately.'
                        imageUrl='testing/2.png'
                    />
                    <Item
                        title='Speech Annotation'
                        description='Speech annotation involves transcribing spoken words, labeling speakers, marking timestamps, and identifying acoustic events in audio recordings across more than fifty languages worldwide to train and improve speech recognition models.'
                        imageUrl='testing/3.png'
                    />
                </div>
            </div>
            <div id="annotationTestingBg">
                <div className="container max-w-7xl mx-auto px-6 py-12 space-y-4">
                    <div className="flex flex-col justify-between space-y-2 sm:flex-row">
                        <h2 className="font-sans text-xl text-white font-bold md:text-2xl ">Machine Testing:</h2>
                        <h2 className="max-w-xs font-sans text-xs text-white font-bold">
                        We provide comprehensive machine testing services to evaluate and optimize the performance of your hardware and software systems. Our services include
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-white">
                        {/* <!-- Item 1 --> */}
                        <Item
                            title='Data Annotation'
                            description='Data annotation encompasses a range of tasks including labeling images, tagging text, transcribing audio, and annotating video frames to train machine learning models effectively.'
                            imageUrl='testing/4.png'
                        />
                        <Item
                            title='Image Annotation'
                            description='Image annotation involves labeling objects, regions, or attributes within images, such as drawing bounding boxes, creating segmentation masks, and identifying key points to train computer vision models accurately.'
                            imageUrl='testing/5.png'
                        />
                        <Item
                            title='Speech Annotation'
                            description='Speech annotation involves transcribing spoken words, labeling speakers, marking timestamps, and identifying acoustic events in audio recordings across more than fifty languages worldwide to train and improve speech recognition models.'
                            imageUrl='testing/6.png'
                        />
                    </div>
                </div>
            </div>
            <div className="container max-w-7xl mx-auto px-6 py-12 space-y-4">
                <div className="flex flex-col justify-between space-y-2 sm:flex-row">
                    <h2 className="font-sans text-xl text-white font-bold md:text-2xl ">Model Testing:</h2>
                    <h2 className="max-w-xs font-sans text-xs text-white font-bold">
                    Our model testing services focus on evaluating the effectiveness and reliability of your AI models. We offer:
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-white">
                    {/* <!-- Item 1 --> */}
                    <Item
                        title='Data Annotation'
                        description='Data annotation encompasses a range of tasks including labeling images, tagging text, transcribing audio, and annotating video frames to train machine learning models effectively.'
                        imageUrl='testing/7.png'
                    />
                    <Item
                        title='Image Annotation'
                        description='Image annotation involves labeling objects, regions, or attributes within images, such as drawing bounding boxes, creating segmentation masks, and identifying key points to train computer vision models accurately.'
                        imageUrl='testing/8.png'
                    />
                    <Item
                        title='Speech Annotation'
                        description='Speech annotation involves transcribing spoken words, labeling speakers, marking timestamps, and identifying acoustic events in audio recordings across more than fifty languages worldwide to train and improve speech recognition models.'
                        imageUrl='testing/9.png'
                    />
                </div>
            </div>
            <div className="container max-w-7xl mx-auto flex justify-center bg-blue-900">
                <div className="max-w-5xl space-y-3 flex flex-col items-center p-5">
                    <h3 className="font-sans font-extrabold text-xs md:text-lg text-center">
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#E9BA5F] to-[#B588FF]'>
                        Through our comprehensive testing services, we help you uncover existing issues
                         and provide recommendations for improvement. By identifying weaknesses
                          and areas for enhancement, we assist you in refining your models and systems to 
                          deliver a superior user experience. Partner with us to ensure your AI solutions are robust,
                         reliable, and ready to meet the demands of modern applications.
                        </span>
                    </h3>
                    <button className="bg-blue-700 text-white px-3 py-2 rounded-md mx-auto">Contact us</button>
                </div>
            </div>
        </>
    )
}
