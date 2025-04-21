import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const Container = () => {
	return (
		<>
			<div className="absolute top-0 bottom-0 bg-black w-full">
				<Navbar />
				<Outlet />
			</div>
		</>
	);
};
