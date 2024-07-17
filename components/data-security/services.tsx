import React from 'react'
import Item from './item'

const Services = () => {
    return (
        <div>
            <div className="space-y-4 mb-12 px-6">
                <h2 className="max-w-3xl mx-auto font-sans text-xl text-center text-white font-bold md:text-3xl">
                    At <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9FB9FC] to-[#FFBC6C]">
                    Pristine
                    </span>, Commitment to Superior Security Standards and Expert Data Protection
                </h2>
                <p className="max-w-5xl mx-auto text-center text-white">
                    At Pristine, we are deeply committed to maintaining the highest security standards for our clients, and we take pride in adhering to a comprehensive suite of standards and certifications. In the handling of sensitive customer data, including Personally Identifiable Information (PII), Protected Health Information (PHI), financial records, and governmental data, it is imperative to choose a partner equipped with the right tools and deep expertise. Pristine not only offers these, but our robust security protocols and privacy measures ensure the utmost protection of confidential information.
                </p>
                <div className="container mx-auto">
                    <div className="bg-gradient-to-r from-[#000930] via-[#000930] to-[#607DF9]">
                        <div className="origin-top-bottom -rotate-1">
                            <img src="security/1.png" className="object-cover" /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-4 mb-12 px-6">
                <h2 className="max-w-3xl mx-auto font-sans text-xl text-center text-white font-bold md:text-3xl">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9FB9FC] to-[#FFBC6C]">
                    Pristine: 
                    </span> Leaders in Secure AI Deployment and Innovation
                </h2>
                <p className="max-w-5xl mx-auto text-center text-white">
                With years of experience collaborating with top-tier global companies, Pristine has developed a profound understanding of the complexities involved in data security and AI deployment. Our track record includes the successful scoping and deployment of more than 1000 AI projects, each tailored to meet the specific needs of our clients while upholding rigorous security standards. This extensive experience positions Pristine as a leader in the field, providing you with the confidence and resources necessary to deploy cutting-edge AI solutions securely and effectively.
                </p>
                <div className="container mx-auto">
                    <div className="bg-[#F9B360]">
                        <div className="origin-top-bottom -rotate-1">
                            <img src="security/2.png" className="object-cover bg-no-repeat" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services