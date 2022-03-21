import React from 'react'
import { Nav } from '../components/Nav'
import Opcion from '../components/Opcion'

export default function categoria2() {
    return (
        <Nav>
            <div className="row">
                <Opcion ir='categoria3'/>
                <Opcion />
                <Opcion />
            </div>

        </Nav>
    )
}

