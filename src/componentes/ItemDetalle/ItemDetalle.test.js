import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemDetalle from './ItemDetalle';

describe('ItemDetalle', () => {
    test('debe recibir correctamente la propiedad "detalleProduct"', () => {
        const detalleProduct = {
            nombre: 'Producto de ejemplo',
            imagen: 'imagen.jpg',
            precio: '50',
            stock: 10
        };
        
        const { getByText } = render(<ItemDetalle detalleProduct={detalleProduct} />);
        expect(getByText(detalleProduct.nombre)).toBeInTheDocument();
        expect(getByText(detalleProduct.precio)).toBeInTheDocument();
        expect(getByText(`En Stock: ${detalleProduct.stock}`)).toBeInTheDocument();
    });
});