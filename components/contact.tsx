import React from 'react'

const Contact = () => {
  return (
        <section id="contact">
			{/* <!-- Contact --> */}
			<div className="container mx-auto min-h-[700px] flex flex-col justify-center">
				<h3 className="text-3xl font-extrabold pb-3 text-white">Send a request</h3>
				<div className="grid lg:grid-cols-2 gap-6 ">
					<form className="space-y-6">
						<div className="flex space-x-6">
							<div className=" flex flex-col space-y-2">
								<label className="font-bold text-[#cccc] mr-8" htmlFor="">Name</label>
								<input className="w-[300px] border-2 border-[#344283] p-3 outline-none bg-[#000727] text-white focus:border-blue-400" type="text" name="name" value="" />
							</div>
							<div className=" flex flex-col space-y-2">
								<label className="font-bold text-[#cccc] mr-8" htmlFor="">Email</label>
								<input className="w-[300px] border-2 border-[#344283] p-3 outline-none bg-[#000727] text-white focus:border-blue-400" type="text" name="name" value="" />
							</div>
						</div>
						<div className="flex flex-col space-y-2">
							<label className="font-bold text-[#cccc] mr-3" htmlFor="">Message</label>
							<textarea className="border-2 border-[#344283] p-3 bg-[#000727] text-white h-32"></textarea>
						</div>
						<div className="flex flex-row-reverse">
							<button className="bg-[#2D63ED] px-8 py-2 text-white hover:bg-[#7693de]" >Submit</button>
						</div>
					</form>

					<div className="space-y-3 border bg-[#000727] p-5">
						<div className="space-y-3">
							<h2 className="text-white text-xl">Contact Info:</h2>
							<div className="flex items-center space-x-2 text-white">
								<img src='location.svg' />
								<p >Kazakhstan, Almaty, street Ospanova, building 85/29</p>
							</div>
							<div className="flex items-center space-x-2 text-white">
								<img src='ic_baseline-email.svg' />
								<p >pristine@pristinelabel.com</p>
							</div>

							<div className="space-y-3 pt-14">
								<h2 className="text-white text-xl">Social Links:</h2>
								<div className="flex items-center space-x-4">
								{/* <!-- Icon 1 --> */}
								<div className="h-4 group">
										<a href="#">
											<img src="ri_linkedin-fill.svg" alt="" className="h-4"/>
										</a>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
        </section>
  )
}

export default Contact