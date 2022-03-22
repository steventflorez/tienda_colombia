/* eslint-disable react-hooks/rules-of-hooks */

import { Nav } from '../components/Nav'
import Opcion from '../components/Opcion'
import categorias from '../categorias.json'
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react'

export default function categoria3() {

    const rauter = useRouter()
    const id = rauter.query.element
    const id_padre = rauter.query.father
    const [elementos,setElementos]=useState([])
    const [padre,setPadre]=useState([])
    const [hijo,setHijo]=useState([])

    useEffect(() => {
        categorias.map((categoria) => {
            if (categoria.id == id_padre) {
                categoria.subCategoria.map((subCategoria) => {
                    if (subCategoria.id == id) {
                        setHijo(subCategoria.id)
                        setPadre(id_padre)
                        setElementos(subCategoria.subCategoria)
                    }
                })

                

            }
        })
    }, [])
    return (
        <Nav>
            <div className="cont row">
                {


                    elementos.map((categoria) => (

                        <Opcion key={categoria.id} elemento={categoria} padre={padre} hijo={hijo} ir={categoria.ir} />


                    ))}


            </div>

        </Nav>
    )

    
}
