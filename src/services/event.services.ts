import { AxiosResponse } from 'axios';
import { EVENTS_API_URL } from '../configs/configs';
import { get } from './api';

export async function getEvents(): Promise<AxiosResponse> {
  const response = await get(`${EVENTS_API_URL}/event-report/reports-amount`);

  console.log('//', response.data);

  return response.data;
}

export async function getAllReports(eventId: string): Promise<AxiosResponse> {
  const response = await get(`${EVENTS_API_URL}/event-report/event/${eventId}/users`);
  return response.data;
}
