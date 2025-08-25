import Navbar from "./components/Navbar/Navbar.jsx";
import ItmesListContainer from "./components/ItmesListContainer/ItmesListContainer.jsx";
import Footer from "./components/Footer/Footer";
import "./App.css";


export default function App() {
  return (
    <>
      <Navbar />
      <ItmesListContainer mensaje="¡Que tomamos hoy!"/>
      <Footer />          
    </>
  );
}