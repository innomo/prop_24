import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
        <Route path='/details/:id' component={DetailsPage} />
        <Route path='/' component={HomePage} exact />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
