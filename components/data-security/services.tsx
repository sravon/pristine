import React from 'react'
import Item from './item'

const Services = () => {
    return (
        <div>
            <Item
                title='At Pristine, Commitment to Superior Security Standards and Expert Data Protection'
                description='At Pristine, we are deeply committed to maintaining the highest security standards for our clients, and we take pride in adhering to a comprehensive suite of standards and certifications. In the handling of sensitive customer data, including Personally Identifiable Information (PII), Protected Health Information (PHI), financial records, and governmental data, it is imperative to choose a partner equipped with the right tools and deep expertise. Pristine not only offers these, but our robust security protocols and privacy measures ensure the utmost protection of confidential information.'
                imgaeUrl="security/1.png"
            />
            <Item
                title='Pristine: Leaders in Secure AI Deployment and Innovation'
                description='With years of experience collaborating with top-tier global companies, Pristine has developed a profound understanding of the complexities involved in data security and AI deployment. Our track record includes the successful scoping and deployment of more than 1000 AI projects, each tailored to meet the specific needs of our clients while upholding rigorous security standards. This extensive experience positions Pristine as a leader in the field, providing you with the confidence and resources necessary to deploy cutting-edge AI solutions securely and effectively.'
                imgaeUrl="security/2.png"
            />
        </div>
    )
}

export default Services