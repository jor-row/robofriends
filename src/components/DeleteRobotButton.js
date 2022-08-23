import React from 'react';
import "./DeleteRobotButton.css";
import { FaTrashAlt} from "react-icons/fa";

const DeleteRobotButton = ({ deleteRobotButtonPress }) => {
  return (

    <button 
        className="btn trash"
        onClick={deleteRobotButtonPress}>
    <FaTrashAlt style={{fontSize: '20px'}}/>
  </button>
  );
};

export default DeleteRobotButton;