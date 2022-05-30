import React from 'react';
import "@testing-library/jest-dom";
import Login from './login';
import { render, screen, cleanup } from '@testing-library/react'
 
afterEach(cleanup)
 
test('renders a form on the page', () => {
  render(<Login />);
  expect(screen.getByText('Email')).toBeInTheDocument()
  expect(screen.getByText('Password')).toBeInTheDocument()
  expect(screen.getByRole('button')).toBeInTheDocument()
})