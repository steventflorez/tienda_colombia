import React from 'react'
import Link from 'next/link'

export default function Opcion({ir,color,nombre,icono}) {

    const direccion = `/${ir}`
    const btn_tipo= `btn ${color} btn-opcion`
  return (
    
      <div className="col-12 cont">
        <Link href={direccion}>
        <a className='btn-opcion cont link_a'>
        <button  type="button" className={btn_tipo} >{nombre} <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gift-fill" viewBox="0 0 16 16">
        <path d={icono}/>
      </svg></span></button>
          </a>
        </Link>
        
      
        
        </div>
      
    
  )
}

