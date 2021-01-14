export const nonNullable = (obj: object):object => (
  Object.fromEntries(Object.entries(obj).filter(([_, v]) => v))
)
