const options = [
  { value: 'up', label: 'provision a cluster' },
  { value: 'init', label: 'setup and configure my cluster' },
];

export const primaryOptions = options.sort((x, y) => {
  if (x.value < y.value) {
    return -1;
  }
  if (x.value > y.value) {
    return 1;
  }
  return 0;
});
