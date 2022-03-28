import { UsersType } from './08';

let users: UsersType = {};

beforeEach(() => {
  users = {
    '101': { id: 101, name: 'Yar' },
    '121': { id: 121, name: 'Nata' },
    '10': { id: 10, name: 'Valera' },
    '1': { id: 1, name: 'Katya' },
  };
});

test('should update corresponding user', () => {
  users[1].name = 'Kate';

  expect(users[1].name).toBe('Kate');
  expect(users[1]).toEqual({ id: 1, name: 'Kate' });
});

test('should delete corresponding user', () => {
	delete users[1];

  expect(users[1]).toBeUndefined();
});
