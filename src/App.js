import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import logo from './Assets/Logo/logo.png';
import AcceptCookies from './Components/AcceptCookies';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import UserProfile from './Pages/Dashboard/Users/UserProfile';
import AddAProduct from './Pages/Dashboard/Products/AddProduct';
import AllProducts from './Pages/Dashboard/Products/Products';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Authentication/Login';
import ResetPassword from './Pages/Authentication/ResetPassword';
import Signup from './Pages/Authentication/Signup';
import Contact from './Pages/Contact/Contact';
import RequireAuth from './Hooks/RequireAuth';
import Users from './Pages/Dashboard/Users/Users';
import RequireAdmin from './Hooks/RequireAdmin';
import Orders from './Pages/Dashboard/Orders/Orders';
import Admins from './Pages/Dashboard/Admins/Admins';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import MyBlogs from './Pages/Dashboard/Blogs/MyBlogs';
import AddBlog from './Pages/Dashboard/Blogs/AddBlog';
import Reviews from './Pages/Dashboard/Reviews/Reviews';
import AddReview from './Pages/Dashboard/Reviews/AddReview';
import Categories from './Pages/Dashboard/Categories/Categories';
import AddCategory from './Pages/Dashboard/Categories/AddCategory';
import Cart from './Pages/Cart/Cart';
import Products from './Pages/Products/Products';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import ProductRow from './Pages/Products/ProductRow';
import PayOrder from './Pages/PayOrder/PayOrder';

function App() {
  return (
    <div>
      <Navbar logo={logo} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-portfolio' element={<MyPortfolio />} />
        <Route path='/cart' element={
          <RequireAuth>
            <Cart />
          </RequireAuth>
        } />
        <Route path='/pay-order' element={
          <RequireAuth>
            <PayOrder />
          </RequireAuth>
        } />
        <Route path='products/:id' element={<ProductDetails />} />

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="my-blogs" element={<MyBlogs />} />
          <Route path="add-review" element={<AddReview />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="my-profile" element={<UserProfile />} />
          <Route path='all-orders' element={
            <RequireAdmin>
              <Orders />
            </RequireAdmin>
          } />
          <Route path='all-category' element={
            <RequireAdmin>
              <Categories />
            </RequireAdmin>
          } />
          <Route path='all-products' element={
            <RequireAdmin>
              <AllProducts />
            </RequireAdmin>
          } />
          <Route path='add-category' element={
            <RequireAdmin>
              <AddCategory />
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
              <Admins />
            </RequireAdmin>
          } />
          <Route path='add-admin' element={
            <RequireAdmin>
              <MakeAdmin />
            </RequireAdmin>
          } />
          <Route path='all-orders' element={
            <RequireAdmin>
              <Orders />
            </RequireAdmin>
          } />
          <Route path='all-reviews' element={
            <RequireAdmin>
              <Reviews />
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
