
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import Cart from "./Pages/Cart"
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
