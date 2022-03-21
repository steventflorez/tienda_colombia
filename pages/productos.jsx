import React from 'react'
import { CardProducto } from '../components/CardProducto'
import { Nav } from '../components/Nav'

export default function productos() {
    return (
        <Nav>
            <div className="row cont">
                <CardProducto />
                <CardProducto />
                <CardProducto />
                <CardProducto />
            </div>

        </Nav>
    )
}
