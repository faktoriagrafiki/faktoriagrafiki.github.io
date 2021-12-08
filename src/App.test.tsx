import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App>', () => {
  test('should mount', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toHaveClass('App')
  })
})
