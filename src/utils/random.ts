export const randomInt = (min = 0, max: number) => {
  return Math.trunc(Math.random() * (max - min + 1) + min)
}

export const randomSelection = (array: any[], size = array.length) => {
  const arr = [...array]
  const selection = Array(size)

  const iter = size < arr.length ? size : arr.length
  for (let i = 0; i < iter; i++) {
    const roll = arr.splice(randomInt(0, iter - 1 - i), 1)[0]
    selection[i] = roll
  }

  return size <= 1 ? selection[0] : selection
}

export const shuffle = (array: any[]): any[] => {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
