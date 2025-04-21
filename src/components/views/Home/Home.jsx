import HomeBanner from "src/components/ui-elements/banner/Banner";
import LandingBrand from "src/components/ui-elements/brand-items/LandingBand";
import SwiperSlide from "src/components/ui-elements/swiper-slide/SwiperSlide";

export const Home = () => {
	const mappingData = [
		"Донат",
		"Аккаунты",
		"Предметы",
		"Пополнение баланса",
		"Игровая валюта",
		"Игровая валюта",
		"Услуги",
		"Продавать",
	];
	const recommendations = Array.from({ length: 20 }, () => ({
		image: `/src/assets/mockup.png`, // Placeholder image
		lines: [` 560₽ `, ` Название товара `, ` Тип товара • Игра • Осталось:500`],
	}));
	return (
		<>
			<div className="flex justify-center">
				<div className="h-full w-full my-auto">
					<SwiperSlide mappingData={mappingData} />
				</div>
			</div>

			<div className="mt-6">
				<HomeBanner />
			</div>
			<div className="mt-6 text-xl text-white">Рекомендации для вас:</div>
			<div className="flex-1 mt-6 pr-2 overflow-y-scroll  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  gap-[22px] w-full">
				{recommendations.map((rec, index) => {
					return <LandingBrand rec={rec} index={index} />;
				})}
			</div>
		</>
	);
};
