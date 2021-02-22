import { HouseType, governmentBuildingsType } from '../02-object/02';

export type ManType = {
  name: string;
  age: number;
};

const people: ManType[] = [
  { name: 'Andrew Ivanov', age: 33 },
  { name: 'Alex Petrov', age: 24 },
  { name: 'Dmitry Sidorov', age: 18 },
];

const dimychTransformator = (man: ManType) => ({
  stack: ['css', 'html', 'js', 'tdd', 'react'],
  firstName: man.name.split(' ')[0],
  lastName: man.name.split(' ')[1],
});

const devs = people.map(dimychTransformator);
const devs2 = people.map((man) => ({
  stack: ['css', 'html', 'js', 'tdd', 'react'],
  firstName: man.name.split(' ')[0],
  lastName: man.name.split(' ')[1],
}));

const message = people.map((man) => `Hello ${man.name.split(' ')[0]}, welcome to IT-incubator`);

export const createGreetingMessage = (people: Array<ManType>) => {
  return people.map((man) => `Hello ${man.name.split(' ')[0]}, welcome to IT-incubator`);
};
export const getStreetNameBuildings = (buildings: Array<governmentBuildingsType>) => {
  return buildings.map((item) => item.address.street.title);
};
export const getStreetNameHouses = (houses: Array<HouseType>) => {
  return houses.map((item) => item.address.street.title);
};
export const createMessages = (houses: Array<HouseType>) => {
  return houses.map((item) => `Hello guys from ${item.address.street.title}`);
};
