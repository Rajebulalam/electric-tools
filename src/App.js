import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/HomePage/Home';
import Purchase from './Pages/Purchase';
import RequireAuth from './Pages/RequireAuth';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import SignIn from './Pages/SignIn';
import Signup from './Pages/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route></Route>
          <Route></Route>
        </Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/signIn' element={<SignIn></SignIn>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
