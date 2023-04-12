export const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

export const isTokenValid = (token: string) => {
  const decodedToken = parseJwt(token);
  if (!decodedToken) {
    return false;
  }
  const currentTime = Date.now() / 1000;
  const tokenValid = decodedToken.exp > currentTime;
  return tokenValid;
}