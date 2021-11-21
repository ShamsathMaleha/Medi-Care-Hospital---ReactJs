
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from './Contact/Contact';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Appointment from './components/Appointment/Appointment';
import AuthProvider from './components/context/AuthProvider';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Details from './components/Details/Details';
import ThankYou from './components/ThankYou/ThankYou';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <BrowserRouter>
     <Header>
       
     </Header>
     <Switch>
       <Route exact path="/">
        <Home>

        </Home>
       </Route>
       <PrivateRoute exact path="/contact">
        <Contact>

        </Contact>
       </PrivateRoute>
       <Route exact path="/login">
        <Signin>

        </Signin>
       </Route>
       <Route exact path="/register">
        <Register>

        </Register>
       </Route>
       <PrivateRoute exact path="/appointment/:appId">
        <Appointment>

        </Appointment>
       </PrivateRoute>
       <Route exact path="/details/:sId">
        <Details>

        </Details>
       </Route>
       <Route exact path="/thankYou">
        <ThankYou>

        </ThankYou>
       </Route>
       <Route path="*">
       <NotFound>

       </NotFound>
     </Route>
     </Switch>
     <Footer>
       
     </Footer>
    
     </BrowserRouter>
   </AuthProvider>
    </div>
  );
}

export default App;
