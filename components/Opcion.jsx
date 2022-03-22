import React from 'react'
import Link from 'next/link'

export default function Opcion({ir,elemento, padre,hijo}) {

    const direccion = `/${ir}`
    const btn_tipo= `btn ${elemento.color} btn-opcion`
    

   

  return (
    
      <div className="col-12 cont">
        <Link href={{
          method: 'post',
          pathname: direccion,
          query: {
            element: elemento.id,
            father: padre,
            children: hijo},
        }}>
        <a className='btn-opcion cont link_a' >
        <button  type="button" className={btn_tipo} >{elemento.nombre} <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gift-fill" viewBox="0 0 16 16">
        <path d={elemento.icono}/>
      </svg></span></button>
          </a>
        </Link>
        
      
        
        </div>
      
    
  )
}

