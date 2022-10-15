import React from "react";

const Navbar = (props) => {
  const setSearchInfo = props.setSearchInfo
  const searchInfo = props.searchInfo

  const handleChange = event => {
    console.log(event.target.value)
    const searchName = event.target.value
    setSearchInfo({names:searchName});
    console.log(searchInfo)
  }
  const handleChange2=event =>{
    console.log(event.target.value)
    const searchBreed = event.target.value
  setSearchInfo({breeds:searchBreed})
  console.log(searchInfo)
}
  return (
    <div id="navbar">
        <h3 id='nameText'>Name: </h3>
        <input type='text' id='pupName' onChange={handleChange}></input>
        <h3 id='breedText'>Breed: </h3>
        <input type='text' id='pupBreed' onChange={handleChange2}></input>
        <input type='submit' id='pupSubmit' value='Submit' ></input>
    </div>
  );
};

export default Navbar;
