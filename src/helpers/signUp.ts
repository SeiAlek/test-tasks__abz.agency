import * as validator from './validators';

export const SIGN_UP_FIELDS: SignUpFields = {
  name: {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'Your Name',
    autoComplete: 'name',
    validators: [
      validator.required,
      validator.minLength(2),
      validator.maxLength(60),
    ],
  },
  email: {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Your Email',
    autoComplete: 'email',
    validators: [
      validator.required,
      validator.email,
      validator.minLength(2),
      validator.maxLength(100),
    ],
  },
  phone: {
    id: 'phone',
    name: 'phone',
    type: 'tel',
    label: 'Phone number',
    placeholder: '+380 XX XXX XX XX',
    autoComplete: 'email',
    validators: [
      validator.required,
      validator.phone,
    ],
  },

  position: {
    id: 'position',
    name: 'position',
    type: 'radio',
    label: 'Select your position',
    validators: [
      validator.required,
    ],
  },

  photo: {
    id: 'photo',
    name: 'photo',
    type: 'file',
    label: 'Photo',
    placeholder: 'Upload your photo',
    validators: [
      validator.required,
      validator.maxSize(5),
      validator.photoFormat,
    ],
  },
};

export const SIGN_UP_STATUS = {
  success: {
    type: 'success',
    title: 'Congratulation!',
    message: 'You have successfully passed the registration',
    buttonText: 'Great',
  },
};
