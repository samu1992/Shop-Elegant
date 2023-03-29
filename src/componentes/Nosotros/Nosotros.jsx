
const Nosotros = () => {
    return (
        <main className='container_Nosotros'>
            <section className='nosotros_Texto'>
                <div className='texto'>
                    <h2>Nosotros</h2>
                    <p className='p-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas eleifend, lacus nec hendrerit blandit,
                        nisi sapien commodo nisl, non ultricies turpis velit non enim.</p>
                    <p className='p-2'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                        ac turpis egestas. Sed euismod lacus vel neque rhoncus, in mattis felis
                        laoreet. Donec lobortis, sem vel molestie eleifend, metus tellus bibendum enim,
                        vel laoreet purus quam ac lectus. Sed vitae diam diam. Nulla facilisi.
                        Duis nec dapibus tortor, non pulvinar leo. Nam sagittis interdum ante,
                        non dapibus nibh malesuada ut. Sed non bibendum enim, ut tincidunt felis.
                        Vivamus blandit mauris vel eros aliquet bibendum. Vivamus at mauris vel
                        velit malesuada aliquet eget eu elit. </p>
                </div>
                <div id='img'><img src='../images/nosotros.jpg' alt='error al cargar la imagen del local' /></div>
            </section>
            <section className='contenedor_Valores'>
                <h2>Nuestros Valores</h2>
                <article className='valores'>
                    <section>
                        <div>
                            <h4>Transparencia</h4>
                            <p>Sed non bibendum enim, ut tincidunt felis.
                                Vivamus blandit mauris vel eros aliquet bibendum. Vivamus at mauris vel
                                velit malesuada aliquet eget eu elit.</p>
                        </div>
                        <div>
                            <h4>Flexibilidad</h4>
                            <p>Sed non bibendum enim, ut tincidunt felis.
                                Vivamus blandit mauris vel eros aliquet bibendum. Vivamus at mauris vel
                                velit malesuada aliquet eget eu elit.</p>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h4>Confianza</h4>
                            <p>Sed non bibendum enim, ut tincidunt felis.
                                Vivamus blandit mauris vel eros aliquet bibendum. Vivamus at mauris vel
                                velit malesuada aliquet eget eu elit.</p>
                        </div>
                        <div>
                            <h4>Calidad</h4>
                            <p>Sed non bibendum enim, ut tincidunt felis.
                                Vivamus blandit mauris vel eros aliquet bibendum. Vivamus at mauris vel
                                velit malesuada aliquet eget eu elit.</p>
                        </div>
                    </section>
                </article>
            </section>
        </main>
    )
}

export default Nosotros