import Head from 'next/head'
import Image from 'next/image'
import { Nav } from '../components/Nav'
import Opcion from '../components/Opcion'
import Link from 'next/link'
import { useRouter } from "next/router";
import categorias from '../categorias.json'

export default function Home() {

  const router = useRouter()

  /* const categorias = [
    {
      id: '0',
      nombre: 'detalles',
      color: 'btn-danger',
      icono: 'M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z',
      subCategoria:['desayunos','flores','otros']
    },
    {
      id: '1',
      nombre: 'cuidado personal',
      color: 'btn-info',
      icono: 'M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z'
      ,subCategoria:['desayunos','flores','otros']
    },
    {
      id: '2',
      nombre: 'educación',
      color: 'btn-warning',
      icono: 'M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z'
      ,subCategoria:['desayunos','flores','otros']
    },
    {
      id: '3',
      nombre: 'hogar',
      color: 'btn-primary',
      icono: 'M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z'
      ,subCategoria:['desayunos','flores','otros']
    },
    {
      id: '4',
      nombre: 'vehiculos',
      color: 'btn-success',
      icono: 'M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7H1.102z'
      ,subCategoria:['desayunos','flores','otros']
    },

  ] */

  const ir = () => {
    //router.push('/categoria2')
  }


  return (
    <Nav>

      <div className="cont row">
        {


          categorias.map((categoria) => (
            <Opcion key={categoria.id} elemento={categoria} ir='categoria2' />
          ))}

        

      </div>
      <footer className='bg-light'>
          <h3>Nuestros clientes</h3>
          <div className="raw cont_footer">
            <div className="col-3 im">
                <img src="https://res.cloudinary.com/stevet94/image/upload/v1648079455/imagenes/escudo_policia_11_znye5e.png" width={'40px'} alt="" />
                <h6>Policia</h6>
            </div>
            <div className="col-3 im">
                <img src="https://res.cloudinary.com/stevet94/image/upload/v1648079376/imagenes/Escudo_Fuerza_Aerea_Colombiana.svg_j5mfjz.png" width={'40px'} alt="" />
                <h6>FAC</h6>
            </div>
            <div className="col-3 im">
                <img src="https://res.cloudinary.com/stevet94/image/upload/v1648079332/imagenes/1200px-Escudo_her%C3%A1ldico_Armada_Nacional_de_Colombia.svg_xwvbnq.png" width={'40px'} alt="" />
                <h6>Armada</h6>
            </div>
            <div className="col-3 im">
                <img src="https://res.cloudinary.com/stevet94/image/upload/v1648079066/imagenes/1200px-Escudo_Ejercito_Nacional_de_Colombia.svg_ufaslo.png" width={'40px'} alt="" />
                <h6>Ejercito</h6>
            </div>
          </div>
        </footer>





    </Nav>
  )
}
