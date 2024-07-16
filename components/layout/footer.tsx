import React from 'react'

const Footer = () => {
    return (
        <footer id="footer">
            {/* <!-- container --> */}
            <div className="container max-w-6xl py-10 mx-auto">
            {/* <!-- Footer Flex --> */}
            <div className="flex flex-col items-center mb-6 space-y-16 md:justify-center md:items-center mt-12">
                    <div className="h-8">
                        <img src="logo.svg" alt="" className="w-44 md:mb-3"/>
                    </div>
                    {/* <!-- Menu --> */}
                    <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row 
                        md:space-y-0 md:space-x-6 md:ml-3">
                        {/*                  */}
                        <div className="h-10 group">
                            <a href="">Home</a>
                        <div className="mx-2 group-hover:border-b gourp-hover:border-blue-50"></div>
                        </div>
                        {/* <!-- Item 2 --> */}
                        <div className="h-10 group">
                            <a href="">About us</a>
                        <div className="mx-2 group-hover:border-b gourp-hover:border-blue-50"></div>
                        </div>
                        {/* <!-- Item 3 --> */}
                        <div className="h-10 group">
                        <a href="">Data security</a>
                        <div className="mx-2 group-hover:border-b gourp-hover:border-blue-50"></div>
                        </div>
                        <div className="h-10 group">
                            <a href="">Data annotation</a>
                            <div className="mx-2 group-hover:border-b gourp-hover:border-blue-50"></div>
                        </div>
                        <div className="h-10 group">
                            <a href="">Data collection</a>
                            <div className="mx-2 group-hover:border-b gourp-hover:border-blue-50"></div>
                        </div>
                        <div className="h-10 group">
                            <a href="">Data collection</a>
                            <div className="mx-2 group-hover:border-b gourp-hover:border-blue-50"></div>
                        </div>
                        <div className="h-10 group">
                            <a href="">Testing</a>
                            <div className="mx-2 group-hover:border-b gourp-hover:border-blue-50"></div>
                        </div>
                        <div className="h-10 group">
                            <a href="">Global sourcing</a>
                            <div className="mx-2 group-hover:border-b gourp-hover:border-blue-50"></div>
                        </div>
                    </div>
                    {/* <!-- Icons containers --> */}
                    <div className="font-bold text-white">
                        &copy; 2024 Pristine Rights Reserved.
                    </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer