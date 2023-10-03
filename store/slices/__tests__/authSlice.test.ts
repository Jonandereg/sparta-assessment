import authReducer, { login, logout } from "../authSlice";

describe("auth reducer", () => {
  const initialState = {
    token: null,
    isAuthenticated: null,
  };

  it("should handle initial state", () => {
    expect(authReducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle login", () => {
    const token = "sample-token";
    expect(authReducer(initialState, login(token))).toEqual({
      token: "sample-token",
      isAuthenticated: true,
    });
  });

  it("should handle logout", () => {
    expect(
      authReducer({ token: "sample-token", isAuthenticated: true }, logout()),
    ).toEqual({
      token: null,
      isAuthenticated: false,
    });
  });
});
