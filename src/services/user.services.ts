import { AxiosResponse } from 'axios';
import { USERS_API_URL, EVENTS_API_URL } from '../configs/configs';
import { ILoginFormData } from '../views/Login/types';
import { get, post } from './api';

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
  console.log('🚀 ~ changeBlock ~ organizerId:', organizerId);
  // const response = await post(`${USERS_API_URL}/users/organizers/block/${organizerId}`);
  // return response;
  return organizerId;
}

export async function getAllReports(userId: string): Promise<AxiosResponse> {
  const response = await get(`${EVENTS_API_URL}/event-report/${userId}`);
  return response.data;
}

export async function getOrganizerReports(data: any): Promise<AxiosResponse> {
  let url = `${USERS_API_URL}/organizer-report/all-reports?page=${data.page}&offset=${data.offset}`;

  /* eslint-disable */
  data.name && (url += `&name=${data.name}`);
  data.from_date && (url += `&from_date=${data.from_date}`);
  data.to_date && (url += `&to_date=${data.to_date}`);
  /* eslint-enable */

  const response = await get(url);

  return response.data;
}
