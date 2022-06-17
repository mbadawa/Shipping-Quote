import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import QuotePage from "./pages/QuotePage/QuotePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#036937",
		},
		secondary: {
			main: "#f5e042",
		},
	},
});
function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="quote" element={<QuotePage />} />
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
