import React from 'react'
import { render, screen } from '@testing-library/react'
import ArtPiece from './ArtPiece'

describe('<ArtPiece>', () => {
  test('should mount', () => {
    const { container } = render(<ArtPiece piece={{}} />)
    expect(container.querySelector('ArtPiece')).toBeDefined()
  })
})
