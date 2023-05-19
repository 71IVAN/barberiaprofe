import Swal from 'sweetalert2'
import { useState, useEffect } from "react"
export function Agenda() {

    const [nombre, setNombre] = useState(null)
    const [correo, setCorreo] = useState(null)
    const [telefono, setTelefono] = useState(null)
    const [fecha, setFecha] = useState(null)
    const [hora, setHora] = useState(null)

    const [errores, seterrores] = useState({})

    useEffect(function (){
       
        if(Object.keys(errores).length > 0){//tengo errores
            Swal.fire({
                icon: 'error',
                title: 'Nooo...',
                text: 'Tienes campos vacios!',
               
              })
        }else{//no hay errores
            Swal.fire(
                'Turno reservado!',
                'That´s all'
              )
        }
    },[errores])
    


    function validarFormulario(evento) {
        evento.preventDefault()
        let listaErrores = {}


        if(!nombre){
         listaErrores.nombre="el nombre es obligatorio"
        }

        if(!correo){
          listaErrores.correo="el correo es obligatorio"
        }
          
         seterrores(listaErrores)


    }

    return (

        <>

            <form onSubmit={validarFormulario}>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input
                                type="text"
                                className={`form-control ${errores.nombre?'is-invalid':''}`}
                                placeholder="Nombre Cliente"
                                id="nombre"
                                value={nombre}
                                onChange={(evento) => {
                                    setNombre(evento.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input
                                type="text"
                                className={`form-control ${errores.correo?'is-invalid':''}`}
                                placeholder="Correo cliente"
                                value = {correo}
                                id="email"
                                onChange={(evento) => {
                                    setCorreo(evento.target.value)
                                }} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input type="text"
                                className="form-control"
                                placeholder="Telefono Cliente"
                                id="telefono"
                                onChange={(evento) => {
                                    setTelefono(evento.target.value)
                                }} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Date"
                                id="fecha"
                                onChange={(evento) => {
                                    setFecha(evento.target.value)
                                }} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text"
                                id="basic-addon1">@</span>
                            <select
                                id="hora"
                                onChange={(evento) => {
                                    setHora(evento.target.value)
                                }}
                                className="form-select"
                                defaultValue={'DEFAULT'}>
                                <option value="DEFAULT">Hora:</option>
                                <option value="1">6:30 am</option>
                                <option value="2">7:00 am</option>
                                <option value="3">7:30 am</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Agendar</button>

            </form>


        </>
    )

}