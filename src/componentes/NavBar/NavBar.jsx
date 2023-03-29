import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartProvider';
import { useState, useEffect } from 'react';


function Navbar() {
    const { cart } = useContext(CartContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [navbarClass, setNavbarClass] = useState('');
    const [enlaceActivo, setEnlaceActivo] = useState('inicio');

    function manejarClicEnlace(evento, id) {
        evento.preventDefault();
        setEnlaceActivo(id);
    }
    const Contador = () => {
        if (cart.length >= 1) {
            return <p><span className="contador">{cart.length}</span></p>;
        } else {
            return null;
        }
    };
    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 400) {
                setNavbarClass('scrolled');
            } else {
                setNavbarClass('');
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`container_nav ${navbarClass}`}>
            <ul className='container_nav__body__links'>
                <li id='inicio' className={enlaceActivo === 'inicio' ? 'enlace-activo' : ''} onClick={(evento) => manejarClicEnlace(evento, 'inicio')}><Link to="/">INICIO</Link></li>
                <li id='productos' className={enlaceActivo === 'productos' ? 'enlace-activo' : ''} onClick={(evento) => manejarClicEnlace(evento, 'productos')}><Link to="/productos">Productos</Link></li>
                <li id='contacto' className={enlaceActivo === 'contacto' ? 'enlace-activo' : ''} onClick={(evento) => manejarClicEnlace(evento, 'contacto')}><Link to="/contacto">Contacto</Link></li>
                <li id='nosotros' className={enlaceActivo === 'nosotros' ? 'enlace-activo' : ''} onClick={(evento) => manejarClicEnlace(evento, 'nosotros')}><Link to="/nosotros">Nosotros</Link></li>
            </ul>
            <i id='lines' className="fa fa-bars" onClick={() => setMenuOpen(!menuOpen)}></i>
            <nav className={`navbar--responsive ${menuOpen ? 'navbar--open' : 'navbar--closed'}`}>
                <h2>ELEGANT</h2>
                <ul className='container_links--responsive'>
                    <li id='inicio' className={enlaceActivo === 'inicio' ? 'enlace-activo' : ''} onClick={(evento) => manejarClicEnlace(evento, 'inicio')}><Link to="/">INICIO</Link></li>
                    <li id='productos' className={enlaceActivo === 'productos' ? 'enlace-activo' : ''} onClick={(evento) => manejarClicEnlace(evento, 'productos')}><Link to="/productos">Productos</Link></li>
                    <li id='contacto' className={enlaceActivo === 'contacto' ? 'enlace-activo' : ''} onClick={(evento) => manejarClicEnlace(evento, 'contacto')}><Link to="/contacto">Contacto</Link></li>
                    <li id='nosotros' className={enlaceActivo === 'nosotros' ? 'enlace-activo' : ''} onClick={(evento) => manejarClicEnlace(evento, 'nosotros')}><Link to="/nosotros">Nosotros</Link></li>
                </ul>
            </nav>
            <section className='container_nav__body__cart'>
                <Link className='links' to="/Carrito"><FontAwesomeIcon className='icon' icon={faCartShopping} /></Link>
                {Contador()}
            </section>
        </header>
    )
};

export default Navbar;