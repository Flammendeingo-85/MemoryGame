import head from "../assets/head.svg";

const Card = ({ emoji }) => {
  function handleCardClick() {
    console.log("click");
  }

  return (
    <button className="card-container" onClick={handleCardClick}>
      <div className="front">
        <img src={head} alt="head" width="60" />
      </div>
      <div className="back">{emoji}</div>
    </button>
  );
};

export default Card;
