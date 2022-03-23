import {
    pool
} from "../../../config/db"



export default function index(req, res) {

    switch (req.method) {
        case 'GET':
            return getProductos(req, res)
        
    }
}

const getProductos = async (req, res) => {

    try {
        const ruta = req.query.ruta
        const [result] = await pool.query(`SELECT * FROM productos WHERE ruta = ${ruta} `)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(200).json(error.message)
        console.log(error.message)
    }


}