import { AxiosResponse } from 'axios';
import { USERS_API_URL, EVENTS_API_URL } from '../configs/configs';
import { ILoginFormData } from '../views/Login/types';
import { get, patch, post } from './api';

export async function login(formData: ILoginFormData): Promise<AxiosResponse> {
  const response = await post(`${USERS_API_URL}/users/administrator/login`, formData);
  return response;
}

export async function getAllUsers(): Promise<AxiosResponse> {
  const response = await get(`${EVENTS_API_URL}/event-report/clients-reports-amount`);

  return response;
}

export async function getAllOrganizers(): Promise<AxiosResponse> {
  const response = await get(`${USERS_API_URL}/users/organizers`);
  return response;
}

export async function changeBlock(organizerId: string): Promise<any> {
  const response = await patch(`${USERS_API_URL}/users/block/${organizerId}`);
  return response;
}

export async function getAllReports(userId: string): Promise<AxiosResponse> {
  const response = await get(`${EVENTS_API_URL}/event-report/${userId}`);
  return response.data;
}
