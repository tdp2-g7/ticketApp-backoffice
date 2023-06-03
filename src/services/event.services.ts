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

export async function changeBlockEvent(
  eventId: string,
): Promise<AxiosResponse> {
  const response = await patch(`${EVENTS_API_URL}/events/block/${eventId}`);
  return response;
}

export async function getAllReports(eventId: string): Promise<AxiosResponse> {
  const response = await get(
    `${EVENTS_API_URL}/event-report/event/${eventId}/users`,
  );
  return response.data;
}

export async function getMetricsWithoutFinishDate(): Promise<any> {
  // const response = await get(`${EVENTS_API_URL}/event-report/event/${eventId}/users`);
  const response = {
    pie: [
      { name: 'Bloqueado', value: 3 },
      { name: 'Cancelado', value: 9 },
      { name: 'En curso', value: 20 },
      { name: 'Finalizado', value: 25 },
      { name: 'Activo', value: 40 },
      { name: 'Borrador', value: 23 },
    ],
    blockedOrganizers: [
      { name: '1-4', value: 2 },
      { name: '5-8', value: 4 },
      { name: '9-12', value: 8 },
      { name: '13-16', value: 10 },
      { name: '17-20', value: 12 },
      { name: '21-24', value: 3 },
      { name: '25-28', value: 2 },
      { name: '29-32', value: 1 },
    ],
  };
  return response;
}
