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
    setFilteredRobots(robots)
  }, [filteredRobots, robots]);


  const listOfRobots = filteredRobots.map((robot) => {

    return <Card 
              robot={robot}
              key={robot.id} 
              robots={robots}
              setRobots={setRobots}
              favourites={favourites} 
              setFavourites={setFavourites} 
              filteredRobots={filteredRobots}
              setFilteredRobots={setFilteredRobots}
              />;
  });
  return <div className="container">{listOfRobots}</div>;
};

export default CardList;
