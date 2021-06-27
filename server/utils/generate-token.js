import jwt from 'jsonwebtoken';

// user token generated
export const generateToken = (user, secret, expiresIn) => {
  const { id, fullName, email } = user;

  return jwt.sign({ id, fullName, email }, secret, { expiresIn });
};