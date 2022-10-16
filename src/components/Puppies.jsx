import React from 'react';
import {AdditionalInfo} from './'

const Puppies = (props) => {
    const puppies = props.puppies
    const addInfo = props.addInfo
    return (
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
    </div>)
};

export default Puppies;