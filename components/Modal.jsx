import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Modal({ display, upModal, id }) {

    const clase = `modal ${display}`
    const [cuotass, setCuotass] = useState()
    const [idVen, setIdVen] = useState()
    const closeModal = () => {
        upModal()
    }

    const upSolicitud = async (e) => {
        e.preventDefault();


        if (e.target[6].value != '') {
            const { data: vendedor } = await axios.get('/api/usuarios', {
                params: {
                    donde: 'codigo',
                    ref: e.target[6].value
                }
            })

            if (vendedor.length != 0) {

                setIdVen(vendedor[0].id)
                console.log(idVen, 'encontrado')

                const res = await axios.post('http://localhost:3000/api/solicitudes', {
                    cedula: e.target[1].value,
                    nombre: e.target[0].value,
                    empresa: e.target[2].value,
                    direccion: e.target[3].value,
                    telefono: e.target[4].value,
                    correo: e.target[5].value,
                    referido: e.target[6].value,
                    cuotas: cuotass,
                    vendedor_id: vendedor[0].id,
                    productos_id: id


                });

                const soli = {

                }
                console.log(soli, '')
            } else {
                setIdVen('1')

                const res = await axios.post('http://localhost:3000/api/solicitudes', {
                    cedula: e.target[1].value,
                    nombre: e.target[0].value,
                    empresa: e.target[2].value,
                    direccion: e.target[3].value,
                    telefono: e.target[4].value,
                    correo: e.target[5].value,
                    referido: e.target[6].value,
                    cuotas: cuotass,
                    vendedor_id: '1',
                    productos_id: id


                });


            }



        } else {
            const res = await axios.post('http://localhost:3000/api/solicitudes', {
                cedula: e.target[1].value,
                nombre: e.target[0].value,
                empresa: e.target[2].value,
                direccion: e.target[3].value,
                telefono: e.target[4].value,
                correo: e.target[5].value,
                referido: e.target[6].value,
                cuotas: cuotass,
                vendedor_id: '1',
                productos_id: id


            });
        }







        closeModal()
        alert('su solicitud fue radicada correctamente, un asesor se comunicara con usted pronto')

    }

    const setCuotas = (e) => {

        if (e.target.value == 'option1') {
            setCuotass('12')
        }
        if (e.target.value == 'option2') {
            setCuotass('24')
        }
        if (e.target.value == 'option3') {
            setCuotass('36')
        }
    }
    return (
        <div>
            <div className={clase}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Adquirir Producto</h5>
                            <button type="button" onClick={closeModal} className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Diligenciar los siguientes datos para la solicitud.</p>

                            <form onSubmit={upSolicitud}>

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
                                            <input type="number" className="form-control" id="ref" aria-describedby="emailHelp" placeholder="Referido" />

                                        </div>
                                    </div>
                                    <fieldset className="form-group">
                                        <div className="col-12">
                                            <legend className="mt-4">Numero de cuotas</legend>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="radio" onChange={setCuotas} className="form-check-input" name="optionsRadios" id="optionsRadios1" defaultValue="option1" defaultChecked />
                                                    12
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="radio" onChange={setCuotas} className="form-check-input" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
                                                    24
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="radio" onChange={setCuotas} className="form-check-input" name="optionsRadios" id="optionsRadios2" defaultValue="option3" />
                                                    36
                                                </label>
                                            </div>
                                        </div>





                                    </fieldset>


                                </div>

                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Solicitar</button>

                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
