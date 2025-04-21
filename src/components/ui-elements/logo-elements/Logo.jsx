function Logo({ isDark }) {
	return (
		<>
			<div className="flex flex-col">
				<div className="flex">
					{isDark ? <img src="src/assets/ЛогоСин 1.svg"></img> : <></>}
					<img src="src/assets/Лого вар-1 1.svg"></img>
				</div>
				<div>
					<p className={`text-sm text-white ${isDark ? "pl-2" : ""}`}>
						Экосистема для геймеров{" "}
					</p>
				</div>
			</div>
		</>
	);
}

export default Logo;
