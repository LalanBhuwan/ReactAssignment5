import "./Cards.css";
// import bright from "./bright.jpg";

const Cards = (props) => {
  return (
    <div className="container" style={{ backgroundImage: props.backimage }}>
      <img className="img" src={props.image} alt="imag" />
      <div className="title">
        <h2>{props.title}</h2>
        <h6>{props.subtitle}</h6>
      </div>
      <p>{props.description}</p>
    </div>
    
  );
};

export default Cards;
