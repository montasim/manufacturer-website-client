import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import logo from './Assets/Logo/logo.png';

function App() {
  return (
    <div>
      <Navbar logo={logo} />
      <Footer logo={logo} />
    </div>
  );
}

export default App;
