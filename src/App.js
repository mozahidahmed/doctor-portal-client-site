
import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {
  return (
    <div>
      <Navbar></Navbar>
            
      {/* ...........Route start..................................... */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      {/* ...........Route end........................................... */}


    </div>
  );
}

export default App;
