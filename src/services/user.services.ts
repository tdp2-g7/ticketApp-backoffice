import { ILoginFormData } from '../views/Login/types';

export async function login(formData: ILoginFormData): Promise<any> {
  console.log('🚀 ~ login ~ formData:', formData);
  // const response = await post('/users/administrator/login', formData);
  const response = { email: 'admin@admin.com', password: 'admin' };
  return response;
}

export async function getAllUsers(): Promise<any> {
  // const response = await get('events');
  const data: any = [
    {
      name: 'Manuel Longo',
    },
    {
      name: 'Lourdes Lopez Nastri',
    },
    {
      name: 'Luciano Palonsky',
    },
    {
      name: 'Tomas Caballero',
    },
  ];

  return data;
}

export async function getAllOrganizers(): Promise<any> {
  // const response = await get('events');
  const data: any = [
    {
      name: 'Organizador 1',
      number_of_events: 5,
    },
    {
      name: 'Organizador 2',
      number_of_events: 1,
    },
    {
      name: 'Organizador 3',
      number_of_events: 25,
    },
    {
      name: 'Organizador 4',
      number_of_events: 3,
    },
  ];

  return data;
}
