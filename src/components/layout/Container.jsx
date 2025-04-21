import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const Container = () => {
	return (
		<>
			<div className="bg-gray-800 h-screen">
				<Navbar />
				<Outlet />
			</div>
		</>
	);
};
