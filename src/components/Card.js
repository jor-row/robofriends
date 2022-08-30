import {React, useEffect, useState} from "react";
import "./Card.css";
import { FaRegHeart } from "react-icons/fa";
import DeleteRobotButton from './DeleteRobotButton';

const Card = ({ robot , robots, setRobots, favourites, setFavourites, filteredRobots, setFilteredRobots}) => {

  const [buttonState, setButtonState] = useState("");

  useEffect(() => {
    favourites.includes(robot) ? setButtonState("active") : setButtonState("inactive");
  }, [favourites, robot])

  const onFavButtonPress = () => {
    console.log("favourite button pressed on ", robot);
    if (!favourites.includes(robot)) {
      setFavourites([...favourites, robot])
      setButtonState("active")
    } else {
      const newFavourites = favourites.filter((robotName) => robotName !== robot)
      setFavourites(newFavourites)
      setButtonState("inactive")
    }
  }

  const onDeleteRobotButtonPress = () => {
    console.log("delete button pressed ", robot);
    if (favourites.includes(robot)) {
      const newFavourites = favourites.filter((favrobot) => favrobot !== robot)
      setFavourites(newFavourites)
      setButtonState("inactive")
    }
    const newRobots = filteredRobots.filter((existingRobot) => existingRobot !== robot)
    setRobots(newRobots);

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
      <img src={`https://robohash.org/${robot.id}`} alt="Robot" />
      <div className="card-info">
        <h2>{robot.name}</h2>
        <p>{robot.email}</p>
      </div>
    </div>
  );
};
export default Card;
