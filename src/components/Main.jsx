import React, {useEffect, useState} from "react";
import {Navbar} from './';
import {Puppies} from './';
import {AdditionalInfo} from './'

const Main = () => {

  const [puppies, setPuppies] = useState([])
  const [pupInfo, setPupInfo]=useState({})
  const [searchInfo, setSearchInfo]=useState({names:"", breed:""})

  function filterPuppies() {
    let filteredPuppies = puppies
    if (searchInfo.length > 0) {
      console.log("Hello")
      const pupFilter = filteredPuppies.filter(() => {
        return data.name == searchInfo
      })
      console.log(pupFilter)
    }
    return filteredPuppies
  }

  useEffect(() => {
    async function getPuppyData() {
      try {
        const response = await fetch(
            'https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players'
        );
        const result = await response.json();
        setPuppies(result.data.players)
        console.log(result.data.players);
    } catch (err) {
        console.log('a');
    }
    }
    getPuppyData()
  }, [])



  const addInfo = async (puppiesId)=>{
    const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players/${puppiesId}`);
   const result = await response.json();
    const pupInfo = result.data.player
    console.log(pupInfo);
    setPupInfo(pupInfo)}
  <div id="puppiesEverywhere">
    {puppies.map((puppy) => {
      return (
        <div key= {`puppies-${puppy.id}`} className="puppy">
          <div> {puppy.name}</div>
          <img src={puppy.imageUrl}/>
          <button onClick={() => {addInfo(puppy.id)}} id="addDets">Additional details</button>
        </div>
      )
      })}
  </div>

  return (
    <div id="main">
     <Navbar searchInfo={searchInfo} setSearchInfo = {setSearchInfo} />
      {
        pupInfo.id ? <AdditionalInfo setPupInfo={setPupInfo} addInfo={addInfo} pupInfo = {pupInfo} puppies = {puppies} /> :
        <Puppies puppies = {filterPuppies()} addInfo = {addInfo}/>
      }
    </div>
  );
};

export default Main;
