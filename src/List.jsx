import React from "react";

const List = ({ listData }) => {

    return (
        <ul className="inline-block w-fit p-4 border-2 border-black rounded-md">
    {listData.map ((el) => (
        <li className="text-red-700">{el}</li>
    ))}

        </ul>
    )
}

export default List