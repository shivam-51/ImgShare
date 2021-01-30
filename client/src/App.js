import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/Home";
import Link from "./components/Link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<Navbar />
					<Route exact path="/" component={Home} />
					<Route exact path="/link" component={Link} />
					<Footer />
				</div>
			</Router>
		</Provider>
	);
}

export default App;
