import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import ServiceDetail from "./pages/ServiceDetail";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/services/:id" element={<ServiceDetail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
