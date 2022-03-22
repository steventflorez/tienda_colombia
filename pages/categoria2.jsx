/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { Nav } from '../components/Nav'
import Opcion from '../components/Opcion'
import { useRouter } from "next/router";
import categorias from '../categorias.json'

export default function categoria2() {

    const rauter = useRouter()
    const [elementos,setElementos]=useState([])
    const [padre,setPadre]=useState([])
  
    const id = rauter.query.element

    useEffect(()=>{
        categorias.map((categoria)=>{
            if(categoria.id == id){
                setPadre(categoria.id)
                setElementos(categoria.subCategoria)
                
            }
        })
    },[])
    
    

    //const llamada = rauter.query.id




    return (
        <Nav>
            <div className="cont row">
                {


                    elementos.map((categoria) => (
                       
                            <Opcion key={categoria.id} elemento={categoria} padre={padre} ir={categoria.ir} />
                        
                        
                    )) }
                    
            </div>

        </Nav>
    )


    


}

