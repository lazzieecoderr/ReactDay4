import React from 'react';

const CompD = ({setPerson,person}) => {
    return (
        <>
            <h1>Array of Objects</h1>
            {person.map((element,index)=>{
                return(
                
                    <div key={element.id}>
                        {element.name}
                        {element.age}
                    </div>
                 
                )
            })}
        </>
    );
};

export default CompD;