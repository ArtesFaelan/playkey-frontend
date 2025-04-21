import SimpleButton from "../button/SimpleButton";

function SearchInput({ placeholder }) {
	return (
		<>
			<div className="w-full  mx-auto ">
				<label
					for="default-search"
					className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
				>
					Search
				</label>
				<div className="relative h-full">
					<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
						<svg
							className="w-4 h-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						type="search"
						id="default-search"
						className="h-full rounded-[16px] w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-white"
						placeholder={placeholder}
						required
					/>
					<button
						type="submit"
						class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-primary rounded-[10px] border border-blue-700"
					>
						Найти
						<span class="sr-only">Search</span>
					</button>
				</div>
			</div>
		</>
	);
}

export default SearchInput;
