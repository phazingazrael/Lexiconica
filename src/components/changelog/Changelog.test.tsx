import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Changelog from './Changelog';

describe('<Changelog />', () => {
  test('it should mount', () => {
    render(<Changelog />);
    
    const changelog = screen.getByTestId('Changelog');

    expect(changelog).toBeInTheDocument();
  });
});