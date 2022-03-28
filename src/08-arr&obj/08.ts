export type UsersType = {
  [key: string]: { id: number; name: string };
};
type UsersArrayType = {
  id: number;
  name: string;
};

export const usersArray2 = ['Yar', 'Nata', 'Valera', 'Katya'];

export const usersObj = {
  '0': 'Yar',
  '1': 'Nata',
  '2': 'Valera',
  '3': 'Katya',
};

export const users: UsersType = {
  '101': { id: 101, name: 'Yar' },
  '121': { id: 121, name: 'Nata' },
  '10': { id: 10, name: 'Valera' },
  '1': { id: 1, name: 'Katya' },
};

export const usersArray: UsersArrayType[] = [
  { id: 101, name: 'Yar' },
  { id: 121, name: 'Nata' },
  { id: 10, name: 'Valera' },
  { id: 1, name: 'Katya' },
];

const user = { id: 101, name: 'Igor' };

usersArray.find((el) => el.id === 1);
console.log(users[1]);

users[user.id] = user;
delete users[user.id];
users[user.id].name = 'Pall';