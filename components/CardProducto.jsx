import React, { useEffect, useState } from 'react'


export const CardProducto = ({titulo,img,des,total,fin,comicion,upModal, id_pro, setPro}) => {

  

    
    const login = localStorage.getItem('login')
    let display = 'badge bg-info d-none'
    //const [display,setDisplay]=useState('badge bg-info d-none')
    
    if(login == 'true'){
      display ='badge bg-info d-block'
    }

    const abrirModal=()=>{
      upModal()
      setPro(id_pro)
    }

  return (
    <div className='col-lg-4 col-12'>
      <div className="card bg-light mb-3 " style={{ maxWidth: '20rem' }}>
        <div className="card-header">{titulo}</div>
        <div className="card-body alinear">

          <img className='img' width={150} src={img} />
          <p>{des}</p>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col-12">
              <span className="badge bg-primary"><strong>Precio Decontado:</strong>$ {total}</span>

            </div>
            <div className="col-12">
              <span className="badge bg-warning"><strong>Precio Financiado:</strong> $ {fin}</span>
            </div>
            <br />
            <div className="col-12">
              <span className={display}><strong>Comición:</strong> $ {comicion}</span>
            </div>

          </div>
          <br />
          <button type="button" onClick={abrirModal} className="btn btn-success w-100">Adquirir</button>
        </div>
      </div>
    </div>
  )
}
