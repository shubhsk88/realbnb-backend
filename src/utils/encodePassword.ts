import bcrypt from 'bcryptjs'

export const encodePassword = (password: string) => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  return hash
}

export const comparePassword = (inputPassword: string, hash: string) => {
  return bcrypt.compareSync(inputPassword, hash)
}
