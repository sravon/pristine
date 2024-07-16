import React from 'react'
import Item from './item'

const Services = () => {
    return (
        <div id="services" className="space-y-12 mb-6 px-6">
            <div className="container max-w-7xl mx-auto space-y-28">
                {/* <!--Section 1--> */}
                <Item
                    title='Our Approach to Data Collection'
                    description='Pristine is dedicated to setting the standard in data annotation, collection, testing, and survey methodologies, driving the development of artificial intelligence with precision and integrity. We specialize in curating high-quality, meticulously annotated datasets that are tailored to the specific needs of our partners across various sectors. By harnessing advanced tools and techniques, Pristine ensures that data is not only comprehensive but also accurate and relevant, empowering AI technologies to operate at their best.'
                    imageUrl='about/pc.png'
                />
                <Item
                    title='Uncompromising Data Security'
                    description='A core aspect of our philosophy is the uncompromising security of the data we handle. We employ state-of-the-art security measures and adhere to strict data protection protocols to safeguard the privacy and integrity of the information entrusted to us. This commitment to security not only enhances our services but also builds trust and reliability with our partners.'
                    imageUrl='about/key.png'
                    reverse={true}
                />
                <Item
                    title='Innovation and Partnership'
                    description='At Pristine, we are more than just a data provider; we are a partner in innovation. Our commitment to excellence is reflected in our proactive engagement with clients and our focus on delivering actionable outcomes that drive progress. Through ethical practices and a dedication to privacy, we maintain the highest standards of data integrity and security, ensuring that all projects are executed with the utmost responsibility.'
                    imageUrl='about/handshake.png'
                />
                <Item
                    title='Pioneering the Future of AI'
                    description='As we continue to advance our capabilities and explore new frontiers in AI, Pristine remains committed to its foundational philosophy: we don’t just offer data, we make a difference. Our goal is to be at the cutting edge of AI development, helping our partners to unlock new opportunities and achieve extraordinary results.'
                    imageUrl='about/hand.png'
                    reverse={true}
                />
            </div>
        </div>
    )
}

export default Services