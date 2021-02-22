import React, { useState } from 'react';

// type lessonsType = {
//   title: string;
//   name?: string;
// };

export type ManType = {
  name: string;
  age: number;
  lessons: Array<{ title: string; name?: string }>;
  address: {
    street: {
      title: string;
    };
  };
};
type PropsType = {
  title: string;
  man: ManType;
  food: string;
  car: {
    model: string;
    year: number;
  };
};

//TODO:  взамен объявления каждого свойства типа можно написать
//TODO:  как по тексту выше, только если он используется 1 раз, НО ЛУЧШЕ ТИПИЗИОВАТЬ КАЖДОЕ СВОЙСТВО

// type StreetType = {
//   title: string;
// };
// type AddressType = {
//   street: StreetType;
// };
// type LessonsType = {
// 	title: string;
// }

export const ManComponent: React.FC<PropsType> = ({ title, man: { name }, ...props }) => {
  //TODO:  Как вариант использования деструктуризации пропсов с рест операторм
  // const {
  //   title,
  // 	man: { name },
  // 	...restProps,
  // } = props;

  const [message, setMessage] = useState<string>('hello');

  return (
    <div>
      <h1>{title}</h1>
      <hr />
      <div>{name}</div>
      <div>{props.car.model}</div>
    </div>
  );
};

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};
const task1: Array<TaskType> = [
	{ id: 1, title: 'HTML&CSS', isDone: true },
	{ id: 2, title: 'JS', isDone: true },
	{ id: 3, title: 'React', isDone: false },
];

const [title1, title2, ...rest] = task1 as [TaskType, TaskType, Array<TaskType>];

let lessons = [{ title: '1', name: 'js' }, { title: '2', name: 'react' }];