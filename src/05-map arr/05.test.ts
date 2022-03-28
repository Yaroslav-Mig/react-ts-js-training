import { CityType } from '../02-object/02';
import {
  ManType,
  dimychTransformator,
  createGreetingMessage,
  getStreetNameBuildings,
  getStreetNameHouses,
  createMessages,
} from './05';

let people: ManType[];
let city: CityType;

beforeEach(() => {
  people = [
    { name: 'Andrew Ivanov', age: 33 },
    { name: 'Alex Petrov', age: 24 },
    { name: 'Dmitry Sidorov', age: 18 },
  ];
});
beforeEach(() => {
  city = {
    title: 'New York',
    houses: [
      {
        id: 1,
        buildedAt: 2012,
        repaired: false,
        address: {
          number: 100,
          street: {
            title: 'White street',
          },
        },
      },
      {
        id: 2,
        buildedAt: 2008,
        repaired: false,
        address: {
          number: 100,
          street: {
            title: 'Black street',
          },
        },
      },
      {
        id: 3,
        buildedAt: 2014,
        repaired: false,
        address: {
          number: 100,
          street: {
            title: 'Pink street',
          },
        },
      },
    ],
    governmentBuildings: [
      {
        type: 'hospital',
        budget: 200000,
        staffCount: 300,
        address: {
          number: 13,
          street: {
            title: 'Central Str',
          },
        },
      },
      {
        type: 'fire-station',
        budget: 500000,
        staffCount: 500,
        address: {
          number: 21,
          street: {
            title: 'South Str',
          },
        },
      },
    ],
    citizensNumber: 100000,
  };
});

test('transform people', () => {
  const newDeveloper = people.map(dimychTransformator);

  expect(newDeveloper[0].stack).toStrictEqual(['css', 'html', 'js', 'tdd', 'react']);
  expect(newDeveloper[0].stack.length).toBe(5);
  expect(newDeveloper[0].firstName).toBe('Andrew');
  expect(newDeveloper[0].lastName).toBe('Ivanov');
});

test('should get greeting message', () => {
  const message = createGreetingMessage(people);

  expect(message.length).toBe(3);
  expect(message[0]).toBe('Hello Andrew, welcome to IT-incubator');
  expect(message[1]).toBe('Hello Alex, welcome to IT-incubator');
  expect(message[2]).toBe('Hello Dmitry, welcome to IT-incubator');
});

test('list of street name of governments buildings', () => {
  let streetsName = getStreetNameBuildings(city.governmentBuildings);

  expect(streetsName.length).toBe(2);
  expect(streetsName[0]).toBe('Central Str');
  expect(streetsName[1]).toBe('South Str');
});

test('list of street name of houses', () => {
  let streetsName = getStreetNameHouses(city.houses);

  expect(streetsName.length).toBe(3);
  expect(streetsName[0]).toBe('White street');
  expect(streetsName[1]).toBe('Black street');
  expect(streetsName[2]).toBe('Pink street');
});

test('create greeting messages for streets', () => {
  let messages = createMessages(city.houses);

  expect(messages.length).toBe(3);
  expect(messages[0]).toBe('Hello guys from White street');
  expect(messages[1]).toBe('Hello guys from Black street');
  expect(messages[2]).toBe('Hello guys from Pink street');
});
