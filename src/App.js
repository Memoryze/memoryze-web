import './App.css';
import { Container } from 'react-bootstrap';
import Header from './Components/Header/Header';
import LandingView from './Components/LandingView/LandingView';


function App() {
  return (
   <div>
     <Header/>
     <LandingView exact />
   </div>
  );
}

export default App;
