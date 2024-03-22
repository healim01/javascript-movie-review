let debounce: ReturnType<typeof setTimeout> | undefined;

const debounceFunc = (func: () => void) => {
  if (debounce) {
    clearTimeout(debounce);
  }
  debounce = setTimeout(func, 500);
};
export default debounceFunc;
