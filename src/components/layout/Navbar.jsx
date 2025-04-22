import Logo from "src/components/ui-elements/logo-elements/Logo";
import SimpleButton from "src/components/ui-elements/button/SimpleButton";
import SearchInput from "src/components/ui-elements/input/SearchInput";
export const Navbar = () => {
	return (
		<>
			<nav className="bg-black">
				<div className="mx-auto h-16">
					<div className="relative flex h-fit items-center justify-between">
						<div className="flex flex-1 items-between justify-between sm:items-stretch md:justify-between">
							<div className="flex shrink-0 items-center">
								<Logo isDark={true} />
							</div>
							<div className="flex flex-row gap-2 px-4 w-full invisible hidden lg:flex lg:visible">
								<SimpleButton
									content={
										<>
											<div
												id="root"
												className="w-fit flex flex-row justify-start items-center gap-[6px]"
											>
												<img
													className=""
													src="src/assets/Меню значек 1.svg"
												></img>
												<div className="pr-2">Каталог</div>
											</div>
										</>
									}
								/>
								<SearchInput placeholder="Поиск игр и приложений на PlayKey" />
							</div>
							<SimpleButton
								color="bg-gray"
								content={"Войти"}
								badgeEnabled={true}
								badge={
									<>
										<span className="sr-only">Notifications</span>
										<div className="absolute inline-flex items-center justify-center p-1 rounded-[8px] text-xs font-bold text-white bg-green border-2 border-white -top-3 -end-2 dark:border-gray-900">
											<span className="text-black">New !</span>
										</div>
									</>
								}
							/>
						</div>
						<div></div>
					</div>
				</div>
			</nav>
		</>
	);
};
