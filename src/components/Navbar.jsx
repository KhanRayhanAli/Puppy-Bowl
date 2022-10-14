import React from "react";

const Navbar = (props) => {
  searchInfo=props.searchInfo
  return (
    <div id="navbar">
        <h3 id='nameText'>Name: </h3>
        <input type='text' id='pupName'></input>
        <h3 id='breedText'>Breed: </h3>
        <input type='text' id='pupBreed'></input>
        <input type='submit' id='pupSubmit' value='Submit'></input>
    </div>
  );
};

export default Navbar;
