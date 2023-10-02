type TokenObject = {
  token: string;
  expirationTime: number;
};

export const fakeLogin = (username: string, password: string): TokenObject => {
  const token = `${username}_${password}_fake_token`;
  const expirationTime = new Date().getTime() + 10 * 60 * 1000; // 10 minutes from now

  const tokenObject = {
    token,
    expirationTime,
  };
  return tokenObject;
};
