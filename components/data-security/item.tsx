import React from 'react'

const Item = ({title,description,imgaeUrl}:{title:string,description:string,imgaeUrl:string}) => {
    return (
        <div className="space-y-4 mb-12 px-6">
            <h2 className="max-w-3xl mx-auto font-sans text-xl text-center text-white font-bold md:text-3xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9FB9FC] to-[#FFBC6C]">
                    {title}
                </span>
            </h2>
            <p className="max-w-5xl mx-auto text-center text-white">
              {description}
            </p>
            <div className="container mx-auto">
                <div className="bg-[#60F9DD]">
                    <div className="origin-top-bottom -rotate-1">
                        <img src={imgaeUrl} className="object-cover bg-no-repeat" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item