import { ReactElement } from "react";

export const cond = (condition: boolean, content: ReactElement) => {
  return condition ? content : null
}

export const clamp = (curr: number, min: number, max: number) => {
  if (curr > max) {
    return max
  } else if (curr < min) {
    return min
  }
  return curr
}

export const floor = v => Math.floor(v)

export const randRange = (min, max) => Math.random() * (max - min) + min