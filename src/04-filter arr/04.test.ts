import { CityType } from '../02-object/02';
import { predicate, cheapCourseCheck, demolishHouses, getCountStaff, filterItems } from './04';

let city: CityType;

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

test('Hoses should be destroyed', () => {
  demolishHouses(city, 'Pink street');
  expect(city.houses.length).toBe(2);
});

test('Buildings with correct staff count', () => {
  const buildings = getCountStaff(city.governmentBuildings, 500);

  expect(buildings.length).toBe(1);
  expect(buildings[0].type).toBe('fire-station');
});

test('should be taken only old people', () => {
  const ages = [18, 20, 1, 90, 67, 44, 35];
  const oldAges = ages.filter(predicate);

  expect(oldAges.length).toBe(2);
  expect(oldAges[0]).toBe(90);
});

test('should be taken only cheap courses', () => {
  const courses = [
    { title: 'CSS', price: 110 },
    { title: 'JS', price: 200 },
    { title: 'React', price: 150 },
  ];
  const cheapCourses = courses.filter(cheapCourseCheck);

  expect(cheapCourses.length).toBe(2);
  expect(cheapCourses[0].title).toBe('CSS');
  expect(cheapCourses[1].title).toBe('React');
});

test('get only completed tasks', () => {
  const tasks = [
    { id: 1, name: 'Bread', status: false },
    { id: 2, name: 'Milk', status: true },
    { id: 3, name: 'Salt', status: false },
    { id: 4, name: 'Sugar', status: true },
  ];
  const completedTasks = tasks.filter((task) => task.status);

  expect(completedTasks.length).toBe(2);
  expect(completedTasks[0].name).toBe('Milk');
  expect(completedTasks[1].name).toBe('Sugar');
  expect(completedTasks[0].status).toBeTruthy();
  expect(completedTasks[1].status).toBeTruthy();
});

test('get only uncompleted tasks', () => {
  const tasks = [
    { id: 1, name: 'Bread', status: false },
    { id: 2, name: 'Milk', status: true },
    { id: 3, name: 'Salt', status: false },
    { id: 4, name: 'Sugar', status: true },
  ];
  const completedTasks = tasks.filter((task) => !task.status);

  expect(completedTasks.length).toBe(2);
  expect(completedTasks[0].id).toBe(1);
  expect(completedTasks[1].id).toBe(3);
  expect(completedTasks[0].status).toBeFalsy();
  expect(completedTasks[1].status).toBeFalsy();
});

test('filter array content based on search criteria', () => {
  const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

  const filterFruits = filterItems(fruits, 'ap');
  const filterFruits2 = filterItems(fruits, 'an');

  expect(filterFruits.length).toBe(2);
  expect(filterFruits2.length).toBe(3);
  expect(filterFruits[0]).toBe('apple');
  expect(filterFruits[1]).toBe('grapes');
  expect(filterFruits2[0]).toBe('banana');
  expect(filterFruits2[1]).toBe('mango');
  expect(filterFruits2[2]).toBe('orange');
});
