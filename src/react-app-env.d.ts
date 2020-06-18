// eslint-disable-next-line
/// <reference types="react-scripts" />

interface ResponseUsers {
  success: boolean;
  message?: string;
  page: number;
  total_pages: number;
  total_users: number;
  count: number;
  links: {
    next_url: string | null;
    prev_url: string | null;
  };
  users: User[];
}

interface ResponseUser {
  success: boolean;
  message?: string;
  fails?: {
    user_id: string[];
  };
  user: User;
}

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: string;
  registration_timestamp: number;
  photo: string;
}

interface ResponsePositions {
  success: boolean;
  message: string;
  positions: Profession[];
}

interface Profession {
  id: string;
  name: string;
}

interface Token {
  success: boolean;
  token: string;
}

interface SignUpData extends FormData {
  position_id?: string;
  name?: string;
  email?: string;
  phone?: string;
  photo?: File;
}

interface Sections {
  [key: string]: Section;
}

interface Section {
  id: string;
  name: string;
  title: string;
  descr?: string;
}

interface SignUpFields {
  [key: string]: FormField;
}

interface FormField {
  id: string;
  name: string;
  type: InputType;
  label: string;
  placeholder?: string;
  pattern?: string;
  autoComplete?: string;
  validators?: Validator[];
}

type Validator = (name: string, value: string | File | null) => string;
type WrapperType = 'primary' | 'secondary';
type ButtonType = 'button' | 'submit' | 'reset';
type InputType = 'text' | 'number' | 'email' | 'tel' | 'url' | 'password' | 'radio' | 'file';
type FormField = 'name' | 'email' | 'phone' | 'position' | 'photo';
type SignUpStatus = '' | 'success' | 'failure';
