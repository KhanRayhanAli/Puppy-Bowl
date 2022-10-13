import React from 'react';
import {AdditionalInfo} from './'

const Puppies = (props) => {
    const puppies = props.puppies
    return (
    <div id="puppiesEverywhere">
        {puppies.map((puppy) => {
            return (
                <div key= {`puppies-${puppy.id}`} className="puppy">
                   <div> {puppy.name}</div>
                   <img src={puppy.imageUrl}/>

                   {/* <div> {puppy.breed}</div>
                   <div> {puppy.status}</div> */}

<button onClick={<AdditionalInfo puppies={puppies}/>} id="addDets">Additional details</button>
                </div>
            )
        })}
    </div>)
};

export default Puppies;