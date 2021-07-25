import React from 'react'

export const Hero = ({heroName}) => {
    if(heroName==="joker"){
        throw new Error("joker not allowed");
    }
    return (
        <div>
            {heroName}
        </div>
    )
}
