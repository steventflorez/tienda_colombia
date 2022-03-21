import React from 'react'

export const CardProducto = () => {
  return (
    <div className='col-lg-4 col-12'>
      <div className="card bg-light mb-3 " style={{ maxWidth: '20rem' }}>
        <div className="card-header">Locion</div>
        <div className="card-body alinear">

          <img className='img' src="https://http2.mlstatic.com/D_NQ_NP_830631-MCO28182908435_092018-O.jpg" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, rerum numquam molestias mollitia esse reprehenderit? Itaque labore modi saepe quam, praesentium quisquam velit voluptatum. Accusamus quod fugiat totam nostrum tempore.</p>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col-12">
              <span className="badge bg-primary"><strong>Precio Decontado:</strong> $300000</span>

            </div>
            <div className="col-12">
              <span className="badge bg-warning"><strong>Precio Financiado:</strong> $300000</span>
            </div>

          </div>
          <br />
          <button type="button" className="btn btn-success w-100">Adquirir</button>
        </div>
      </div>
    </div>
  )
}
