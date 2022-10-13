import React, {useEffect, useState} from "react";
import {Navbar} from './';
import {Puppies} from './';
import {AdditionalInfo} from './'

const Main = () => {

  const [puppies, setPuppies] = useState([])
  const [pupInfo, setPupInfo]=useState({})

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

const addInfo= async (puppiesId)=>{
  const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players/${puppiesId}`);
  const pupInfo= await response.json();
  setPupInfo(pupInfo)}





  return (
    <div id="main">
      <Navbar />
      <Puppies puppies = {puppies} />
    </div>
  );
};

export default Main;
