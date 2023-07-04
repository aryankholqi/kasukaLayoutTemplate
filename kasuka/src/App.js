import './App.css';
import Kasuka from './Kasuka';
import MainProduct from './components/Products/MainProduct';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Kasuka/>}/>
        <Route path='product/:id' element={<MainProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
