

const Contacto = () => {
return (
    <main className='contacto'>
        <h2>Ponerse en Contacto</h2>
        <section className='contacto_Container'>
            <div className='contacto_Form'>
                <h4>Enviar Mensaje</h4>
                <form>
                    <input type='text' placeholder='Nombre'></input>
                    <input type='number' placeholder='telefono'></input>
                    <input type='email' placeholder='email'></input>
                    <input type='text' placeholder='mensaje'></input>
                    <button>Enviar</button>
                </form>
            </div>
            <div className='contacto_Datos'>
                <h4>Informacion de Contacto</h4>
                <p><i className="fa fa-phone"></i>  +54 1131987501</p>
                <p><i className="fa fa-location-dot"></i>  Elegant@gmail.com</p>
                <p><i className="fa fa-envelope"></i>  location</p>
            </div>
        </section>
    </main>
)
}

export default Contacto