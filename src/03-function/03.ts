import { StudentType, governmentBuildingsType, HouseType, CityType } from '../02-object/02';

export const addSkill = (st: StudentType, skill: string) => {
  st.technologies.push({
    id: new Date().getTime(),
    title: skill,
  });
};

export function makeStudentActive(st: StudentType) {
  st.isActive = true;
}

export const studentLocation = (obj: StudentType, city: string) => {
  return obj.address.city.title === city;
};
export function addMoneyToBudget(building: governmentBuildingsType, sum: number): void {
  building.budget += sum;
}
export const repairHouse = (house: HouseType): void => {
  house.repaired = true;
};
export const toHireStaff = (building: governmentBuildingsType, stuffCount: number): void => {
  building.staffCount += stuffCount;
};
export const toFireStaff = (building: governmentBuildingsType, stuffCount: number): void => {
  building.staffCount -= stuffCount;
};

export const createMeassage = (city: CityType): string => {
  return `Hello ${city.title} citizens. I want you to be happy. All ${city.citizensNumber} people`;
};
