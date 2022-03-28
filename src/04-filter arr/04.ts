import { CityType, governmentBuildingsType } from '../02-object/02';

type CourseType = {
  title: string;
  price: number;
};

export const predicate = (age: number): boolean => age > 65;
export const cheapCourseCheck = (course: CourseType): boolean => course.price < 160;

export function demolishHouses(city: CityType, nameStr: string): void {
  city.houses = city.houses.filter((el) => el.address.street.title !== nameStr);
}
export function getCountStaff(buildings: governmentBuildingsType[], sum: number): governmentBuildingsType[] {
  return buildings.filter((el) => el.staffCount >= sum);
}
export function filterItems(arr: Array<string>, query: string): string[] {
  return arr.filter((item) => item.toLowerCase().indexOf(query.toLowerCase()) !== -1);
}
