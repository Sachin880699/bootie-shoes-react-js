import './App.css';
import Header from "./Components/Header"
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>


      
    </div>
  );
}

export default App;
