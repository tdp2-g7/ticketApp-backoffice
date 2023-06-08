import { IEvent } from '../types/event.types';

export enum State {
  ACTIVE = 1,
  CANCELLED = 2,
  BLOCKED = 3,
}

export const handleStateText = (
  event: IEvent,
) => {
  let startTime: any;
  if (event.startTime) {
    startTime = new Date(event.startTime);
  }

  const endEvent = event.endTime
    ? new Date(event.endTime)
    : new Date(startTime?.setHours(startTime.getHours() + 1));
  const startEvent = new Date(startTime?.setHours(startTime.getHours() - 2));

  if (event.state === State.BLOCKED) {
    return 'Bloqueado';
  }
  if (event.state === State.CANCELLED) {
    return 'Cancelado';
  }
  if (event.state === State.ACTIVE) {
    if (startEvent < new Date() && new Date() < endEvent) {
      return 'En curso';
    }
    if (endEvent < new Date()) {
      return 'Finalizado';
    }
    if (startEvent > new Date()) {
      return 'Activo';
    }
  }
  return 'null';
};
