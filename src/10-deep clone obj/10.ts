export type UserType = {
  name: string;
  hair: number;
  address: {
    city: string;
  };
  laptop?: {
    brand?: string;
    title?: string;
  };
};

export type UserBooksType = UserType & {
  books: string[];
};
type UserJobType = {
  id: number;
  title: string;
};
export type UserJobsType = UserBooksType & {
  jobs: Array<UserJobType>;
};

export type CompaniesType = {
  [key: string]: Array<UserJobType>;
};

export const getHaircut = (obj: UserType, divider: number): UserType => ({
  ...obj,
  hair: obj.hair / divider,
});

export const moveUser = (obj: UserType, city: string): UserType => ({
  ...obj,
  address: {
    ...obj.address,
    city,
  },
});

export const changeLaptop = (obj: UserType, laptop: Partial<UserType>): UserType => ({
  ...obj,
  laptop: {
    ...obj.laptop,
    ...laptop,
  },
});

export const addNewBooks = (obj: UserBooksType, books: string[]): UserBooksType => {
  const updatedBooks = obj.books.concat(books);
  return {
    ...obj,
    books: updatedBooks,
  };
};

export const replaceBook = (
  obj: UserBooksType,
  oldBook: string,
  newBook: string
): UserBooksType | never => {
  const index = obj.books.indexOf(oldBook);

  if (index > -1) {
    const copyObj = {
      ...obj,
      books: [...obj.books],
    };
    copyObj.books[index] = newBook;
    return copyObj;
  } else {
    throw new Error('We haven`t found book in your list');
  }
};

export const removeBook = (obj: UserBooksType, book: string): UserBooksType => ({
  ...obj,
  books: obj.books.filter((el) => el !== book),
});

export const addJob = (obj: UserJobsType, job: string): UserJobsType => {
  const lastItem = obj.jobs[obj.jobs.length - 1] as UserJobType;
  let newID: number = 1;

  if (lastItem && typeof lastItem.id === 'number') {
    newID = lastItem.id + 1;
  }
  return {
    ...obj,
    jobs: [
      ...obj.jobs,
      {
        id: newID,
        title: job,
      },
    ],
  };
};

export const updateCompanyTitle = (
  obj: CompaniesType,
  key: string,
  id: number,
  title: string
): CompaniesType => {
  return {
    ...obj,
    [key]: obj[key].map((item) => (item.id === id ? { ...item, title } : item)),
  };
};
