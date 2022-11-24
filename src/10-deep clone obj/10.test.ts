import {
  addJob,
  addNewBooks,
  changeLaptop,
  CompaniesType,
  getHaircut,
  moveUser,
  removeBook,
  replaceBook,
  updateCompanyTitle,
  UserBooksType,
  UserJobsType,
  UserType,
} from './10';

let user: UserType & UserBooksType & UserJobsType;

beforeEach(() => {
  user = {
    name: 'Yar',
    hair: 32,
    address: {
      city: 'Minsk',
    },
    laptop: {
      brand: 'Asus',
      title: 'VivoBook',
    },
    books: ['html', 'css', 'js'],
    jobs: [
      { id: 1, title: 'Epam' },
      { id: 2, title: 'Yandex' },
    ],
  };
});

test('user make new hair style', () => {
  const prettyUser = getHaircut(user, 2);
  const prettyUser2 = getHaircut(user, 4);

  expect(user.hair).toBe(32);
  expect(prettyUser.hair).toBe(16);
  expect(user).not.toBe(prettyUser);
  expect(user.address).toEqual(prettyUser.address);

  expect(user.hair).toBe(32);
  expect(prettyUser2.hair).toBe(8);
  expect(user).not.toBe(prettyUser2);
  expect(user.address).toEqual(prettyUser2.address);
});

test('user moved to another city', () => {
  const movedUser = moveUser(user, 'Kiev');

  expect(user).not.toBe(movedUser);
  expect(user.address).not.toBe(movedUser.address);
  expect(user.address.city).toBe('Minsk');
  expect(movedUser.address.city).toBe('Kiev');
  expect(user.laptop).toBe(movedUser.laptop);
});

test('upgrade user`s laptop', () => {
  const newLaptop = { brand: 'Dell', title: 'Alienware ' } as Partial<UserType>;
  const upgradeUser = changeLaptop(user, newLaptop);

  expect(user).not.toBe(upgradeUser);
  expect(user.laptop).not.toBe(upgradeUser.laptop);
  expect(user.laptop?.brand).toBe('Asus');
  expect(user.laptop?.title).toBe('VivoBook');
  expect(user.address).toBe(upgradeUser.address);
});

test('add new books to user', () => {
  const newBooks = ['react', 'ts'] as string[];
  const upgradeUser = addNewBooks(user, newBooks);

  expect(user).not.toBe(upgradeUser);
  expect(user.laptop).toBe(upgradeUser.laptop);
  expect(user.address).toBe(upgradeUser.address);
  expect(user.books).not.toBe(upgradeUser.books);
  expect(upgradeUser.books.length).toBe(5);
  expect(upgradeUser.books).toStrictEqual(['html', 'css', 'js', 'react', 'ts']);
});

test('replacement book in the user`s list', () => {
  const upgradeUser = replaceBook(user, 'html', 'vue');

  expect(user).not.toBe(upgradeUser);
  expect(user.laptop).toBe(upgradeUser.laptop);
  expect(user.address).toBe(upgradeUser.address);
  expect(user.books).not.toBe(upgradeUser.books);
  expect(upgradeUser.books.length).toBe(user.books.length);
  expect(upgradeUser.books).toStrictEqual(['vue', 'css', 'js']);
  expect(() => replaceBook(user, 'octopus', 'vue')).toThrow();
});

test('delete book in the user`s list', () => {
  const upgradeUser = removeBook(user, 'css');

  expect(user).not.toBe(upgradeUser);
  expect(user.laptop).toBe(upgradeUser.laptop);
  expect(user.address).toBe(upgradeUser.address);
  expect(user.books).not.toBe(upgradeUser.books);
  expect(upgradeUser.books.length).not.toBe(user.books.length);
  expect(upgradeUser.books).toStrictEqual(['html', 'js']);
});

test('add new job', () => {
  const upgradeUser = addJob(user, 'Google');

  expect(user).not.toBe(upgradeUser);
  expect(user.laptop).toBe(upgradeUser.laptop);
  expect(user.address).toBe(upgradeUser.address);
  expect(user.books).toBe(upgradeUser.books);
  expect(upgradeUser.jobs.length).not.toBe(user.jobs.length);
  expect(upgradeUser.jobs).toStrictEqual([
    { id: 1, title: 'Epam' },
    { id: 2, title: 'Yandex' },
    { id: 3, title: 'Google' },
  ]);
});

test('upgrade title job', () => {
  const companies = {
    'yar': [
      { id: 1, title: 'DeA' },
      { id: 2, title: 'Yandex' },
      { id: 3, title: 'Google' },
    ],
    'art': [
      { id: 1, title: 'Porta one' },
      { id: 2, title: 'EPAM' },
      { id: 3, title: 'Google' },
    ],
  };

	const upgradeCompanies:CompaniesType = updateCompanyTitle(companies, 'yar', 2, 'IT-Incubator');

	expect(upgradeCompanies).not.toBe(companies);
	expect(upgradeCompanies['art']).toBe(companies['art']);
	expect(upgradeCompanies['yar']).not.toBe(companies['yar']);
	expect(upgradeCompanies['yar'][1].title).toBe('IT-Incubator');
});
