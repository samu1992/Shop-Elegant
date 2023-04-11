import React from 'react';
import Items from '../Items/Items';


function Productos({ productos }) {
    return (
        <>
            {productos.map((producto) => (
                <Items key={producto.id} productos={producto}></Items>
            ))}
        </>
    );
}


export default Productos;