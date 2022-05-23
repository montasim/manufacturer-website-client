import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import logo from './Assets/Logo/logo.png';
import AcceptCookies from './Components/AcceptCookies';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import AddAReview from './Pages/Dashboard/AddAReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddAProduct from './Pages/Dashboard/AddAProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Authentication/Login';
import ResetPassword from './Pages/Authentication/ResetPassword';
import Signup from './Pages/Authentication/Signup';
import Contact from './Pages/Contact/Contact';
import RequireAuth from './Hooks/RequireAuth';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Hooks/RequireAdmin';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';

function App() {
  return (
    <div>
      <Navbar logo={logo} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-portfolio' element={<MyPortfolio />} />
        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path='/product-details/:id' element={<Purchase />} />

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="add-review" element={<AddAReview />} />
          <Route path="my-profile" element={<MyProfile />} />
          <Route path='all-orders' element={
            <RequireAdmin>
              <ManageAllOrders />
            </RequireAdmin>
          } />
          <Route path='all-products' element={
            <RequireAdmin>
              <ManageProducts />
            </RequireAdmin>
          } />
          <Route path='add-product' element={
            <RequireAdmin>
              <AddAProduct />
            </RequireAdmin>
          } />
          <Route path='all-users' element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          } />
          <Route path='add-user' element={
            <RequireAdmin>
              <AddAProduct />
            </RequireAdmin>
          } />
          <Route path='all-admin' element={
            <RequireAdmin>
              <MakeAdmin />
            </RequireAdmin>
          } />
          <Route path='add-admin' element={
            <RequireAdmin>
              <MakeAdmin />
            </RequireAdmin>
          } />
          <Route path='all-orders' element={
            <RequireAdmin>
              <ManageAllOrders />
            </RequireAdmin>
          } />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer logo={logo} />
      <ToastContainer />
    </div>
  );
}

export default App;
