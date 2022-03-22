import {
    pool
} from "../../../config/db"



export default function index(req, res) {

    switch (req.method) {
        case 'GET':
            return getUsuarios(req, res)
        case 'POST':
            return saveUsuarios(req, res)
    }
}

const getUsuarios = async (req, res) => {

    try {
        const cedula = req.query.cedula
        //console.log(correo)
        const [result] = await pool.query(`SELECT * FROM vendedor WHERE cedula = ${cedula} `)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(200).json(error.message)
        console.log(error.message)
    }


}