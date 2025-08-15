import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <h1>Mi Página en React</h1>
      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}