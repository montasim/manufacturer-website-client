import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import logo from './Assets/Logo/logo.png';
import AcceptCookies from "./Components/AcceptCookies";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar logo={logo} />
      <Home />
      <Footer logo={logo} />
      <AcceptCookies />
    </div>
  );
}

export default App;
