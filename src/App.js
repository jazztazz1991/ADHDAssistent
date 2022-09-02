import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Chores from "./components/Chores";
import Breakdown from "./components/Breakdown";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' exact element={<About />} />
          <Route path='planning' element={<Chores />} />
          <Route path='todo' element={<Breakdown />} />
        </Routes>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
