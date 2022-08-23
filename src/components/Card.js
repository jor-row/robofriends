import React from "react";
import "./Card.css";

const Card = (props) => {
  const { id, name, email } = props;

  return (
    <div className="card grow">
      <button className="btn">
        <i className="fa fa-trash"></i>
      </button>
      <img src={`https://robohash.org/${id}`} alt="Robot" />
      <div className="card-info">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
