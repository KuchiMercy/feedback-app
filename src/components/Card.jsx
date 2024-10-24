import "./card.css";
import Button from "./Button";

const Card = ({ title }) => {
  const btns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const buttonStyles = {
    backgroundColor: "red"
  };
  
  return (
    <div className="box">
      <h1>{title}</h1>
      <section className="card-container">
        {btns.map((btn, id) => (
          <Button text={btn} key={id} style={buttonStyles}/>
        ))}
      </section>
    </div>
  );
};

export default Card;
