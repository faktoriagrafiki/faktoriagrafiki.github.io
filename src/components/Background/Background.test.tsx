import React from 'react'
import { render, screen } from '@testing-library/react'
import Background from './Background'

describe('<Background>', () => {
  test('should mount', () => {
    const { container } = render(<Background />)
    expect(container.querySelector('Background')).toBeDefined()
  })
})
