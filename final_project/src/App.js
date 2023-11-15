import "./App.css";
import NewAcc from "./Components/NewAcc";
import Game from "./Components/Game";
import Login from "./Components/Login";
import Caracter from "./Components/Caracter";
import Animals from "./Components/Animals";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Game' element={<Game />} />
        <Route path='/NewAcc' element={<NewAcc />} />
      </Routes>
    </div>
  );
}

export default App;
