import React, { useState } from 'react'
import { GoCheckCircle } from "react-icons/go";
import { GoCheckCircleFill } from "react-icons/go";


const Actions = ({ list }) => {

    const [icon, setIcon] = useState(true);

    const handleClick = () => {
        setIcon(!icon);
    }

  return (
    <div className="actions">
        <div className="icon" onClick={handleClick}>
            {icon ? <GoCheckCircle /> : <GoCheckCircleFill className='icon-style' />}
        </div>
        <h4>{list}</h4>
    </div>
  )
}

export default Actions