export const required: Validator = (name, value) => {
  if (value) {
    return '';
  }

  return `The ${name} is required.`;
};

export const email: Validator = (name, value) => {
  // eslint-disable-next-line max-len
  // eslint-disable-next-line no-control-regex
  const URL_REGEXP = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

  return URL_REGEXP.test(value as string)
    ? ''
    : `The ${name} should be a valid Email (Example: jhon@example.com).`;
};

export const phone: Validator = (name, value) => {
  const URL_REGEXP = /^[+]{0,1}380([0-9]{9})$/;

  return URL_REGEXP.test(value as string)
    ? ''
    : `The ${name} should be a valid Phone number (Example: +380955388485).`;
};

export const minLength = (length: number): Validator => {
  return (name, value) => {
    return !value || ((value as string).length >= length)
      ? ''
      : `The ${name} should have at least ${length} characters.`;
  };
};

export const maxLength = (length: number): Validator => {
  return (name, value) => {
    return !value || ((value as string).length <= length)
      ? ''
      : `The ${name} should have maximum ${length} characters.`;
  };
};

export const maxSize = (size: number): Validator => {
  return (name, value) => {
    return !value || ((value as File)?.size < (size * (1024 ** 2)))
      ? ''
      : `The ${name} should have maximum ${size} Mb.`;
  };
};

export const photoFormat: Validator = (name, value) => {
  const AVAILABLE_FORMATS = ['jpeg', 'jpg'];
  const errorMessage = `The ${name} format must be ${AVAILABLE_FORMATS.join('/')} type.`;

  return AVAILABLE_FORMATS.some((item) => (value as File)?.type === `image/${item}`)
    ? ''
    : errorMessage;
};
