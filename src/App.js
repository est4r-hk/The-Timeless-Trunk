import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Clothes from './components/Clothes';
import Signup from './components/Signup';
import Signin from './components/Signin';
import AddClothe from './components/AddClothe';
import MpesaPayment from './components/MpesaPayment';
import Footer from './components/Footer';


function App() {
  
  return (

    <Router>

      <div className='App'>

        <div className='App-header'>

          <h1 className='header'>Welcome to The Timeless Trunk</h1>

        </div>

        {/* Linking routes */}
        <nav className='navs'>

          <br /><Link to="/" className=' App-link btn btn-outline dark ms-3'>Clothes</Link>
          <Link to="/Signup" className='btn btn-outline-dark ms-3'>Sign Up</Link>
          <Link to="/Signin" className='btn btn-outline-dark ms-3'>Sign In</Link>
          <Link to="/AddClothe" className='btn btn-outline-dark ms-3'>Add Clothe</Link>
          
        </nav>

        <Routes>

          <Route path='/' element={<Clothes/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/addclothe' element={<AddClothe/>}/>
          <Route path='/makepayment' element={<MpesaPayment/>}/>
          
        </Routes>
        
      <Footer/>

      </div>

    </Router>


  );

}


export default App;
