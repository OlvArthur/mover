export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function SignInSucess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCESS',
    payload: { token, user },
  };
}

export function SignFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
