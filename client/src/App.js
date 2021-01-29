import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Route exact path="/" component={Home} />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
