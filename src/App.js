import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import LandingView from './Components/LandingView/LandingView';
import ForEducators from './Components/ForEducators/ForEducators';
import Footer from './Components/Shared/Footer/Footer';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path='/' exact component={LandingView} />
				<Route path='/for-educators' component={ForEducators} />

				<Redirect path='**' to='/' />
			</Switch>
			<Footer/>
		</div>
	);
}

export default App;
