import React, {
  useCallback, useEffect, useReducer, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_FIELDS, USER_DATA_DEFAULT } from '../../helpers';
import * as api from '../../helpers/api';
import * as store from '../../store';
import * as scrollAction from '../../store/scroll';
import { ButtonPrimary } from '../Button';
import errorReducer, * as errors from './errorReducer';
import { InputFile } from './InputFile';
import { InputRadio } from './InputRadio';
import { InputText } from './InputText';
import { PopUp } from './PopUp';
import './SignUp.scss';

export const SignUp = () => {
  const dispatch = useDispatch();
  const scrollStatus = useSelector(store.getScrollStatus);
  const professionList = useSelector(store.getPositions);
  const [newUserData, setNewUserData] = useState({ ...USER_DATA_DEFAULT });
  const [serverErrorMessage, setServerErrorMessage] = useState('');
  const [errorMessages, setErrorMessages] = useReducer(errorReducer, errors.initialErrors);
  const [signUpStatus, setSignUpStatus] = useState<SignUpStatus>('');

  const getToken = useCallback(() => {
    api.getData<Token>(api.API_URL_TOKEN)
      .then((response: Token) => {
        localStorage.setItem('TT-token', response.token);
      })
      .catch((error) => store.setErrorMessage(error));
  }, []);

  useEffect(() => getToken(), [getToken]);

  const validateField = (name: string, value: string | File | null) => {
    const allErrorMessages = SIGN_UP_FIELDS[name].validators?.map(
      (validator: Validator) => validator(name, value),
    ).filter(Boolean) || [''];

    setErrorMessages(errors.addError(name, allErrorMessages[0]));

    return Boolean(allErrorMessages[0]);
  };

  const handleFailureResponse = (message: string) => {
    setServerErrorMessage(message);
    setSignUpStatus('failure');
    dispatch(scrollAction.setScrollHide());
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem('TT-token');
    const formData: SignUpData = new FormData();

    if (!token) {
      getToken();
    }

    let hasError = false;

    Object.entries(newUserData).forEach(([fieldName, fieldValue]) => {
      const isInvalid = validateField(fieldName, fieldValue);

      if (isInvalid) {
        hasError = true;
      }
    });

    if (hasError) {
      return;
    }

    formData.set('position_id', newUserData.position);
    formData.set('name', newUserData.name);
    formData.set('email', newUserData.email);
    formData.set('phone', newUserData.phone);
    formData.set('photo', newUserData.photo!);

    api.postData(api.API_URL_ADD_USER, token!, formData)
      .then(response => {
        if (!response.success) {
          handleFailureResponse(response?.message || 'Something went wrong...');

          return response;
        }

        return api.getData<ResponseUser>(`${api.API_URL}/users/${response.user_id}`);
      })
      .then(response => {
        if (!response.success) {
          handleFailureResponse(response?.message || 'Something went wrong...');

          return response;
        }

        dispatch(store.userActions.addUsers([response.user]));
        setSignUpStatus('success');
        dispatch(scrollAction.setScrollHide());
        setNewUserData({ ...USER_DATA_DEFAULT });

        return response;
      });
  };

  const handleValidate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    validateField(name, value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      type,
      name,
      id,
      value,
      files,
    } = e.target;

    switch (type) {
      case 'text':
      case 'tel':
      case 'email':
        setNewUserData({
          ...newUserData,
          [name]: value,
        });
        break;

      case 'radio':
        setNewUserData({
          ...newUserData,
          [name]: id,
        });
        break;

      case 'file':
        if (files && files[0]) {
          setNewUserData({
            ...newUserData,
            [name]: files[0],
          });
        }

        break;

      default:
        break;
    }
  };

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;

    setErrorMessages(errors.removeError(name));
  };

  const handlePopUpClose = () => {
    setSignUpStatus('');
    setServerErrorMessage('');
    dispatch(scrollAction.setScrollShow());
  };

  return (
    <div className="SignUp">
      <form onSubmit={submitForm} noValidate>

        <InputText
          fieldSettings={SIGN_UP_FIELDS.name}
          value={newUserData.name}
          error={errorMessages.name}
          handleChange={handleChange}
          handleBlur={handleValidate}
          handleFocus={handleFocus}
        />

        <InputText
          fieldSettings={SIGN_UP_FIELDS.email}
          value={newUserData.email}
          error={errorMessages.email}
          handleChange={handleChange}
          handleBlur={handleValidate}
          handleFocus={handleFocus}
        />

        <InputText
          fieldSettings={SIGN_UP_FIELDS.phone}
          value={newUserData.phone}
          error={errorMessages.phone}
          handleChange={handleChange}
          handleBlur={handleValidate}
          handleFocus={handleFocus}
        />

        <InputRadio
          fieldSettings={SIGN_UP_FIELDS.position}
          positionId={newUserData.position}
          professionList={professionList}
          error={errorMessages.position}
          handleChange={handleChange}
          handleFocus={handleFocus}
        />

        <InputFile
          fieldSettings={SIGN_UP_FIELDS.photo}
          value={newUserData.photo}
          error={errorMessages.photo}
          handleChange={handleChange}
          handleFocus={handleFocus}
        />

        <ButtonPrimary
          text="Sign up now"
          className="SignUp__Button"
          handleClick={submitForm}
        />
      </form>
      {signUpStatus === 'success' && !scrollStatus && (
        <PopUp
          title="Congratulation!"
          message="You have successfully passed the registration"
          buttonText="Great"
          handleClick={handlePopUpClose}
        />
      )}

      {signUpStatus === 'failure' && !scrollStatus && (
        <PopUp
          title="Oops!"
          message={serverErrorMessage}
          buttonText="Close"
          handleClick={handlePopUpClose}
        />
      )}
    </div>
  );
};
