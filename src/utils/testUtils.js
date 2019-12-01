// Return ShallowWrapper with the given data-test attribute value
export const findByDataTest = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};