import React from 'react'
import { render, screen } from '@testing-library/react'
import Content from './Content'

describe('<Content>', () => {
  test('should mount', () => {
    const { container } = render(<Content />)
    expect(container.querySelector('Content')).toBeDefined()
  })
})
