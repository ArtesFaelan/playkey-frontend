import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "src/components/layout/Container";
import { Home } from "src/components/views/Home";

export const Navigation = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Container />}>
				<Route index element={<Home />} />
				{/* <Route path="*" element={<NotFound />} /> */}
			</Route>
		</Routes>
	</BrowserRouter>
);
