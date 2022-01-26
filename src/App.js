import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import "./App.css"
import GameDetails from './components/GameDetails/GameDatails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/:id" element={<GameDetails  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
