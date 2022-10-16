import React from "react";

const Navbar = (props) => {
  const setSearchInfo = props.setSearchInfo

  const handleChange = event => {
    const searchName = event.target.value
    setSearchInfo({names:searchName});
  }
  
  const handleChange2=event =>{
    const searchBreed = event.target.value
    setSearchInfo({breeds:searchBreed})
}

  return (
    <div id="navbar">
      <h3 id='nameText'>Name: </h3>
      <input type='text' id='pupName' onChange={handleChange}></input>
      <h3 id='breedText'>Breed: </h3>
      <input type='text' id='pupBreed' onChange={handleChange2}></input>
    </div>
  );
};

export default Navbar;