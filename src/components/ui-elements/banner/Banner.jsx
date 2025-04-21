const HomeBanner = () => {
	return (
		<>
			<div class="container">
				<div class="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
					<div class="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative rounded-[16px]">
						<div class="flex flex-col justify-center">
							<h1 class="text-3xl lg:text-4xl font-semibold text-white dark:text-gray-800">
								Game Console
							</h1>
							<p class="text-base lg:text-xl text-white">
								Save Upto <span class="font-bold">30%</span>
							</p>
						</div>
						<div class="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
							<img
								src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png"
								alt=""
								class="md:w-20 md:h-20 lg:w-full lg:h-full"
							/>
						</div>
					</div>
					<div class="flex flex-col md:flex-row items-strech justify-between bg-gray py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12 rounded-[16px]">
						<div class="flex flex-col justify-center md:w-1/2">
							<h1 class="text-3xl lg:text-4xl font-semibold text-white">
								Best Deal
							</h1>
							<p class="text-base lg:text-xl text-white mt-2">
								Save upto <span class="font-bold">50%</span>
							</p>
						</div>
						<div class="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
							<img
								src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png"
								alt=""
								class=""
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeBanner;
