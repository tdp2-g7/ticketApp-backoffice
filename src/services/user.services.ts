import { AxiosResponse } from 'axios';
import { USERS_API_URL } from '../configs/configs';
import { ILoginFormData } from '../views/Login/types';
import { get, post } from './api';

export async function login(formData: ILoginFormData): Promise<AxiosResponse> {
  const response = await post(`${USERS_API_URL}/users/administrator/login`, formData);
  return response;
}

export async function getAllUsers(): Promise<AxiosResponse> {
  const response = await get(`${USERS_API_URL}/users/clients`);
  return response;
}

export async function getAllOrganizers(): Promise<AxiosResponse> {
  const response = await get(`${USERS_API_URL}/users/organizers`);
  return response;
}

export async function changeBlock(organizerId: string): Promise<any> {
  console.log('🚀 ~ changeBlock ~ organizerId:', organizerId);
  // const response = await post(`${USERS_API_URL}/users/organizers/block/${organizerId}`);
  // return response;
  return organizerId;
}
