import { USERS_API_URL } from '../configs/configs';
import { ILoginFormData } from '../views/Login/types';
import { get, post } from './api';

export async function login(formData: ILoginFormData): Promise<any> {
  const response = await post(`${USERS_API_URL}/users/administrator/login`, formData);
  return response;
}

export async function getAllUsers(): Promise<any> {
  const response = await get(`${USERS_API_URL}/users/clients`);
  return response.data;
}

export async function getAllOrganizers(): Promise<any> {
  const response = await get(`${USERS_API_URL}/users/organizers`);
  return response.data;
}
