import React from 'react'

const MicroTask = ({name, info}) => {
  return(
    <React.Fragment>
      <article>
        <h2>{name}</h2>
        <p>{info}</p>
      </article>
    </React.Fragment>
  )
} 
export default MicroTask