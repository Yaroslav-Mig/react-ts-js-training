import { title } from 'process';
import { CityType } from './02';

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
        staffCount: 500,
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
        staffCount: 1000,
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

test('test city should be contain 3 houses', () => {
  expect(city.houses.length).toBe(3);

  expect(city.houses[0].buildedAt).toBe(2012);
  expect(city.houses[0].repaired).toBe(false);
  expect(typeof city.houses[0].address.number).toBe('number');
  expect(typeof city.houses[0].address.street.title).toBe('string');

  expect(city.houses[1].buildedAt).toBe(2008);
  expect(city.houses[1].repaired).toBe(false);
  expect(typeof city.houses[1].address.number).toBe('number');
  expect(typeof city.houses[1].address.street.title).toBe('string');

  expect(city.houses[2].buildedAt).toBe(2014);
  expect(city.houses[2].repaired).toBe(false);
  expect(typeof city.houses[2].address.number).toBe('number');
  expect(typeof city.houses[2].address.street.title).toBe('string');
});

test('test city should contains government buildings', () => {
  expect(city.governmentBuildings.length).toBe(2);

  expect(city.governmentBuildings[0].type).toBe('hospital');
  expect(city.governmentBuildings[0].budget).toBe(200000);
  expect(city.governmentBuildings[0].staffCount).toBe(500);
  expect(city.governmentBuildings[0].address.street.title).toBe('Central Str');

  expect(city.governmentBuildings[1].type).toBe('fire-station');
  expect(city.governmentBuildings[1].budget).toBe(500000);
  expect(city.governmentBuildings[1].staffCount).toBe(1000);
  expect(city.governmentBuildings[1].address.street.title).toBe('South Str');
});
