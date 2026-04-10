import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Clothes from './components/Clothes';
import Signup from './components/Signup';
import Signin from './components/Signin';
import AddClothe from './components/AddClothe';
import MpesaPayment from './components/MpesaPayment';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import Carousel  from './components/Mycarousel';
import UserDetails from './components/UserDetails';



function App() {
  
  return (

    <Router>
      

      <div className='App'>

        <div className='App-header'>

          <h1 className='header1 text-left '>Welcome to The Timeless Trunk</h1>
        
        </div>
        
        <Navbar/>
        <UserDetails/>
        
          {/* Linking routes
          <nav className='text-left'>
            

            <Link to="/" className=' App-link btn btn-outline dark ms-3'>Clothes</Link>
            <Link to="/Signup" className='btn btn-outline-dark ms-3'>Sign Up</Link>
            <Link to="/Signin" className='btn btn-outline-dark ms-3'>Sign In</Link>
            <Link to="/AddClothe" className='btn btn-outline-dark ms-3'>Add Clothe</Link>
            
          </nav> */}

          

        <Routes>

          <Route path='/' element={<Clothes/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/addclothe' element={<AddClothe/>}/>
          <Route path='/makepayment' element={<MpesaPayment/>}/>
          
        </Routes>
        {/* <Carousel/> */}
      <Footer/>

    

      </div>

    </Router>


  );

}


export default App;
