import { AxiosResponse } from 'axios';
import { EVENTS_API_URL } from '../configs/configs';
import { get } from './api';

export async function getAllEvents(): Promise<AxiosResponse> {
  const response = await get(`${EVENTS_API_URL}/events`);
  return response.data;
}

export async function getEventsFilteredBy(data: any): Promise<any> {
  let url = `${EVENTS_API_URL}/events/filteredBy?page=${data.page}&offset=${data.offset}`;

  /* eslint-disable */
  data.organizerId && (url += `&userId=${data.organizerId}`);
  /* eslint-enable */
  const response = await get(url);
  return response;
}
