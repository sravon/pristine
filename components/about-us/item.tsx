import React from 'react'

const Item = ({ imageUrl, title, description,reverse }: { imageUrl: string, title: string, description: string,reverse?:boolean }) => {
    return (
        <div className={`flex flex-col space-y-4 ${reverse?'lg:flex-row-reverse':'lg:flex-row'} justify-between items-center pt-6`}>
            {/* <!-- Image --> */}
            <div className="bg-[#60F9DD] w-[400px] h-auto">
                <div className="origin-top-bottom -rotate-3">
                    <img src={imageUrl} className="object-cover " />
                </div>
            </div>
            {/* <!-- Content --> */}
            <div className="flex flex-col lg:max-w-md">
                <div className="max-w-xl space-y-3">
                    <h1 className="lg:max-w-xs text-3xl font-semibold text-center text-gray-50 lg:text-4xl lg:text-left">
                        {title}
                    </h1>
                    <p className=" mx-auto text-center text-gray-400 lg:text-xl lg:text-left
                    lg:mt-0 lg:mx-0">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Item