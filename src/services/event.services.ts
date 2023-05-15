import { AxiosResponse } from 'axios';
import { EVENTS_API_URL } from '../configs/configs';
import { get, patch } from './api';

export async function getAllEvents(data: any): Promise<AxiosResponse> {
  let url = `${EVENTS_API_URL}/event-report/all-reports?page=${data.page}&offset=${data.offset}`;

  /* eslint-disable */
  data.title && (url += `&title=${data.title}`);
  data.from_date && (url += `&from_date=${data.from_date}`);
  data.to_date && (url += `&to_date=${data.to_date}`);
  /* eslint-enable */
  const response = await get(url);

  return response;
}

export async function getEventsFilteredBy(data: any): Promise<AxiosResponse> {
  let url = `${EVENTS_API_URL}/events/all-organizers-events?page=${data.page}&offset=${data.offset}`;

  /* eslint-disable */
  data.organizerId && (url += `&organizerId=${data.organizerId}`);
  /* eslint-enable */
  const response = await get(url);
  return response;
}

export async function changeBlockEvent(eventId: string): Promise<AxiosResponse> {
  const response = await patch(`${EVENTS_API_URL}/events/block/${eventId}`);
  return response;
}

export async function getAllReports(eventId: string): Promise<AxiosResponse> {
  const response = await get(`${EVENTS_API_URL}/event-report/event/${eventId}/users`);
  return response.data;
}
