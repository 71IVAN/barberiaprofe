import './Servicios.css'
export function Servicios() {

    return (

        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-2 text-center my-3">
                        <img src="../../src/assets/logo.png" alt="img" className='img-fluid w-100' />
                    </div>
                </div>
            </div>  
            <div className="container-fluid bg-dark fw-bold text-white text-center">
                <div className="row p-3">
                    <div className="col-12 text-center">
                        <h2>NUESTROS SERVICIOS</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-3">
                        <img src="../../src/assets/corte1.jpg" alt="s1" className="img-fluid w-100 rounded blancoNegro" />
                        <h4 className='mt-2'>Cortes para caballero</h4>
                    </div>
                    <div className="col-12 col-md-3">
                        <img src="../../src/assets/corte2.avif" alt="s1" className="img-fluid w-100 rounded blancoNegro" />
                        <h4 className='mt-2'>Afeitada profesional</h4>
                    </div>
                    <div className="col-12 col-md-3">
                        <img src="../../src/assets/corte3.jpg" alt="s1" className="img-fluid w-100 rounded blancoNegro" />
                        <h4 className='mt-2'>Cuidado de la piel</h4>
                    </div>
                    
                </div>
                
                
            </div>


        </>

    )


}