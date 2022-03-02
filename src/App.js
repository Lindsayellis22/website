import './App.css';
import Navtop from "./Navtop";
import Carouselpic from './Carouselpic'
import Footer from './Footer';
import About from './About'

function App() {
  return (
    <div className='background'>
      <Navtop />
      <Carouselpic />
      <About />
      <Footer />
    </div>
  );
}

export default App;
