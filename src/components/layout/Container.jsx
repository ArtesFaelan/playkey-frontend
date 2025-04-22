import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const Container = () => {
	return (
		<>
			<div className="absolute top-0 bottom-0 pt-8 pr-10 pl-10 md:pt-10 md:pr-30 md:pl-30 bg-black h-screen flex flex-col w-full">
				<Navbar />
				<Outlet />
			</div>
		</>
	);
};
