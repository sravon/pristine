import React from 'react'
import Item from './item'

export const Annotation = () => {
    return (
        <section id="annotation">
            <div className="container max-w-7xl mx-auto px-6 py-12 space-y-4">
                <h2 className="max-w-5xl mx-auto font-sans text-xl text-white font-bold md:text-2xl pb-12">Delivering top-tier data annotation, testing, and collection services with unparalleled precision and expertise.</h2>
                <div id="annotationService">
                    <div className="grid md:grid-cols-3 gap-4 text-white">
                        {/* <!-- Item 1 --> */}
                        <Item
                            title='Data Annotation'
                            description='Data annotation encompasses a range of tasks including labeling images, tagging text, transcribing audio, and annotating video frames to train machine learning models effectively.'
                            imageUrl='services/write.png'
                        />
                        <Item
                            title='Image Annotation'
                            description='Image annotation involves labeling objects, regions, or attributes within images, such as drawing bounding boxes, creating segmentation masks, and identifying key points to train computer vision models accurately.'
                            imageUrl='services/imagebox.png'
                        />
                        <Item
                            title='Speech Annotation'
                            description='Speech annotation involves transcribing spoken words, labeling speakers, marking timestamps, and identifying acoustic events in audio recordings across more than fifty languages worldwide to train and improve speech recognition models.'
                            imageUrl='services/speech.png'
                        />
                        <Item
                            title='Text Annotation'
                            description='Text annotation involves tagging entities, labeling parts of speech, marking sentiments, and performing text cleaning across various languages to prepare high-quality datasets for natural language processing models.'
                            imageUrl='services/textbox.png'
                        />
                        <Item
                            title='Survey Annotation'
                            description='Survey annotation involves classifying responses, analyzing sentiment, and categorizing topics to generate valuable insights and improve data analysis.'
                            imageUrl='services/notepad.png'
                        />
                        <Item
                            title='Video Annotation'
                            description='Video annotation involves labeling objects, tracking movements, marking timestamps, and identifying actions in video frames across various scenes to train and enhance computer vision models.'
                            imageUrl='services/video.png'
                        />
                        <Item
                            title='Data collection'
                            description='Data collection involves gathering raw data from various sources, organizing it systematically, ensuring data quality, and preparing it for use in training and improving machine learning models.'
                            imageUrl='services/data.png'
                        />
                        <Item
                            title='Video、Audio collection'
                            description='Video and audio collection, a key part of data collection, involves gathering multimedia data from diverse sources, ensuring high quality, and preparing it for training machine learning models, meeting the growing demand in the field.'
                            imageUrl='services/video_audio.png'
                        />
                        <Item
                            title='data testing'
                            description='Data testing, an essential part of the data lifecycle, involves validating datasets, verifying data accuracy, ensuring model performance, and identifying potential issues to enhance the reliability of machine learning models.'
                            imageUrl='services/Mask group.png'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
