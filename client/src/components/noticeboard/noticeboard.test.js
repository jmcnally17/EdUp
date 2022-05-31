import React from 'react';
import "@testing-library/jest-dom";
import Noticeboard from './noticeboard';
import { render, screen, cleanup } from '@testing-library/react'
 
afterEach(cleanup)
 
test('renders a form on the page', () => {
  render(<Noticeboard />);
  expect(screen.getByText('School Notice Board')).toBeInTheDocument()
  expect(screen.getByText('Add New Notice').closest('a')).toHaveAttribute('href', '/noticeboard/new')
})

