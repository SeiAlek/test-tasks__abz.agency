export const API_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';
export const API_URL_USERS = `${API_URL}/users?page=1&count=12`;
export const API_URL_POSITIONS = `${API_URL}/positions`;
export const API_URL_TOKEN = `${API_URL}/token`;
export const API_URL_ADD_USER = `${API_URL}/users`;

export async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const json = await response.json();

  return json;
}

export async function postData(url: string, token: string, formData: SignUpData) {
  const response = await fetch(url, {
    method: 'POST',
    body: formData,
    headers: {
      Token: token,
    },
  });
  const json = await response.json();

  return json;
}
