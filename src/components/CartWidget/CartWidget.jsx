import "./CartWidget.scss"
import Logo from "@/assets/imgCarrito.png";

export default function CartWidget() {
  return (
        <div>
        <img className="imgCarrito" src={Logo} alt="Imagen de un carrito de compras" />
        <strong></strong>
        </div>
  );
}