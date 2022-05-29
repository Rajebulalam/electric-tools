import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blogs from './Pages/Blogs';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/HomePage/Home';
import NotFound from './Pages/NotFound';
import Portfolio from './Pages/Portfolio';
import Purchase from './Pages/Purchase';
import RequireAuth from './Pages/RequireAuth';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import SignIn from './Pages/SignIn';
import Signup from './Pages/Signup';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='reviews' element={<AddReview></AddReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='admin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manageOrders' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
        </Route>
        <Route path='signup' element={<Signup></Signup>}></Route>
        <Route path='signIn' element={<SignIn></SignIn>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
