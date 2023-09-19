import React from 'react'


export default function Alert({alert}) {
    const cap=(word)=>{
        let low=word.toLowerCase();
        return low.charAt(0).toUpperCase()+low.slice(1);
    }
  return (
    <div style={{height:"60px"}}>
      {alert&&<div className={`alert alert-${alert.type} alert-dismissible fade show`}  role="alert">
        <strong>{cap(alert.type)}:{alert.msg}</strong>
      </div>}
    </div>
  )
}
