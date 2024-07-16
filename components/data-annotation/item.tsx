import React from 'react'

const Item = ({title,description,imgaeUrl,reverse}:{title:string,description:string,imgaeUrl:string,reverse?:boolean}) => {
  return (
    <div className={`flex flex-col justify-around items-center space-y-3 ${reverse?"sm:flex-row-reverse":"sm:flex-row"}`}>
        {/* <!-- Content --> */}
        <div className="flex flex-col space-y-3 max-w-sm ">
            <h1 className="max-w-xs text-xl font-semibold text-center text-gray-50 lg:text-left">
                {title}
            </h1>
            <p className="text-left text-gray-400 lg:text-md 
            lg:mt-0 lg:mx-0">
            {description}
            </p>
        </div>
        {/* <!-- Image --> */}
        <div className="bg-gradient-to-r from-[#000930] via-[#000930] to-[#607DF9] sm:w-[300px] lg:w-[500px] h-auto">
            <div className="mr-8 mt-8">
                <img src={imgaeUrl} className="object-cover " />
            </div>
        </div>
    </div>
  )
}

export default Item