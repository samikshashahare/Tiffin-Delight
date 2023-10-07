import React from 'react'

const Addtocard = ({minmealpackage, regularmealpackage, jumbomealpackage }) => {
  return (
    <div>
      <div>{minmealpackage}</div>
      <div>{regularmealpackage}</div>
      <div>{jumbomealpackage}</div>
    </div>
  )
}

export default Addtocard
