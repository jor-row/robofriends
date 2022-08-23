import React from "react";
import { FaTrashAlt, FaRegHeart } from "react-icons/fa";
import "./Card.css";

const Card = (props) => {
  const { id, name, email } = props;

  return (
    <div className="card grow">
      <button className="btn heart" >
        <FaRegHeart style={{fontSize: '20px'}}/>
      </button>
      <button className="btn trash">
        <FaTrashAlt style={{fontSize: '20px'}}/>
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
