import React from 'react'
import Item from './item'

const Services = () => {
    return (
        <>
            <div className="space-y-12 mb-6 px-6">
                <div className="container max-w-7xl mx-auto space-y-28">
                    {/* <!--Section 1--> */}
                    <Item
                        title='Our Data Annotation Services'
                        description='At our company, we offer comprehensive data annotation services to meet your diverse needs. Our expertise spans across multiple domains, ensuring precision and quality in every project.'
                        imgaeUrl='annotation/1.png'
                    />
                    <Item
                        title='Image Annotation'
                        description='Bounding Boxes: Draw rectangular boxes around target objects in images.Semantic Segmentation: Assign a class label to each pixel in an image.Instance Segmentation: Assign unique labels to each pixel of individual objects.Polygon Annotation: Accurately outline object boundaries using polygons.Keypoint Annotation: Annotate specific points in images, such as human body keypoints'
                        imgaeUrl='annotation/2.png'
                        reverse={true}
                    />
                    <Item
                        title='Text Annotation'
                        description='Named Entity Recognition (NER): Identify and label entities in text, such as names of people, places, and organizations.Sentiment Analysis: Label the sentiment expressed in text as positive, negative, or neutral.Text Classification: Categorize text into predefined categories.Text Summarization: Generate concise summaries of text content.'
                        imgaeUrl='annotation/3.png'
                    />
                    <Item
                        title='Speech Annotation'
                        description='Speech Transcription: Convert spoken content into written text.Speaker Labeling/Diarization: Label segments of speech according to different speakers.Emotion Annotation: Annotate emotional states in speech.Noise Annotation: Label types of background noise in speech recordings.'
                        imgaeUrl='annotation/4.png'
                        reverse={true}
                    />
                </div>
            </div>
            <div id="dataCollection" className="space-y-12 mb-6">
                <div className="container mx-auto space-y-28">
                    <Item
                        title='Video Annotation:'
                        description='Frame Annotation: Annotate each frame of a video individually.Object Tracking: Track the movement of objects across video frames.Action Recognition: Identify and annotate actions occurring in videos.'
                        imgaeUrl='annotation/5.png'
                    />
                    <Item
                        title='Survey Annotation:'
                        description='Response Categorization: Classify survey responses into relevant categories.Sentiment Analysis: Analyze and label the sentiment of survey responses.Topic Categorization: Categorize survey responses into different topics.'
                        imgaeUrl='annotation/6.png'
                        reverse={true}
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

export default Services