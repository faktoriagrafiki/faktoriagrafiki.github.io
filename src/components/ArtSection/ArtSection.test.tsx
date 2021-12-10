import React from 'react'
import { render, screen } from '@testing-library/react'
import ArtSection from './ArtSection'

describe('<ArtSection>', () => {
  test('should mount', () => {
    const { container } = render(<ArtSection art={{ pieces: [] }}/>)
    expect(container.querySelector('ArtSection')).toBeDefined()
  })
})
