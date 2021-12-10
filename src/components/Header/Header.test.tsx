import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('<Header>', () => {
  test('should mount', () => {
    const { container } = render(<Header />)
    expect(container.querySelector('Header')).toBeDefined()
  })
})
