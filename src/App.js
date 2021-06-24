import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import LandingView from './Components/LandingView/LandingView';
import ForEducators from './Components/ForEducators/ForEducators';
import Footer from './Components/Shared/Footer/Footer';
import FAQsPage from './Components/FAQsPage/FAQsPage';
import TermsOfServices from './Components/LegalPages/TermsOfServices';
import PrivacyPolicy from './Components/LegalPages/PrivacyPolicy';
// import WaitList from './Components/WaitList/WaitList';
import EducatorsForm from './Components/EducatorsForm/EducatorsForm';

function App() {
	return (
		<div>
			<Header />
			<Switch className='alpha-container'>
				<Route path='/' exact component={LandingView} />
				<Route path='/for-educators' component={ForEducators} />
				<Route path='/faqs' component={FAQsPage} />
				<Route path='/terms' component={TermsOfServices} />
				<Route path='/privacy-policy' component={PrivacyPolicy} />
				{/* <Route path='/wait-list' component={WaitList} /> */}
				<Route path='/educators-get-started' component={EducatorsForm} />
				<Redirect path='**' to='/' />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
