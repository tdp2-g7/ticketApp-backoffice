export const handleTime = (time: Date) => {
  let minutes;
  let hours;
  if (new Date(time).getMinutes() < 10) {
    minutes = `0${new Date(time).getMinutes()}`;
  } else {
    minutes = `${new Date(time).getMinutes()}`;
  }
  if (new Date(time).getHours() < 10) {
    hours = `0${new Date(time).getHours()}`;
  } else {
    hours = `${new Date(time).getHours()}`;
  }
  return `${hours}:${minutes}`;
};

export const handleDate = (time: Date) => new Date(time).toLocaleDateString();
