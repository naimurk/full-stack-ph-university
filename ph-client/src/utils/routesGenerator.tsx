import { TRoutesData, TTRoutes } from "../types";

export const routesGenerator = (routesData: TRoutesData[]) => {
  const routes = routesData?.reduce((acc: TTRoutes[], item) => {
    if (item?.path && item?.element) {
      acc.push({ path: item.path, element: item.element });
    }
    if (item?.children) {
      item?.children?.forEach((i) =>
        acc.push({ path: i.path!, element: i.element })
      );
    }
    return acc;
  }, []);
  return routes;
};
