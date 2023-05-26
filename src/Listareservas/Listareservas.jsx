import { useState, useEffect } from "react"
import { consultarReservas } from "../services/servicioReserva"
export function Listareservas(){

    //configuro mis variables de estado (cantidad 2)
    //la uso para almacenar los datos que llegan de la api
    //manejo estado de carga

    const [reservas, setReserva ] = useState (null)
    const [carga, setCarga ] = useState(true)

    //programo useEffect para garantizat que llamare el servicio, solo cuando cargue mi componente 
    //componente
    useEffect(function(){}, [
      consultarReservas().then(function(respuestaBack){
         setReserva(respuestaBack.reservas)
         setCarga(false)
      })
    ])

    //Programa la interfaz para mostrar el mensaje de carga o para mostrar los datos del servicio 
    if(carga){
        return(
            <>
            <br /> <br /> <br />
            <h3>Estoy cargando ... </h3>
            </>
        )
        
        
    }else{
         return(
            <>
            <br /> <br /> <br />
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-3">
                   {
                    reservas.map(function (reserva){
                        return(
                            <div className="col">
                                <div className="card h-100 shadow">
                                     <h5>Cliente : {reserva.nombre} </h5>
                                     <p>Fecha : {reserva.dia}</p>
                                     <p>Hora : {reserva.hora}</p>
                                     <p>Contacto : {reserva.telefono}</p>
                                </div>
                            </div>
                        )
                    })
                   }
                </div>
            </div>
            </>
         )
    }

}