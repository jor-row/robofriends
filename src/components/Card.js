import React from "react";
import "./Card.css";
import FavouriteButton from './FavouriteButton';
import DeleteRobotButton from './DeleteRobotButton';

const Card = (props) => {
  const { id, name, email } = props;

  const onFavButtonPress = () => {
    console.log("fav button pressed ", name);
  }

  const onDeleteRobotButtonPress = () => {
    console.log("delete button pressed ", name);
  }

  return (
    <div className="card grow">
      <FavouriteButton favButtonPress={onFavButtonPress} />
      <DeleteRobotButton deleteRobotButtonPress={onDeleteRobotButtonPress}/>
      <img src={`https://robohash.org/${id}`} alt="Robot" />
      <div className="card-info">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
