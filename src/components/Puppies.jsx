import React from 'react';

const Puppies = (props) => {
    const puppies = props.puppies
    return (
    <div>
        {puppies.map((puppy) => {
            return (
                <div>
                    {puppy.name}
                </div>
            )
        })}
    </div>)
};

export default Puppies;