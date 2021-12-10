import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('<Footer>', () => {
  test('should mount', () => {
    const { container } = render(<Footer />)
    expect(container.querySelector('Footer')).toBeDefined()
  })
})
