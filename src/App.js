import './App.css';
import Navtop from "./Navtop";
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from'./Contact';
import History from './History';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='background'>
      <Navtop />
          <Routes>
            <Route path='/' element={<Home />} />
				    <Route path='/about' element={<About />} />
            <Route path='/history-major-league-baseball' element={<History />} />
            <Route path='/conact' element={<Contact />} />
			    </Routes>
      <Footer />
    </div>
  );
}

export default App;
