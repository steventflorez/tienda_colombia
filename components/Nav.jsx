
import Link from 'next/link'
import login from '../pages/login'
import React, { useEffect, useState } from 'react'
export const Nav = ({ children }) => {
 const [show,setShow]= useState('collapse navbar-collapse')
 const change=()=>{
   if(show == 'collapse navbar-collapse'){
    setShow('collapse navbar-collapse show')
   }else{
     setShow('collapse navbar-collapse')
   }
   
 }
 const cerrar = ()=>{
   localStorage.setItem('login','false')
   change()
 }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Tienda</a>
          <button className="navbar-toggler" onClick={change} type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={show} id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link href='/login'>
                  <a className="nav-link active" href="#">Iniciar Sesión
                    <span className="visually-hidden">(current)</span>
                  </a>
                </Link>


              </li>
              <li className="nav-item">
                
                  <a className="nav-link active" onClick={cerrar}>cerrar Sesión
                    <span className="visually-hidden">(current)</span>
                  </a>
              
                

              </li>

            </ul>

          </div>
        </div>
      </nav>
      <div className="container">
        {children}
      </div>

    </div>
  )
}
