function SimpleButton({
	content,
	color = "bg-primary",
	badgeEnabled = false,
	badge,
}) {
	return (
		<>
			<div
				type="button"
				class={`relative w-fit px-5 py-3 text-base font-medium text-center inline-flex items-center text-white ${color} rounded-[16px] focus:ring-4 focus:outline-none`}
			>
				{content}
				{badgeEnabled ? <>{badge}</> : <></>}
			</div>
		</>
	);
}

export default SimpleButton;
