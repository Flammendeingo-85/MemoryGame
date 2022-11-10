import head from "../assets/head.svg";

const Card = ({ emoji }) => {
  return <div className="card-container">
    <div className="front">
      <img src={head} alt="head" width="60" />
    </div>
    <div className="back">
      {emoji}
    </div>
  </div>;
};

export default Card;