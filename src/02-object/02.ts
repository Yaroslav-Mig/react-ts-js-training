export type StudentType = {
  id: 1;
  name: string;
  age: number;
  isActive: boolean;
  address: AddressType2;
  technologies: TechType[];
};

type AddressType2 = {
  street: string;
  city: CountryType;
};

type CountryType = {
  title: string;
  countryTitle: string;
};

type TechType = {
  id: number;
  title: string;
};

export const student: StudentType = {
  id: 1,
  name: 'Yar',
  age: 33,
  isActive: true,
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

console.log(student.address.city.countryTitle);

type StreetType = {
  title: string;
};
type AddressType = {
  number: number;
  street: StreetType;
};
export type HouseType = {
	id?: number; 
  buildedAt: number;
  repaired: boolean;
  address: AddressType;
};

export type governmentBuildingsType = {
  type: 'hospital' | 'fire-station';
  budget: number;
  staffCount: number;
  address: AddressType;
};

export type CityType = {
  title: string;
  houses: Array<HouseType>;
  governmentBuildings: Array<governmentBuildingsType>;
  citizensNumber: number;
};
