/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'

export default function login() {


    const router = useRouter()

    const login= async (e)=>{
        e.preventDefault();


        //const rute = `${rauter.query.father}${rauter.query.children}${rauter.query.element}`
    
        const { data: usuario } = await axios.get('http://localhost:3000/api/usuarios', {
                    params: {
                        donde: 'cedula',
                        ref: document.querySelector('#correo').value
    
                    }
                })

                if(usuario.length === 0){
                    alert('usuario no encontrado')
                    
                }else{
                  
                    if(usuario[0].contraseña == document.querySelector('#contra').value){
                        router.push('/')
                        localStorage.setItem('login','true')
                    }else{
                        alert('contraseña incorrecta')
                    }
                }
                

    }

    return (
        <div className='login'>
            <div className="card text-white bg-primary mb-3" style={{ maxWidth: '20rem' }}>
                <div className="card-header">Iniciar de sesión</div>
                <div className="card-body">
                    <form onSubmit={login}>
                        <div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="form-label mt-4">Correo</label>
                                <input type="number" className="form-control" id="correo" aria-describedby="emailHelp" placeholder="Enter email" />
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Contraseña</label>
                                <input type="password" className="form-control" id="contra" placeholder="Password" />
                            </div>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
