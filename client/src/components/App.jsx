import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

function App() {
	return (
		<div className="App">
			<header>
				<h3>Welcome to Survey App</h3>
			</header>
			<div className="container">
				<a href="/auth/google">Sign in with Google</a>
			</div>
			<BrowserRouter>
				<div>
					<Route path="/" component={Landing} />
					<Route path="/surveys" component={Dashboard} />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
