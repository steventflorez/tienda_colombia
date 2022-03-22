import React from 'react'

export default function Modal() {
    return (
        <div>
            <div className="modal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Adquirir Producto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Diligenciar los siguientes datos para la solisitud.</p>

                            <form action="">

                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Nombre <span className='obli'>*</span></label>
                                            <input type="name" className="form-control" id="nom" aria-describedby="emailHelp" placeholder="Nombre" />

                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Cedula <span className='obli'>*</span></label>
                                            <input type="number" className="form-control" id="ced" aria-describedby="emailHelp" placeholder="Cedula" />

                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Empresa <span className='obli'>*</span></label>
                                            <input type="text" className="form-control" id="em" aria-describedby="emailHelp" placeholder="Empresa" />
                                            <small id="emailHelp" className="form-text text-muted">Empresa donde trabaja.</small>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Dirección de entrega <span className='obli'>*</span></label>
                                            <input type="text" className="form-control" id="dir" aria-describedby="emailHelp" placeholder="Direccion" />

                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Telefono <span className='obli'>*</span></label>
                                            <input type="number" className="form-control" id="tel" aria-describedby="emailHelp" placeholder="Telefono" />

                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Correo <span className='obli'>*</span></label>
                                            <input type="email" className="form-control" id="cor" aria-describedby="emailHelp" placeholder="Correo" />

                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Referido <small id="emailHelp" className="form-text text-muted">Opcional</small> </label>
                                            <input type="number" className="form-control" id="cor" aria-describedby="emailHelp" placeholder="Referido" />

                                        </div>
                                    </div>
                                    <fieldset className="form-group">
                                        <div className="col-12">
                                            <legend className="mt-4">Numero de cuotas</legend>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" defaultValue="option1" defaultChecked />
                                                    12
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
                                                    24
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
                                                    36
                                                </label>
                                            </div>
                                        </div>




                                        
                                    </fieldset>


                                </div>



                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Solisitar</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
