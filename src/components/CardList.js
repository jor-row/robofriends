import React from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ robots }) => {
  const listOfRobots = robots.map((robot, i) => {
    const { id, name, email } = robot;

    return <Card id={id} name={name} email={email} key={id} />;
  });
  return <div className="container">{listOfRobots}</div>;
};

export default CardList;
