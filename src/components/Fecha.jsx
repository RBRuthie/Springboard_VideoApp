import React from 'react'

const Fecha = () => {
  var showdate = new Date();
  var displaytodaysdate = (showdate.getMonth()+1)+'/'+showdate.getDate()+'/'+showdate.getFullYear();
  // var dt = showdate.toDateString();


  
  return (
    <div className="fecha">
    <h1>{displaytodaysdate }</h1>
  </div>
  )
}

export default Fecha
