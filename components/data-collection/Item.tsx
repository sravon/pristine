import React from 'react'

const Item = ({title,description,imageUrl}:{title:string,description:string,imageUrl:string}) => {
    return (
        <div className="flex flex-col items-center p-4 space-y-2 group hover:bg-[#2D63ED] hover:ring-sky-500">
            <div className="pt-6 pb-6">
                <img src={imageUrl} />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="max-w-xs text-center pb-6">
                {description}
            </p>
        </div>
    )
  }

export default Item