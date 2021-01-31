import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Link from "./components/Link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Route exact path="/" component={Home} />
				<Route exact path="/:id" component={Link} />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
