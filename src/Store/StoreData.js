import { allData } from "../data";

export const getDataById = (targetId) => {
  const data = allData.find((dt) => dt.id === +targetId);
  return data;
};
export const getDataBySlug = (slug) => {
  const data = allData.find((dt) => dt.slug === slug);
  return data;
};
export const getDataByCategory = (category) => {
  const data = allData.filter((dt) => dt.category === category);
  return data;
};
