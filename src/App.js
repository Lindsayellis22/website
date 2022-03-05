import './App.css';
import Navtop from "./Navtop";
import Carouselpic from './Carouselpic'
import Footer from './Footer';
import Home from './Home';
import About from './About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='background'>
      <Navtop />
      <Home />
        <Carouselpic />
          <Routes>
				    <Route path='/about' element={<About />} />
			    </Routes>
      <Footer />
    </div>
  );
}

export default App;
