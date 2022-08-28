import {React, useEffect, useState} from "react";
import "./Card.css";
import { FaRegHeart } from "react-icons/fa";
import DeleteRobotButton from './DeleteRobotButton';

const Card = ({ id, name, email , favourites, setFavourites, filteredRobots, setFilteredRobots}) => {

  const [buttonState, setButtonState] = useState("");

  useEffect(() => {
    favourites.includes(name) ? setButtonState("active") : setButtonState("inactive");
  }, [favourites, name])

  const onFavButtonPress = () => {
    if (!favourites.includes(name)) {
      setFavourites([...favourites, name])
      setButtonState("active")
    } else {
      const newFavourites = favourites.filter((robotName) => robotName !== name)
      setFavourites(newFavourites)
      setButtonState("inactive")
    }
  }

  const onDeleteRobotButtonPress = () => {
    console.log("delete button pressed ", name);
    if (favourites.includes(name)) {
      const newFavourites = favourites.filter((robot) => robot !== name)
      setFavourites(newFavourites)
      setButtonState("inactive")
    }
    const newFilteredRobots = filteredRobots.filter((robot) => robot.name !== name)
    setFilteredRobots(newFilteredRobots);
  }

  return (
    <div className="card grow">
      <button 
        className="btn heart" 
        onClick={onFavButtonPress}
        style={{ color: buttonState === "inactive" ? "#330033" : "#F00" }}
        >
        <FaRegHeart style={{fontSize: '20px'}}/>
      </button>
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
