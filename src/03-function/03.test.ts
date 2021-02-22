import { StudentType, CityType } from '../02-object/02';
import {
  addMoneyToBudget,
  addSkill,
  makeStudentActive,
  repairHouse,
  studentLocation,
  toHireStaff,
  toFireStaff,
  createMeassage,
} from './03';

let student: StudentType;

beforeEach(() => {
  student = {
    id: 1,
    name: 'Yar',
    age: 33,
    isActive: false,
    address: {
      street: '50 let Pobedy',
      city: {
        title: 'Minsk',
        countryTitle: 'Belarus',
      },
    },
    technologies: [
      { id: 1, title: 'HTML' },
      { id: 2, title: 'CSS' },
      { id: 3, title: 'JS' },
      { id: 4, title: 'React' },
    ],
  };
});

test('new skill should be added to student', () => {
  addSkill(student, 'Angular');
  expect(student.technologies.length).toBe(5);
  expect(student.technologies[4].title).toBe('Angular');
  expect(student.technologies[4].title).toBeDefined();
});

test('student should be made active', () => {
  expect(student.isActive).toBe(false);
  makeStudentActive(student);
  expect(student.isActive).toBe(true);
});

test('does student live in the city?', () => {
  let result1 = studentLocation(student, 'Moscow');
  let result2 = studentLocation(student, 'Minsk');

  expect(result1).toBe(false);
  expect(result2).toBe(true);
});

// * new Test

let city: CityType;

beforeEach(() => {
  city = {
    title: 'New York',
    houses: [
      {
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

test('Budget should be changed for HOSPITAL', () => {
  addMoneyToBudget(city.governmentBuildings[0], 100000);
  expect(city.governmentBuildings[0].budget).toBe(300000);
});

test('Budget should be changed for Fire-Station', () => {
  addMoneyToBudget(city.governmentBuildings[1], -100000);
  expect(city.governmentBuildings[1].budget).toBe(400000);
});

test('Hoses should be repaired', () => {
  repairHouse(city.houses[1]);
  expect(city.houses[1].repaired).toBeTruthy();
});

test('Staff should be increased', () => {
  toHireStaff(city.governmentBuildings[0], 100);
  toHireStaff(city.governmentBuildings[1], 20);

  expect(city.governmentBuildings[0].staffCount).toBe(400);
  expect(city.governmentBuildings[1].staffCount).toBe(520);
});

test('Staff should be decreased', () => {
  toFireStaff(city.governmentBuildings[0], 50);
  toFireStaff(city.governmentBuildings[1], 50);

  expect(city.governmentBuildings[0].staffCount).toBe(250);
  expect(city.governmentBuildings[1].staffCount).toBe(450);
});

test('Greetimg message should be correct for city', () => {
  expect(createMeassage(city)).toBe('Hello New York citizens. I want you to be happy. All 100000 people');
});
