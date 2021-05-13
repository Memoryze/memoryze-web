import './App.css';
import { Container } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import LandingView from './Components/LandingView/LandingView';
import ForEducators from './Components/ForEducators/ForEducators';


function App() {
  return (
		<div>
			<Header />

			<Route path='/' exact component={LandingView} />
			<Route path='/for-educators' component={ForEducators} />
      <Redirect path='*' to='/'/>
		</div>
	);
}

export default App;
