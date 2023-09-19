import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar({title,about,mode,toggleMode}) {
  
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} text-${mode==='dark'?'dark':'light'}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/about">{about}</Link>
                </li>
            </ul>
            {/* <div className='rounded bg-primary mx-3' style={{height:"20px",width:"20px"}}
             onClick={toggleMode('Primary')}>

            </div>
            <div className='rounded bg-warning mx-3' style={{height:"20px",width:"20px"}}
             onClick={toggleMode('Warning')}>

            </div>
            <div className='rounded bg-danger' style={{height:"20px",width:"20px"}} onClick={toggleMode('Danger')}>

            </div> */}
            <div className={`form-check form-switch text-${mode==='dark'?'light':'dark'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" 
              onClick={toggleMode}/>
              Enable {mode==='light'?'dark':'light'} Mode
            </div>
            </div>
        </div>
      </nav>
    </div>
  )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    heading:PropTypes.string
}
Navbar.defaultProps={
    title:"This is default title",
   about:"This is default heading"
}
