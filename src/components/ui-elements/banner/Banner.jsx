const HomeBanner = () => {
	return (
		<>
			<div className="container">
				<div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
					<div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray pt-4 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-start relative rounded-[16px]">
						<div className="flex flex-col pt-4">
							<h1 className="text-3xl lg:text-4xl font-semibold text-white dark:text-gray-800">
								Скидки до <span className="font-bold text-green">90%</span>
							</h1>
							<h1 className="text-3xl lg:text-4xl font-semibold text-white dark:text-gray-800">
								на <span className="font-bold text-white">playkey</span>
							</h1>
						</div>
						<div className="md:absolute md:bottom-0 lg:bottom-0 md:mt-8 md:mt-0 sm:flex sm:justify-center md:justify-end">
							<img
								src="src/assets/Уникальное предложение 1-cropped.svg"
								alt=""
								className="lg:w-full lg:h-full"
							/>
						</div>
					</div>
					<div className="flex flex-col md:flex-row items-strech justify-between bg-gray py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12 rounded-[16px]">
						<div className="flex flex-col justify-center md:w-1/2">
							<h1 className="text-3xl lg:text-4xl font-semibold text-white">
								Best Deal
							</h1>
							<p className="text-base lg:text-xl text-white mt-2">
								Save upto <span className="font-bold">50%</span>
							</p>
						</div>
						<div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
							<img
								src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png"
								alt=""
								className=""
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeBanner;
