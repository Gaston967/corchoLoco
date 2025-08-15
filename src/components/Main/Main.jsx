import "./Main.scss";
import Card from "../Card/Card";


export default function Main() {
  return (
    <main className="main">
      <h2>Bienvenido a mi sitio</h2>
      <p>Este es el contenido principal.</p>  
      <div>
      <Card />
      <Card />
      <Card />    
      </div>
   
    </main>
  );
}