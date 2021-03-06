import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });

  it("should store token upon login", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/",
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "some-token",
          userId: "some-userid",
        }
      )
    ).toEqual({
      token: "some-token",
      userId: "some-userid",
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });

  it("should store error upon error in login", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/",
        },
        {
          type: actionTypes.AUTH_FAIL,
          error: "some-error",
        }
      )
    ).toEqual({
      token: null,
      userId: null,
      error: "some-error",
      loading: false,
      authRedirectPath: "/",
    });
  });
});
