const options = [
  { value: 'destroy', label: 'destroy cluster resources' },
  { value: 'init', label: 'create the provision and deploy configuration with default values' },
  { value: 'up', label: 'provision a cluster' },
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
