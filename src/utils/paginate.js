import _ from "lodash";
export function paginate(array, currentPage, onAPage) {
  const startingIndex = (currentPage - 1) * onAPage;
  return _(array).slice(startingIndex).take(onAPage).value();
}
