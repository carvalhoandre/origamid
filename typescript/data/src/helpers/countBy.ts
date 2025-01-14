import { CountList } from "../types/types";

export default function countBy(arr: Array<string | number>) {
  return arr.reduce((acc: CountList, item) => {
    if (acc[item]) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }

    return acc;
  }, {});
}
