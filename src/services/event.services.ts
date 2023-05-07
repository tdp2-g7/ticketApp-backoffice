import { AxiosResponse } from 'axios';
import { EVENTS_API_URL } from '../configs/configs';
import { get } from './api';

export async function getEvents(): Promise<AxiosResponse> {
  const response = await get(`${EVENTS_API_URL}/events`);
  return response.data;
}
