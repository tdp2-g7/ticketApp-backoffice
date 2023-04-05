import { AxiosResponse } from 'axios';
import { ILoginFormData } from '../views/Login/types';
import { post } from './api';

export async function login(formData: ILoginFormData): Promise<AxiosResponse> {
  const response = await post('/user/login', formData);
  return response;
}

export async function getAllUsers(): Promise<any> {
  // const response = await get('events');
  const data: any = [
    {
      name: 'Manuel Longo',
      number_of_events: 5,
    },
    {
      name: 'Lourdes Lopez Nastri',
      number_of_events: 1,
    },
    {
      name: 'Luciano Palonsky',
      number_of_events: 25,
    },
    {
      name: 'Tomas Caballero',
      number_of_events: 3,
    },
  ];
  return data;
}
