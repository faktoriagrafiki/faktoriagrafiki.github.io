import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Nav from './Nav'

describe('<Nav>', () => {
  test('should mount', () => {
    const { container } = render(<Nav />)
    expect(container.querySelector('Nav')).toBeDefined()
  })
  test('contact button should fire window scroll', () => {
    const { container } = render(<Nav />)
    const btn = container.querySelector('.Nav > span:last-child > label')
    expect(btn).toBeDefined()
    jest.spyOn(window, 'scrollTo')
    fireEvent.click(btn as HTMLElement)
    expect(window.scrollTo).toHaveBeenCalled()
    expect(window.scrollTo).toHaveBeenLastCalledWith({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })
  })
})
