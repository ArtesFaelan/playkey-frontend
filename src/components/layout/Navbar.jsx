import Logo from "src/components/ui-elements/logo-elements/Logo";

export const Navbar = () => {
	return (
		<>
			<nav class="bg-gray-800">
				<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div class="relative flex h-16 items-center justify-between pt-6">
						<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
							<div class="flex shrink-0 items-center">
								<Logo />
							</div>
							<div class="hidden sm:ml-6 sm:block">
								<button
									type="button"
									class="px-5 py-3 text-base font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									<svg
										class="w-4 h-4 text-white me-2"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 16"
									>
										<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
										<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
									</svg>
									Large
								</button>
							</div>
						</div>
						<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<button
								type="button"
								class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
							>
								<span class="absolute -inset-1.5"></span>
								<span class="sr-only">View notifications</span>
								<svg
									class="size-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
									data-slot="icon"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
									/>
								</svg>
							</button>

							<div class="relative ml-3">
								<div>
									<button
										type="button"
										class="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
										id="user-menu-button"
										aria-expanded="false"
										aria-haspopup="true"
									>
										<span class="absolute -inset-1.5"></span>
										<span class="sr-only">Open user menu</span>
										<img
											class="size-8 rounded-full"
											src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
										/>
									</button>
								</div>

								<div
									class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="user-menu-button"
									tabindex="-1"
								>
									<a
										href="#"
										class="block px-4 py-2 text-sm text-gray-700"
										role="menuitem"
										tabindex="-1"
										id="user-menu-item-0"
									>
										Your Profile
									</a>
									<a
										href="#"
										class="block px-4 py-2 text-sm text-gray-700"
										role="menuitem"
										tabindex="-1"
										id="user-menu-item-1"
									>
										Settings
									</a>
									<a
										href="#"
										class="block px-4 py-2 text-sm text-gray-700"
										role="menuitem"
										tabindex="-1"
										id="user-menu-item-2"
									>
										Sign out
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="sm:hidden" id="mobile-menu">
					<div class="space-y-1 px-2 pt-2 pb-3">
						<a
							href="#"
							class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
							aria-current="page"
						>
							Dashboard
						</a>
						<a
							href="#"
							class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
						>
							Team
						</a>
						<a
							href="#"
							class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
						>
							Projects
						</a>
						<a
							href="#"
							class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
						>
							Calendar
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};
