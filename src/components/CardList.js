import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ robots, setRobots }) => {
  const [favourites, setFavourites] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState(robots);

  useEffect(() => {
    console.log("Favs => ", favourites)
  }, [favourites, filteredRobots]);

  useEffect(() => {
    console.log("Filtered => ", filteredRobots)
    setRobots(filteredRobots)
  }, [filteredRobots, setRobots]);


  const listOfRobots = robots.map((robot, i) => {
    const { id, name, email } = robot;

    return <Card 
              id={id}
              name={name} 
              email={email} 
              key={id} 
              favourites={favourites} 
              setFavourites={setFavourites} 
              filteredRobots={filteredRobots}
              setFilteredRobots={setFilteredRobots}
              />;
  });
  return <div className="container">{listOfRobots}</div>;
};

export default CardList;
