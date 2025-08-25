import "./Navbar.scss";
import CartWidget from "../CartWidget/CartWidget";

export default function Header() {
  return (
    <header className="header">
      <h1>Corcho Loco</h1>
      <nav>
        <a href="#inicio">Home</a>
        <a href="#servicios">Productos</a>
        <a href="#contacto">Promos</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <CartWidget/>
    </header>
  );
}