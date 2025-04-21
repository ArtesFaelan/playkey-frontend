import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "src/components/layout/Container";
// import { NotFound, Home } from "../components/views";

export const Navigation = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Container />}>
				<Route index element={<div>Home</div>} />
				{/* <Route path="*" element={<NotFound />} /> */}
			</Route>
		</Routes>
	</BrowserRouter>
);
