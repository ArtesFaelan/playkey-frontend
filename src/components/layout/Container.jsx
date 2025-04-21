import { Navbar } from "./Navbar";
import Recommendation from './Recommendation'
import Overflow from './Overflow'
import Look from './Look'
import { Outlet } from "react-router-dom";

export const Container = () => {
	return (
		<>
			<div className="absolute top-0 bottom-0 bg-black w-full">
				<Navbar />
				<Overflow />
				<Look />
				<Recommendation />
				<Outlet />
			</div>
		</>
	);
};
