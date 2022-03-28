import { ManType } from './07';

let props: ManType;

beforeEach(() => {
  props = {
    age: 32,
    name: 'Dimych',
    lessons: [{ title: '1' }, { title: '2', name: 'react' }],
    address: {
      street: {
        title: 'Victory street',
      },
    },
  };
});

test('test of destructuring object', () => {
  // const age = props.age;
  // const name = props.name;
  // const lessons = props.lessons;

  const {
    age,
    name,
    lessons,
    address: {
      street: { title },
    },
  } = props;

  expect(age).toBe(32);
  expect(name).toBe('Dimych');
  expect(title).toBe('Victory street');
  expect(lessons.length).toBe(2);
});

test.skip('test of destructuring function', () => {});

test('test of destructuring array', () => {
  const l1 = props.lessons[0];
  const l2 = props.lessons[1];

  const [ls1, ls2] = props.lessons;

  expect(l1.title).toBe('1');
  expect(l2.title).toBe('2');
  expect(ls1.title).toBe('1');
  expect(ls2.title).toBe('2');
  expect(ls2).toStrictEqual({ title: '2', name: 'react' });
});
