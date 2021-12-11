const toHistory = params => {
  const str = params.toString()
  window.history.replaceState({}, '', str ? `?${str}` : './')
}

export const getParam = (key: string) => {
  const params = new URLSearchParams(window.location.search)
  return params.get(key)
}

export const setParam = (key: string, value: string) => {
  const params = new URLSearchParams(window.location.search)
  params.set(key, value)
  toHistory(params)
}

export const deleteParam = (key: string) => {
  const params = new URLSearchParams(window.location.search)
  params.delete(key)
  toHistory(params)
}

export const clearParams = () => {
  window.history.replaceState({}, '', './')
}