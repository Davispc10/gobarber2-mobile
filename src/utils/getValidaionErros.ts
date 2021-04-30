import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: string;
}

export default function getvalidationErrors(err: ValidationError): IErrors {
  const validationErros: IErrors = {};

  err.inner.forEach(error => {
    if (error.path) validationErros[error.path] = error.message;
  });

  return validationErros;
}
