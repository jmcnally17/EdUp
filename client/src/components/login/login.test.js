/**
 * @jest-environment jsdom
 */

import React from 'react';
// import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import "@testing-library/jest-dom";
// import Login from './login'

// it('loads and displays greeting', () => {
//   render(<Login />);
//   expect('hi').toBeInTheDocument();
// });

import { render, screen, cleanup } from '@testing-library/react'
import {Login} from './login.js'

afterEach(cleanup)

it('renders on the page', () => {
  render(<Login />);
  expect(screen.getByText('hi')).toBeInTheDocument()
})