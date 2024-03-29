// 1. Simple object
import React from 'react';

const DeepCopy = () => {
  const man = {
    name: 'John',
    age: 28,
  };

  let manFullCopy = Object.assign({}, man);
  manFullCopy.age = 30;

  // console.log(man === manFullCopy);
  // console.log(manFullCopy);

  // 2. Array of primitives
  let numbers = [1, 2, 3];
  let numbersFullCopy = numbers.concat();

  // console.log(numbers === numbersFullCopy);

  // 3. Object inside an object
  let man1 = {
    name: 'John',
    age: 28,
    mother: {
      name: 'Kate',
      age: 50,
    },
  };

  let man1FullCopy = {
    ...man1,
    mother: {
      ...man1.mother,
    },
  };

  // console.log(man1 !== man1FullCopy)
  // man1FullCopy.mother.age = 45;
  // console.log(man1FullCopy)
  // console.log(man1)

  // 4. Array of primitives inside an object
  let man2 = {
    name: 'John',
    age: 28,
    friends: ['Peter', 'Steven', 'William'],
  };

  let man2FullCopy = {
    ...man2,
    friends: Array.from(man2.friends),
  };
  // man2FullCopy.friends.push('Bob')
  // console.log(man2)
  // console.log(man2FullCopy)
  // console.log(man2FullCopy === man2)

  // 5 Array of objects
  let people = [
    { name: 'Peter', age: 30 },
    { name: 'Steven', age: 32 },
    { name: 'William', age: 28 },
  ];

  let peopleFullCopy = people.map((el) => ({ ...el }));

  // people[0].age = 13;
  // console.dir(people);
  // console.dir(peopleFullCopy);
  // console.log(people === peopleFullCopy);

  // 6 Array of objects inside object
  let man3 = {
    name: 'John',
    age: 28,
    friends: [
      { name: 'Peter', age: 30 },
      { name: 'Steven', age: 32 },
      { name: 'William', age: 28 },
    ],
  };

  let man3FullCopy = { ...man3, friends: man3.friends.slice() };

  // console.log(man3.friends !== man3FullCopy.friends);
  // console.log(man3 !== man3FullCopy);

  // 7 Object inside an object, inside an object
  let man4 = {
    name: 'John',
    age: 28,
    mother: {
      name: 'Kate',
      age: 50,
      work: {
        position: 'doctor',
        experience: 15,
      },
    },
  };

  let man4FullCopy = {
    ...man4,
    mother: {
      ...man4.mother,
      work: { ...man4.mother.work },
    },
  };

  // console.log(man4FullCopy !== man4);

  // 8 Array of objects inside object -> object
  let man5 = {
    name: 'John',
    age: 28,
    mother: {
      name: 'Kate',
      age: 50,
      work: {
        position: 'doctor',
        experience: 15,
      },
      parents: [
        { name: 'Kevin', age: 80 },
        { name: 'Jennifer', age: 78 },
      ],
    },
  };

  let man5FullCopy = {
    ...man5,
    mother: {
      ...man5.mother,
      work: {
        ...man5.mother.work,
      },
      parents: man5.mother.parents.map((el) => ({ ...el })),
    },
  };

  // console.log(man5FullCopy === man5);
  // console.log(man5FullCopy.mother.work === man5.mother.work);
  // console.log(man5FullCopy.mother.parents[0] === man5.mother.parents[0]);

  // 9 Object inside an object -> array -> object ->  object
  let man6 = {
    name: 'John',
    age: 28,
    mother: {
      name: 'Kate',
      age: 50,
      work: {
        position: 'doctor',
        experience: 15,
      },
      parents: [
        {
          name: 'Kevin',
          age: 80,
          favoriteDish: {
            title: 'borscht',
          },
        },
        {
          name: 'Jennifer',
          age: 78,
          favoriteDish: {
            title: 'sushi',
          },
        },
      ],
    },
  };

  let man6FullCopy = {
    ...man6,
    mother: {
      ...man6.mother,
      work: {
        ...man6.mother.work,
      },
      parents: man6.mother.parents.map((el) => ({ ...el, favoriteDish: { ...el.favoriteDish } })),
    },
  };

  // console.log(man6.mother.parents[0].favoriteDish !== man6FullCopy.mother.parents[0].favoriteDish);
  // console.log(
  //   man6.mother.parents[0].favoriteDish.title === man6FullCopy.mother.parents[0].favoriteDish.title
  // );

  //10 Array of objects inside an object -> object -> array -> object ->  object
  let man7 = {
    name: 'John',
    age: 28,
    mother: {
      name: 'Kate',
      age: 50,
      work: {
        position: 'doctor',
        experience: 15,
      },
      parents: [
        {
          name: 'Kevin',
          age: 80,
          favoriteDish: {
            title: 'borscht',
            ingredients: [
              { title: 'beet', amount: 3 },
              { title: 'potatoes', amount: 5 },
              { title: 'carrot', amount: 1 },
            ],
          },
        },
        {
          name: 'Jennifer',
          age: 78,
          favoriteDish: {
            title: 'sushi',
            ingredients: [
              { title: 'fish', amount: 1 },
              { title: 'rise', amount: 0.5 },
            ],
          },
        },
      ],
    },
  };

  let man7FullCopy = {
    ...man7,
    mother: {
      ...man7.mother,
      work: {
        ...man7.mother.work,
      },
      parents: man7.mother.parents.map((el) => ({
        ...el,
        favoriteDish: {
          ...el.favoriteDish,
          ingredients: el.favoriteDish.ingredients.map((item) => ({ ...item })),
        },
      })),
    },
  };

  console.log(
    man7.mother.parents[1].favoriteDish.ingredients[1] !==
      man7FullCopy.mother.parents[1].favoriteDish.ingredients[1]
	);

	console.log(
    man7.mother.parents[1].favoriteDish.ingredients[1].title ===
      man7FullCopy.mother.parents[1].favoriteDish.ingredients[1].title
  );

  return <div></div>;
};

export default DeepCopy;
