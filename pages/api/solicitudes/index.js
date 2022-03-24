import {
    pool
} from "../../../config/db"



export default function index(req, res) {

    switch (req.method) {
     
        case 'POST':
            return saveSolicitud(req, res)
    }
}

const saveSolicitud = async (req, res) => {
    const {
        cedula ,
        nombre,
        empresa,
        direccion,
        telefono,
        correo,
        referido,
        cuotas,
        vendedor_id,
        productos_id
    } = req.body

    try{
        const [result] = await pool.query('INSERT INTO solicitud SET ?', {
            cedula ,
            nombre,
            empresa,
            telefono,
            correo,
            referido,
            cuotas,
            financiacion:'',
            estado:'1',
            descripcion:'',
            productos_id,
            vendedor_id,
            direccion
            
        })
        console.log(result);
        return res.status(200).json('!Usuario registrado Con exito¡');
    }catch(error){
        console.log(error.message)
        //return res.status(200).json(error);
    }
    
}