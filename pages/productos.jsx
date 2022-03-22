/* eslint-disable react-hooks/rules-of-hooks */

import { CardProducto } from '../components/CardProducto'
import { Nav } from '../components/Nav'
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Modal from '../components/Modal';


export default  function productos() {
    
    const rauter = useRouter()
    const [products,setProducts]=useState([])

    useEffect(() => {
        const cargarProductos = async()=>{
            const rute = `${rauter.query.father}${rauter.query.children}${rauter.query.element}`
    
        const { data: productos } = await axios.get('http://localhost:3000/api/productos', {
                    params: {
                        ruta: rute
    
                    }
                })
                setProducts(productos)
                console.log(productos,'estos son los productos');
        }
    
        cargarProductos()
        
    }, [])

    

    

            



    return (
        <Nav>
            <div className="row cont">
                {products.map((producto)=>(
                    <CardProducto
                        key={producto.id}
                        titulo={producto.titulo} 
                        img={producto.img} 
                        des={producto.descripcion}
                        total={producto.precio_total}
                        fin={producto.precio_fin}
                        comicion={producto.comicion}
                        />
                ))}
            </div>

            <Modal/>

        </Nav>
    )
    
    
    
    
}
