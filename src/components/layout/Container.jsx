import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const Container = () => {
	return (
		<>
			<div className="absolute top-0 bottom-0 pt-10 pr-30 pl-30 bg-black h-screen flex flex-col w-full">
				<Navbar />
				<Outlet />
			</div>
		</>
	);
};
