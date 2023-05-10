import { AxiosResponse } from 'axios';
import { EVENTS_API_URL } from '../configs/configs';
import { get } from './api';

export async function getEvents(): Promise<AxiosResponse> {
  const response = await get(`${EVENTS_API_URL}/event-report/reports-amount`);
  return response.data;
}

export async function getAllReports(userId: string): Promise<AxiosResponse> {
  // ESTE ENDPOINT TODAVIA NO EXISTE
  const response = await get(`${EVENTS_API_URL}/event-report/${userId}`);
  return response.data;
}
