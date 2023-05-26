export async function consultarReservas(){

    //1. URL DEL SERVICIO 
    const URL = "http://pruegaapi20231.vercel.app/buscarReservas"

    //2. CONFIGURAR LA PETICION DE ENVIO
    const PETICION={
        method:"GET"  //GET POST PUT DELETE
      //  headers:{},  //DATOS DE CONTROL
      //  body:""
    }

    //3. SIEMPRE DEBO COMUNICARME CON EL BACK
        //FUNCION FETCH
        let respuestaServidor= await fetch (URL, PETICION)
        let datosConsultados= await respuestaServidor.json()
        return datosConsultados


}