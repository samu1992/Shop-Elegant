import { Button } from 'react-bootstrap';


const Contador = ({ setCantidad }) => {
    const agregar = () => {
        setCantidad((valor) => valor + 1)
    }
    const quitar = () => {
        setCantidad((valor) =>
            valor === 1 ? 1 : valor - 1
        );
    };
    return (
        <main className='container_amount'>
            <Button id='amount' variant='secondary' onClick={quitar}>-</Button>
            <Button id='amount' variant='secondary' onClick={agregar}>+</Button>
        </main>
    )
}

export default Contador