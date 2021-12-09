import { ReactElement } from "react";

export const cond = (condition: boolean, content: ReactElement) => {
  return condition ? content : null
}
