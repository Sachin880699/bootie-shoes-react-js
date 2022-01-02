import './App.css';
import Header from "./Components/Header"
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homedetailspage from './Components/HomeDetailsPage';
import Shoes from './Components/Shoes';
import Footer from './Components/Footer';
import Shop from './Components/Shop';


function App() {
  return (
    <div className="App">

    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/home/:id" exact element={<Homedetailspage/>} />
      </Routes>
      <Footer/>
    </Router>


      
    </div>
  );
}

export default App;
