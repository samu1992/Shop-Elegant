import React from 'react';
import { render } from '@testing-library/react';
import Nosotros from './Nosotros';

test('muestra el componente', () => {

  const { getByTestId } = render(
    <Nosotros />
  );

  const nosotros = getByTestId('nosotros');
});
