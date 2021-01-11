export interface Dictionary {
  [key: string]: string | undefined | null
}

export const nonNullable = (input: Dictionary) => {
  const obj: Dictionary = {}
  for (let key in input) {
    if (input[key]) obj[key] = input[key]
  }
  return obj
}
