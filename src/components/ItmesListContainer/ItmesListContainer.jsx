import "./ItmesListContainer.scss";
import Card from "../Item/Item";


export default function ItmesListContainer({ mensaje }) {
  return (
    <main className="main">
      <h1>Bienvenido a un espacio dedicado al arte del vino</h1>
      <h2>Cada botella guarda una historia, un origen y una pasión que trasciende generaciones. Aquí encontrarás más que etiquetas</h2>
      <h3>{mensaje}</h3>  
      <div>
      <Card />
      <Card />
      <Card />    
      </div>   
    </main>
  );
}