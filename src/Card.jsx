import React from "react";

const Card = ({ photo, name = "Person name", profession = "Profession"}) => {


    return(
        <article className="ml-7 space-y-2 p-4 inline-block border-3 border-black rounded-lg text-lg font-medium">
        <img src={photo} alt="person" className="size-[200px] object-cover" />

        <p>{name}</p>
        <p>{profession}</p>
        
        </article>
    )}


    export default Card