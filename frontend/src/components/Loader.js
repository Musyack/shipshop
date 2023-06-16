import React from 'react'
import { Spinner } from 'react-bootstrap'
import logo from '../assets/vectors/logo.svg'

const Loader = () => {
  return (
    // <Spinner
    //   animation='border'
    //   role='status'
    //   style={{
    //     width: '100px',
    //     height: '100px',
    //     margin: 'auto',
    //     display: 'block',
    //   }}
    // >
    //   <span className='sr-only'>Loading...</span>
    // </Spinner>
      <span className="loader">
          <img className={'loader_img'} style={{width: '70%'}} src={logo}/>
      </span>
  )
}

export default Loader
