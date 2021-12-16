import './App.css';
import Navbar from "./MyComponents/Navbar";
import { Body } from './MyComponents/Body';
import { Footer } from './MyComponents/Footer';
import { BrowserRouter as Router
} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
    </Router>
    <Body/>
    <Footer/>
    </>
    
  );
}

export default App;
