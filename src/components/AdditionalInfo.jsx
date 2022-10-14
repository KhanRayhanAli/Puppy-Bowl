import React from "react";


const AdditionalInfo = (props) => {
  const puppies = props.puppies
  const pupInfo = props.pupInfo
  return(
    <div id='puppyProfile'>
        <img id='Pfp' src={pupInfo.imageUrl} />
      <div id='pupStuff'>
          <p><b>Name: </b>{pupInfo.name}</p>
          <p><b>Breed: </b>{pupInfo.breed}</p>
          <p><b>ID: </b>{pupInfo.id}</p>
          <p><b>Status </b>{pupInfo.status}</p>
          <p><b>Team: </b>{pupInfo.team.name}</p>
          <p><b>Score: </b>{pupInfo.team.score}</p>
        </div>
    </div>
  );

};





export default AdditionalInfo
