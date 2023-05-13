export enum State {
  ACTIVE = 1,
  CANCELLED = 2,
  BLOCKED = 3,
}

export const handleStateText = (state: number) => {
  if (state === State.BLOCKED) {
    return 'Bloqueado';
  }
  if (state === State.CANCELLED) {
    return 'Cancelado';
  }
  if (state === State.ACTIVE) {
    return 'Activo';
  }
  return 'null';
};
