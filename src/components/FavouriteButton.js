import React from 'react';
import "./FavouriteButton.css";
import { FaRegHeart } from "react-icons/fa";

const FavouriteButton = ({ favButtonPress }) => {
  return (

    <button 
        className="btn heart" 
        onClick={favButtonPress}>
        <FaRegHeart style={{fontSize: '20px'}}/>
    </button>
  );
};

export default FavouriteButton;


