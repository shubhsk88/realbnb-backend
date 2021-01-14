export const randomInt = (min = 0, max: number) => {
  return Math.trunc(Math.random() * (max - min + 1) + min)
}

export const randomSelection = (
  array: any[],
  size = array.length,
): any | any[] => {
  const arr = [...array]
  const selection = Array(size)

  for (let len = arr.length - 1; len >= 0; len--) {
    const roll = arr.splice(randomInt(0, len), 1)[0]
    selection[len] = roll
  }

  return size <= 1 ? selection[0] : selection
}

const shuffle = (array: any[]) => {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
