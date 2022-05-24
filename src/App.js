import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home';
import Purchase from './Pages/Purchase';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
      </Routes>
    </div>
  );
}

export default App;
