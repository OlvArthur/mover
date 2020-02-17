export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function SignInSucess(user) {
  return {
    type: '@auth/SIGN_IN_SUCESS',
    payload: { user },
  };
}

export function SignFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
