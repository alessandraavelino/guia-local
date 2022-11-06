import './App.css';
import NavScrollExample from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import Contato from './components/Contato';
import { Route, Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <Home />
      <Footer />
      
    </div>
  );
}

export default App;
