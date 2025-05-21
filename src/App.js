//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/about';
import Work from './components/Work';
import Testimonial from "./components/Testimonials";
import Contact from './components/contact';
import Footer from './components/Footer';
import Footertest from './components/testfooter';

function App() {
  return (
    <div className="App">
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="work"><Work /></div>
      <div id="contact"><Contact /></div>
      
       <div id="footer"><Footertest/></div>
    </div>
  );
}


export default App;
