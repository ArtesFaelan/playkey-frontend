import Logo from "src/components/ui-elements/logo-elements/Logo";
import SimpleButton from "src/components/ui-elements/button/SimpleButton";
import SearchInput from "src/components/ui-elements/input/SearchInput";
export const Navbar = () => {
	return (
		<>
			<nav class="bg-black">
				<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div class="relative flex h-16 items-center justify-between pt-10">
						<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
							<div class="flex shrink-0 items-center">
								<Logo isDark={true} />
							</div>
							<div class="flex flex-row gap-2 px-4 w-full">
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
												<div>Каталог</div>
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
										<span class="sr-only">Notifications</span>
										<div class="absolute inline-flex items-center justify-center p-1 rounded-[8px] text-xs font-bold text-white bg-green border-2 border-white -top-3 -end-2 dark:border-gray-900">
											<p className="text-black">New !</p>
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
