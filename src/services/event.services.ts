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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getMetricsWithoutFinishDate(startDate: Date): Promise<any> {
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getMetricsAccreditedClients(data: any): Promise<any> {
  // const response = await get(`${EVENTS_API_URL}/event-report/event/${eventId}/users`);
  const response = {
    bar_chart: [
      {
        name: 1,
        cantidad: 75,
      },
      {
        name: 2,
        cantidad: 15,
      },
      {
        name: 3,
        cantidad: 40,
      },
      {
        name: 4,
        cantidad: 90,
      },
      {
        name: 5,
        cantidad: 10,
      },
      {
        name: 6,
        cantidad: 35,
      },
      {
        name: 7,
        cantidad: 70,
      },
      {
        name: 8,
        cantidad: 20,
      },
      {
        name: 9,
        cantidad: 80,
      },
      {
        name: 10,
        cantidad: 55,
      },
      {
        name: 11,
        cantidad: 25,
      },
      {
        name: 12,
        cantidad: 90,
      },
    ],
  };
  return response;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getMetricsFullInterval(data: any): Promise<any> {
  // const response = await get(`${EVENTS_API_URL}/event-report/event/${eventId}/users`);
  const response = {
    events_created: [
      {
        name: '01/04',
        cantidad: 76,
      },
      {
        name: '06/04',
        cantidad: 12,
      },
      {
        name: '12/04',
        cantidad: 43,
      },
      {
        name: '18/04',
        cantidad: 88,
      },
      {
        name: '24/04',
        cantidad: 5,
      },
      {
        name: '30/04',
        cantidad: 32,
      },
      {
        name: '04/05',
        cantidad: 71,
      },
      {
        name: '10/05',
        cantidad: 17,
      },
      {
        name: '16/05',
        cantidad: 94,
      },
      {
        name: '22/05',
        cantidad: 53,
      },
    ],
  };
  return response;
}
