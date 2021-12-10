import '@testing-library/react'
import { clamp, cond, randRange } from './util'

describe('cond', () => {
  test('should return the component on a truthy condition', () => {
    const component = <h1>TEST</h1>
    const output = cond(true, component)
    expect(output).toBe(component)
  })
  test('should return null on a falsy condition', () => {
    const output = cond(false, <h1>TEST</h1>)
    expect(output).toBeFalsy()
  })
})

describe('clamp', () => {
  test('should return the value if is\'s between min and max', () => {
    const output = clamp(8, 5, 10)
    expect(output).toEqual(8)
  })
  test('should return min if the value is lower', () => {
    const output = clamp(2, 5, 10)
    expect(output).toEqual(5)
  })
  test('should return max if the value is higher', () => {
    const output = clamp(12, 5, 10)
    expect(output).toEqual(10)
  })
})

describe('randRange', () => {
  test('returned values should fall in expected range', () => {
    const min = 10
    const max = 20
    for (let i = 0; i < 10000; i++) {
      const output = randRange(min, max)
      expect(output).toBeGreaterThanOrEqual(min)
      expect(output).toBeLessThan(max)
    }
  })
})
