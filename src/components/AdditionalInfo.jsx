import React from "react";


const AdditionalInfo = (props) => {
  const pupInfo = props.pupInfo
  const setPupInfo=props.setPupInfo

  return(
  <div id="buttonss">
    <button onClick={() => {setPupInfo({id:null})}} id="home">Home</button>
    <div id='puppyProfile'>
      <img id='Pfp' src={pupInfo.imageUrl} />
      <div id='pupStuff'>
        <p><b>Name: </b>{pupInfo.name}</p>
        <p><b>Breed: </b>{pupInfo.breed}</p>
        <p><b>ID: </b>{pupInfo.id}</p>
        <p><b>Status: </b>{pupInfo.status}</p>
        <p><b>Team: </b>{pupInfo.team.name}</p>
        <p><b>Score: </b>{pupInfo.team.score}</p>
      </div>
    </div>
  </div>
  );
};

export default AdditionalInfo