import api from './api';

interface Response {
  token: string;
}

interface Request {
  email: string;
  password: string;
}
export function signIn(request: Request): Promise<Response> {
  return new Promise((resolve, reject) =>
    api
      .post('api-token-auth/', request)
      .then(({data}) => {
        resolve(data);
      })
      .catch(error => reject(error.response)),
  );
}

export interface SignInRequest {
  email: string;
  password: string;
}
