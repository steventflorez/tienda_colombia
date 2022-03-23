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
    const [display, setDisplay] = useState('d-none')
    const [id_pro,setId_pro]= useState()

    useEffect(() => {
        const cargarProductos = async()=>{
            const rute = `${rauter.query.father}${rauter.query.children}${rauter.query.element}`
    
        const { data: productos } = await axios.get('/api/productos', {
                    params: {
                        ruta: rute
    
                    }
                })
                setProducts(productos)
                console.log(productos,'estos son los productos');
        }
    
        cargarProductos()
        
    }, [])

    const upModal = () => {

        if (display == 'd-none') {
            setDisplay('d-block')
        } else {
            setDisplay('d-none')
        }
    }

    const setPro =(producto)=>{
        setId_pro(producto)
    }

    

            



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
                        upModal={upModal}
                        id_pro={producto.id}
                        setPro={setPro}
                        
                        />
                ))}
            </div>

            <Modal display={display} upModal={upModal} id={id_pro}/>

        </Nav >
    )
    
    
    
    
}
