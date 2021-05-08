import React, { useState } from 'react'
import './Register.css'

// - NOMBRE FANTASIA
// - CUIT
// - TELEFONO
// - Celular wasapp(OBLIGATORIO)
// - PROBVNCIA,
// - CIUDAD(SI SE PUEDE TIPO COMBO)
// - UN BOTON PARA ENVIAR LOS DATOS
const Register = ({ theme }) => {
    const [datos, setDatos] = useState({
        empresa: "",
        cuit: "",
        telefono: "",
        ubicacion: ""
    })
    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    return (<div className="registerContainer">
        <form>
            <div className="col">
                <input type="text" placeholder="Nombre de la Empresa." className="form-control" onChange={handleInputChange} name="empresa"></input>
            </div>
            <div className='col'>
                <input type="text" placeholder="CUIT (ej: 11-11111111-1)" className="form-control" onChange={handleInputChange} name="cuit"></input>
            </div>
            <div className='col'>
                <input type="text" placeholder="Telefono (con whatsapp)" className="form-control" onChange={handleInputChange} name="telefono"></input>
            </div>
            <div className='col'>
                <input type="text" placeholder="Ubicacion (ej: Rosario, Santa Fe, Argentina)" className="form-control" onChange={handleInputChange} name="ubicacion"></input>
            </div>
        </form>
    </div>)
}
export default Register;