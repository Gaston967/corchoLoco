import "./Item.scss";

export default function Card({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__desc">{description}</p>
      </div>
    </div>
  );
}