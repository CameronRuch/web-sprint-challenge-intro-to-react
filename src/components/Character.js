// Write your Character component here

import React from 'react';

const Characters = (props) => {

    return (
        <>
            {props.data.map(user => {
                return (
                    <div key={user.name} className="character-wrapper">
                        
                        <h1 className="name">{user.name}</h1>
                            <p>Height: {user.height}</p>
                            <p>Mass: {user.mass}</p>
                            <p>Born In: {user.birth_year}</p>
                            <p>Number of Films: {(user.films.length)}</p>
                        
                        
                    </div>
                    
                )
            })}
        </>
    )
}

export default Characters;


/*  API Data [0]
birth_year: "19BBY"
created: "2014-12-09T13:50:51.644000Z"
edited: "2014-12-20T21:17:56.891000Z"
eye_color: "blue"
films: (4) ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 'Revenge of the Sith']
gender: "male"
hair_color: "blond"
height: "172"
homeworld: "http://swapi.dev/api/planets/1/"
mass: "77"
name: "Luke Skywalker"
skin_color: "fair"
species: []
starships: (2) ['http://swapi.dev/api/starships/12/', 'http://swapi.dev/api/starships/22/']
url: "http://swapi.dev/api/people/1/"
vehicles: (2) ['http://swapi.dev/api/vehicles/14/', 'http://swapi.dev/api/vehicles/30/']
*/